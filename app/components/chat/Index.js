"use client"

import { useState, useEffect, useRef } from "react"
import io from "socket.io-client"
import AskName from './askname/Index'
import Admin from './admin/Index'
import User from './user/Index'
import useOnlineUserManager from './useOnlineUserManager'

// Socket server
// https://foregoing-stealth-ozraraptor.glitch.me
const socket = io("https://foregoing-stealth-ozraraptor.glitch.me", {
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

  const { userId, activeUsers } = useOnlineUserManager()

  // Connect / disconnect socket
  useEffect(() => {
    if (isChatOpen) socket.connect()
    else resetChat()

    return () => {
      socket.disconnect()
      resetChat()
    }
  }, [isChatOpen])

  // Reset all chat state
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

  // Start chat - user/admin
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

  // Handle new message send
  const sendMessage = () => {
    if (!newMessage.trim()) return

    const to = isAdmin ? activeChatUser : "001"
    socket.emit("send_message", { to, text: newMessage })

    setNewMessage("")
    socket.emit("stop_typing", { to })
  }

  // Emit typing events
  useEffect(() => {
    const to = isAdmin ? activeChatUser : "001"
    if (!to) return

    if (newMessage.trim()) {
      socket.emit("typing", { to })
    } else {
      socket.emit("stop_typing", { to })
    }
  }, [newMessage, activeChatUser])

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, activeChatUser])

  // Receive all socket events
  useEffect(() => {
    socket.on("identity_ok", () => { })
    socket.on("identity_error", (msg) => alert(msg))

    socket.on("update_users_list", (list) => {
      const newUsers = list.filter((user) => !usersList.includes(user) && user !== "001")

      newUsers.forEach((user) => {
        socket.emit("send_message", {
          to: user,
          text: "👋 Welcome! How can we assist you today?",
        })
      })

      setUsersList(list)
    })

    socket.on("receive_message", ({ from, to, text, time }) => {
      const chatPartner = isAdmin
        ? (from === "001" || from === "admin" ? to : from)
        : "001"

      const isChatOpenWithUser = isAdmin && activeChatUser === chatPartner

      setMessages((prev) => {
        const prevMsgs = prev[chatPartner] || []
        return {
          ...prev,
          [chatPartner]: [
            ...prevMsgs,
            {
              from,
              text,
              time,
              seen: isChatOpenWithUser, // Mark seen only if chat is active
            },
          ],
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
  }, [isAdmin, activeChatUser])

  // Handle active chat change and mark messages seen
  const handleSetActiveChatUser = (user) => {
    setActiveChatUser(user)

    setMessages((prev) => {
      const updatedMessages = prev[user]?.map((msg) =>
        msg.seen ? msg : { ...msg, seen: true }
      ) || []

      return {
        ...prev,
        [user]: updatedMessages,
      }
    })
  }

  // Calculate unseen message count for each user
  const unseenCounts = {}
  usersList.forEach((user) => {
    unseenCounts[user] = messages[user]?.filter((msg) => !msg.seen).length || 0
  })

  // UI Rendering
  if (!isChatOpen) return null

  if (step === "askName") {
    return (
      <AskName
        username={username}
        setUsername={setUsername}
        setIsChatOpen={setIsChatOpen}
        startChat={startChat}
      />
    )
  }

  if (isAdmin) {
    return (
      <Admin
        messagesEndRef={messagesEndRef}
        sendMessage={sendMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        setIsChatOpen={setIsChatOpen}
        usersList={usersList}
        setActiveChatUser={handleSetActiveChatUser}
        activeChatUser={activeChatUser}
        typingUsers={typingUsers}
        messages={messages}
        unseenCounts={unseenCounts} // 🔥 PASSING THIS TO Admin
        activeUsers={activeUsers}
      />
    )
  }

  return (
    <User
      username={username}
      setIsChatOpen={setIsChatOpen}
      phone={phone}
      messages={messages}
      typingUsers={typingUsers}
      messagesEndRef={messagesEndRef}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
    />
  )
}

export default Chat
