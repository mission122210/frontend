"use client"

import React, { useState, useEffect, useRef } from "react"
import { X, Send, Headphones } from "lucide-react"
import io from "socket.io-client"

const socket = io("https://backend-production-e070.up.railway.app", {
  autoConnect: false,
  reconnection: false,
})

const Chat = ({ isChatOpen, setIsChatOpen, phone }) => {
  const [username, setUsername] = useState("")
  const [step, setStep] = useState("askName")
  const [isAdmin, setIsAdmin] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [activeChatUser, setActiveChatUser] = useState(null)
  const [messages, setMessages] = useState({})
  const [newMessage, setNewMessage] = useState("")
  const [typingUsers, setTypingUsers] = useState({})
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isChatOpen) socket.connect()
    else resetChat()

    return () => {
      socket.disconnect()
      resetChat()
    }
  }, [isChatOpen])

  const resetChat = () => {
    setUsername("")
    setStep("askName")
    setIsAdmin(false)
    setUsersList([])
    setActiveChatUser(null)
    setMessages({})
    setNewMessage("")
    setTypingUsers({})
  }

  useEffect(() => {
    socket.on("identity_ok", () => { })
    socket.on("identity_error", (msg) => alert(msg))

    socket.on("update_users_list", (list) => {
      setUsersList(list)
    })

    socket.on("receive_message", ({ from, to, text, time }) => {
      const chatPartner = isAdmin
        ? from === "001" || from === "admin"
          ? to
          : from
        : "001"

      setMessages((prev) => {
        const prevMsgs = prev[chatPartner] || []
        return {
          ...prev,
          [chatPartner]: [...prevMsgs, { from, text, time }],
        }
      })
    })

    socket.on("typing", ({ from }) => {
      setTypingUsers((prev) => ({ ...prev, [from]: true }))
    })

    socket.on("stop_typing", ({ from }) => {
      setTypingUsers((prev) => {
        const updated = { ...prev }
        delete updated[from]
        return updated
      })
    })

    return () => {
      socket.off()
    }
  }, [isAdmin])

  const startChat = () => {
    if (!username.trim()) return

    if (username === "001") {
      setIsAdmin(true)
      socket.emit("set_identity", { name: "001" })
    } else {
      socket.emit("set_identity", { name: username })
    }

    setStep("chat")
  }

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const to = isAdmin ? activeChatUser : "001"
    socket.emit("send_message", { to, text: newMessage })

    setNewMessage("")
    socket.emit("stop_typing", { to })
  }

  useEffect(() => {
    const to = isAdmin ? activeChatUser : "001"
    if (!to) return

    if (newMessage.trim()) {
      socket.emit("typing", { to })
    } else {
      socket.emit("stop_typing", { to })
    }
  }, [newMessage, activeChatUser])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, activeChatUser])

  if (!isChatOpen) return null

  // Step 1: Username Input
  if (step === "askName") {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Enter your username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your username"
            className="w-full border p-2 rounded mb-4"
            onKeyDown={(e) => e.key === "Enter" && startChat()}
            autoFocus
          />
          <button
            onClick={startChat}
            disabled={!username.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 w-full"
          >
            Start Chat
          </button>
          <button
            onClick={() => setIsChatOpen(false)}
            className="mt-3 w-full text-center text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  // === Admin UI ===
  if (isAdmin) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50">
        {/* Sidebar */}
        <div className="bg-white w-64 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Users</h3>
            <button onClick={() => setIsChatOpen(false)}><X /></button>
          </div>
          {usersList.length === 0 && <p>No active users</p>}
          <ul className="space-y-2">
            {usersList.map((user) => (
              <li
                key={user}
                className={`p-2 rounded cursor-pointer ${activeChatUser === user ? "bg-blue-100" : "hover:bg-gray-100"
                  }`}
                onClick={() => setActiveChatUser(user)}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat window */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="bg-blue-600 text-white p-4 flex justify-between">
            <h3>{activeChatUser ? `Chat with ${activeChatUser}` : "Select a user"}</h3>
            <button onClick={() => setIsChatOpen(false)}><X /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {activeChatUser &&
              (messages[activeChatUser] || []).map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-xs p-3 rounded-lg ${msg.from === "001" ? "bg-blue-600 text-white ml-auto" : "bg-gray-200"
                    }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs mt-1 text-right">{msg.time}</div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>

          {activeChatUser && (
            <div className="p-4 flex space-x-2 border-t">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 border rounded px-3 py-2"
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className="bg-blue-600 text-white px-4 rounded"
              >
                <Send />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  const whatsappNumber = phone.replace(/\D/g, "") // leaves only digits

  // === User UI ===
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
      <div className="bg-white rounded-t-3xl w-full max-w-md h-[600px] flex flex-col shadow-lg">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Headphones size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-sm text-emerald-100">Chatting as {username}</p>
            </div>
          </div>
          <button onClick={() => setIsChatOpen(false)}><X /></button>
        </div>

        {/* Info Message */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm px-4 py-3">
          Typically replies within a minute. But for quick response, you can contact them via WhatsApp chat{" "}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            {phone}
          </a>


        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {(messages["001"] || []).map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs p-3 rounded-lg ${msg.from === "001" ? "bg-gray-200" : "bg-blue-600 text-white ml-auto"
                }`}
            >
              <div>{msg.text}</div>
              <div className="text-xs mt-1 text-right">{msg.time}</div>
            </div>
          ))}
          {typingUsers["001"] && <p className="text-sm italic text-gray-400">Admin is typing...</p>}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 flex space-x-2 border-t">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="bg-emerald-600 text-white px-4 rounded"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>

  )
}

export default Chat
