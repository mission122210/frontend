"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send, Headphones, Users, MessageCircle, Phone, Sparkles, Crown, Zap } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import io from "socket.io-client"

// http://localhost:3001
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
      // Identify new users who just joined
      const newUsers = list.filter((user) => !usersList.includes(user) && user !== "001");

      // Send welcome message to each new user
      newUsers.forEach((user) => {
        socket.emit("send_message", {
          to: user,
          text: "👋 Welcome! How can we assist you today?",
        });
      });

      setUsersList(list);
    });


    socket.on("receive_message", ({ from, to, text, time }) => {
      const chatPartner = isAdmin ? (from === "001" || from === "admin" ? to : from) : "001"

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

  // Step 1: Enhanced Username Input
  if (step === "askName") {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="relative">
          {/* Background decorations */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-20"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Live Chat</h2>
              <p className="text-white/90 text-sm">Enter your name to start chatting with our support team</p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-3">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 p-4 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 outline-none"
                    onKeyDown={(e) => e.key === "Enter" && startChat()}
                    autoFocus
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Sparkles size={20} className="text-purple-400" />
                  </div>
                </div>
              </div>

              <button
                onClick={startChat}
                disabled={!username.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {username.trim() ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Zap size={20} />
                    <span>Start Chatting</span>
                  </span>
                ) : (
                  "Enter your name first"
                )}
              </button>

              <button
                onClick={() => setIsChatOpen(false)}
                className="mt-4 w-full text-center text-gray-500 hover:text-gray-700 font-medium py-2 transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>

            {/* Footer info */}
            <div className="bg-gray-50 px-8 py-4 text-center border-t">
              <p className="text-xs text-gray-600">🔒 Your privacy is protected • Average response time: 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // === Enhanced Admin UI ===
  if (isAdmin) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex z-50">
        {/* Enhanced Sidebar */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 w-80 border-r border-purple-500/20 shadow-2xl">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-purple-500/20">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Crown size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Admin Panel</h3>
                  <p className="text-purple-300 text-sm">Live Chat Management</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-3 rounded-xl border border-emerald-500/30">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-emerald-400" />
                  <span className="text-emerald-300 text-sm font-medium">Active Users</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">{usersList.length}</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 rounded-xl border border-blue-500/30">
                <div className="flex items-center space-x-2">
                  <MessageCircle size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">Online</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Users List */}
          <div className="p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <Users size={18} />
              <span>Active Conversations</span>
            </h4>

            {usersList.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm">No active users</p>
                <p className="text-gray-500 text-xs mt-1">Waiting for customers to connect...</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {usersList.map((user) => (
                  <li
                    key={user}
                    className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-200 ${activeChatUser === user
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "hover:bg-white/10 text-gray-300 hover:text-white"
                      }`}
                    onClick={() => setActiveChatUser(user)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${activeChatUser === user ? "bg-white/20" : "bg-gradient-to-r from-blue-500 to-purple-500"
                          }`}
                      >
                        <span className="text-sm font-bold text-white">{user.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{user}</div>
                        <div className="text-xs opacity-75">{typingUsers[user] ? "Typing..." : "Online"}</div>
                      </div>
                      {messages[user] && messages[user].length > 0 && (
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Enhanced Chat Window */}
        <div className="flex-1 flex flex-col bg-gradient-to-b from-slate-800 to-slate-900">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-slate-800 to-purple-800 text-white p-6 border-b border-purple-500/20 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {activeChatUser ? (
                  <>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{activeChatUser.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{activeChatUser}</h3>
                      <div className="flex items-center space-x-2 text-sm text-purple-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Online now</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold">Select a conversation</h3>
                    <p className="text-purple-300 text-sm">Choose a user from the sidebar to start chatting</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-900 to-slate-800">
            {activeChatUser ? (
              <>
                {(messages[activeChatUser] || []).map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.from === "001" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-md px-6 py-4 rounded-2xl shadow-lg ${msg.from === "001"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-white text-gray-800"
                        }`}
                    >
                      <div className="font-medium">{msg.text}</div>
                      <div className={`text-xs mt-2 ${msg.from === "001" ? "text-purple-200" : "text-gray-500"}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
                {typingUsers[activeChatUser] && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 px-6 py-4 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No conversation selected</h3>
                  <p className="text-gray-400">Choose a user from the sidebar to start chatting</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          {activeChatUser && (
            <div className="p-6 border-t border-purple-500/20 bg-gradient-to-r from-slate-800 to-purple-800">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700 text-white border border-purple-500/30 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                />
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-2xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const whatsappNumber = phone.replace(/\D/g, "")

  // === Enhanced User UI ===
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-end p-4 z-50">
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl blur-xl opacity-20"></div>

        <div className="relative bg-white rounded-3xl w-full max-w-md h-[700px] flex flex-col shadow-2xl overflow-hidden">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Headphones size={28} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Customer Support</h3>
                  <p className="text-emerald-100 text-sm">Chatting as {username}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-200">Typically replies in 2 minutes</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Enhanced Info Message */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap size={16} className="text-white" />
              </div>
              <div className="text-sm">
                <p className="text-yellow-800 font-medium mb-1">Quick Response Available!</p>
                <p className="text-yellow-700">
                  For instant support, contact us via WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-semibold underline transition-colors duration-200"
                  >
                    <FaWhatsapp size={14} />
                    <span>{phone}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {(messages["001"] || []).length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Start the conversation!</h4>
                <p className="text-gray-600 text-sm">Send a message to get help from our support team</p>
              </div>
            )}

            {(messages["001"] || []).map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === "001" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs px-5 py-3 rounded-2xl shadow-lg ${msg.from === "001"
                    ? "bg-white border border-gray-200 text-gray-800"
                    : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                    }`}
                >
                  <div className="font-medium">{msg.text}</div>
                  <div className={`text-xs mt-2 ${msg.from === "001" ? "text-gray-500" : "text-emerald-100"}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {typingUsers["001"] && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 italic">Support is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Area */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 rounded-2xl px-4 py-3 text-gray-800 placeholder-gray-400 transition-all duration-200 outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 text-white px-6 py-3 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
