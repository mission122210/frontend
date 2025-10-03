"use client"
import { useState, useEffect, useRef } from "react"
import io from "socket.io-client"
import AskName from "./askname/Index"
import Admin from "./admin/Index"
import User from "./user/Index"

const socket = io("https://superb-ulrikaumeko-master122-18c28fbd.koyeb.app", {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
})

const Chat = ({ isChatOpen, setIsChatOpen, phone }) => {
  const [username, setUsername] = useState("")
  const [step, setStep] = useState("askName")
  const [isAdmin, setIsAdmin] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [activeChatUser, setActiveChatUser] = useState(null)
  const [messages, setMessages] = useState({})
  const [newMessage, setNewMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const [typingUsers, setTypingUsers] = useState({})
  const [isMinimized, setIsMinimized] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [hasStartedChat, setHasStartedChat] = useState(false)
  const messagesEndRef = useRef(null)
  const socketInitialized = useRef(false)

  // Request notification permission on component mount
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission()
    }
  }, [])

  // Show browser notification
  const showNotification = (title, body, from) => {
    if ("Notification" in window && Notification.permission === "granted") {
      const notification = new Notification(title, {
        body: body,
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        tag: `chat-${from}`,
        requireInteraction: false,
        silent: false,
      })

      notification.onclick = () => {
        window.focus()
        setIsMinimized(false)
        if (isAdmin && from !== "001") {
          setActiveChatUser(from)
        }
        notification.close()
      }

      setTimeout(() => notification.close(), 10000)
    }
  }

  // Initialize socket connection only when needed
  useEffect(() => {
    if (isChatOpen && hasStartedChat && !socketInitialized.current) {
      socket.connect()
      socketInitialized.current = true
    }

    // Cleanup function - only run when component unmounts or chat is completely closed
    return () => {
      if (!isChatOpen && !isMinimized) {
        socket.disconnect()
        socketInitialized.current = false
        resetChat()
      }
    }
  }, [isChatOpen, hasStartedChat])

  // Reset chat state (only for complete disconnection)
  const resetChat = () => {
    setUsername("")
    setStep("askName")
    setIsAdmin(false)
    setUsersList([])
    setActiveChatUser(null)
    setMessages({})
    setNewMessage("")
    setTypingUsers({})
    setIsConnected(false)
    setIsMinimized(false)
    setHasStartedChat(false)
  }

  // Start chat - user/admin
  const startChat = () => {
    if (!username.trim() || username.length < 2) return

    // Set the flag that chat has started
    setHasStartedChat(true)

    // Determine if admin
    if (username === "001") {
      setIsAdmin(true)
    }

    // Move to chat step immediately
    setStep("chat")

    // Connect socket and set identity
    if (!socketInitialized.current) {
      socket.connect()
      socketInitialized.current = true
    }

    // Set identity after a small delay to ensure connection
    setTimeout(() => {
      socket.emit("set_identity", { name: username })
    }, 100)
  }

  // Handle minimize/maximize
  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleMaximize = () => {
    setIsMinimized(false)
  }

  // Handle complete close (admin only)
  const handleCompleteClose = () => {
    socket.disconnect()
    socketInitialized.current = false
    resetChat()
    setIsChatOpen(false)
  }

  // Admin function to disconnect a user
  const disconnectUser = (username) => {
    socket.emit("admin_disconnect_user", { username })
    setUsersList((prev) => prev.filter((user) => user !== username))
    if (activeChatUser === username) {
      setActiveChatUser(null)
    }
    // Remove user messages
    setMessages((prev) => {
      const updated = { ...prev }
      delete updated[username]
      return updated
    })
  }

  const sendMessage = () => {
    if (!newMessage.trim() && !selectedImage) return;

    const to = isAdmin ? activeChatUser : "001";

    socket.emit("send_message", {
      to,
      text: newMessage.trim(),
      image: selectedImage || null, // include image if present
    });

    setNewMessage("");
    setSelectedImage(null);
    socket.emit("stop_typing", { to });
  };


  // Emit typing events
  useEffect(() => {
    if (!hasStartedChat) return

    const to = isAdmin ? activeChatUser : "001"
    if (!to) return
    if (newMessage.trim()) {
      socket.emit("typing", { to })
    } else {
      socket.emit("stop_typing", { to })
    }
  }, [newMessage, activeChatUser, isAdmin, hasStartedChat])

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, activeChatUser])

  // Socket event listeners - only set up when chat has started
  useEffect(() => {
    if (!hasStartedChat) return

    const handleConnect = () => {
      setIsConnected(true)
    }

    const handleDisconnect = () => {
      setIsConnected(false)
    }

    const handleIdentityOk = () => {
      // Identity confirmed, chat is ready
    }

    const handleIdentityError = (msg) => {
      alert(msg)
    }

    const handleUpdateUsersList = (list) => {
      const newUsers = list.filter((user) => !usersList.includes(user) && user !== "001")
      newUsers.forEach((user) => {
        socket.emit("send_message", {
          to: user,
          text: "👋 Welcome! How can we assist you today?",
        })
      })
      setUsersList(list)
    }

    const handleReceiveMessage = ({ from, to, text, image, time }) => {
      const chatPartner = isAdmin ? (from === "001" || from === "admin" ? to : from) : "001"
      const isChatOpenWithUser = isAdmin && activeChatUser === chatPartner

      // Show notification if window is minimized or not focused
      if (isMinimized || document.hidden) {
        const notificationTitle = isAdmin
          ? `New message from ${from === "001" ? "You" : from}`
          : "New message from Support"
        showNotification(notificationTitle, text, from)
      }

      setMessages((prev) => {
        const prevMsgs = prev[chatPartner] || []
        return {
          ...prev,
          [chatPartner]: [
            ...prevMsgs,
            {
              from,
              text,
              image,
              time,
              seen: isChatOpenWithUser && !isMinimized,
            },
          ],
        }
      })
    }

    const handleTyping = ({ from }) => {
      setTypingUsers((prev) => ({ ...prev, [from]: true }))
    }

    const handleStopTyping = ({ from }) => {
      setTypingUsers((prev) => {
        const updated = { ...prev }
        delete updated[from]
        return updated
      })
    }

    const handleUserDisconnected = ({ username }) => {
      setUsersList((prev) => prev.filter((user) => user !== username))
      if (activeChatUser === username) {
        setActiveChatUser(null)
      }
    }

    // Add event listeners
    socket.on("connect", handleConnect)
    socket.on("disconnect", handleDisconnect)
    socket.on("identity_ok", handleIdentityOk)
    socket.on("identity_error", handleIdentityError)
    socket.on("update_users_list", handleUpdateUsersList)
    socket.on("receive_message", handleReceiveMessage)
    socket.on("typing", handleTyping)
    socket.on("stop_typing", handleStopTyping)
    socket.on("user_disconnected", handleUserDisconnected)

    // Cleanup function
    return () => {
      socket.off("connect", handleConnect)
      socket.off("disconnect", handleDisconnect)
      socket.off("identity_ok", handleIdentityOk)
      socket.off("identity_error", handleIdentityError)
      socket.off("update_users_list", handleUpdateUsersList)
      socket.off("receive_message", handleReceiveMessage)
      socket.off("typing", handleTyping)
      socket.off("stop_typing", handleStopTyping)
      socket.off("user_disconnected", handleUserDisconnected)
    }
  }, [isAdmin, activeChatUser, isMinimized, usersList, hasStartedChat])

  // Handle active chat change and mark messages seen
  const handleSetActiveChatUser = (user) => {
    setActiveChatUser(user)
    setMessages((prev) => {
      const updatedMessages = prev[user]?.map((msg) => (msg.seen ? msg : { ...msg, seen: true })) || []
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
  if (!isChatOpen && !hasStartedChat) return null

  // Show minimized chat button
  if (isMinimized && hasStartedChat) {
    const totalUnseenMessages = Object.values(unseenCounts).reduce((sum, count) => sum + count, 0)

    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleMaximize}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
        >
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-semibold">{isAdmin ? "Admin Chat" : "Support Chat"}</div>
            <div className="text-xs text-emerald-100">{isConnected ? "Connected" : "Connecting..."}</div>
          </div>
          {totalUnseenMessages > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
              {totalUnseenMessages > 99 ? "99+" : totalUnseenMessages}
            </div>
          )}
        </button>
      </div>
    )
  }

  if (step === "askName") {
    return (
      <AskName username={username} setUsername={setUsername} setIsChatOpen={handleMinimize} startChat={startChat} />
    )
  }

  if (isAdmin) {
    return (
      <Admin
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        messagesEndRef={messagesEndRef}
        sendMessage={sendMessage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        setIsChatOpen={handleCompleteClose}
        onMinimize={handleMinimize}
        usersList={usersList}
        setActiveChatUser={handleSetActiveChatUser}
        activeChatUser={activeChatUser}
        typingUsers={typingUsers}
        messages={messages}
        unseenCounts={unseenCounts}
        disconnectUser={disconnectUser}
        isConnected={isConnected}
      />
    )
  }

  return (
    <User
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
      username={username}
      setIsChatOpen={handleMinimize}
      onMinimize={handleMinimize}
      phone={phone}
      messages={messages}
      typingUsers={typingUsers}
      messagesEndRef={messagesEndRef}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
      isConnected={isConnected}
    />
  )
}

export default Chat
