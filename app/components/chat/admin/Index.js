"use client"
import { X, Send, Users, MessageCircle, Crown, Minus, UserX, Wifi, WifiOff, Menu, ImageIcon, Smile } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const ChatInterface = ({
    selectedImage,
    setSelectedImage,
    setIsChatOpen,
    onMinimize,
    usersList,
    setActiveChatUser,
    activeChatUser,
    typingUsers,
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
    messagesEndRef,
    unseenCounts,
    disconnectUser,
    isConnected,
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isDragOver, setIsDragOver] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState(null)
    const fileInputRef = useRef(null)
    const textareaRef = useRef(null)
    const emojiPickerRef = useRef(null)

    const commonEmojis = [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "😂",
        "🤣",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
        "😍",
        "🥰",
        "😘",
        "😗",
        "😙",
        "😚",
        "😋",
        "😛",
        "😝",
        "😜",
        "🤪",
        "🤨",
        "🧐",
        "🤓",
        "😎",
        "🤩",
        "🥳",
        "😏",
        "😒",
        "😞",
        "😔",
        "😟",
        "😕",
        "🙁",
        "☹️",
        "😣",
        "😖",
        "😫",
        "😩",
        "🥺",
        "😢",
        "😭",
        "😤",
        "😠",
        "😡",
        "🤬",
        "🤯",
        "😳",
        "🥵",
        "🥶",
        "😱",
        "😨",
        "😰",
        "😥",
        "😓",
        "🤗",
        "🤔",
        "🤭",
        "🤫",
        "🤥",
        "😶",
        "😐",
        "😑",
        "😬",
        "🙄",
        "😯",
        "😦",
        "😧",
        "😮",
        "😲",
        "🥱",
        "😴",
        "🤤",
        "😪",
        "😵",
        "🤐",
        "🥴",
        "🤢",
        "🤮",
        "🤧",
        "😷",
        "🤒",
        "🤕",
        "🤑",
        "🤠",
        "😈",
        "👍",
        "👎",
        "👌",
        "✌️",
        "🤞",
        "🤟",
        "🤘",
        "🤙",
        "👈",
        "👉",
        "👆",
        "🖕",
        "👇",
        "☝️",
        "👋",
        "🤚",
        "🖐️",
        "✋",
        "🖖",
        "👏",
        "🙌",
        "🤲",
        "🤝",
        "🙏",
        "✍️",
        "💪",
        "🦾",
        "🦿",
        "🦵",
        "🦶",
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🖤",
        "🤍",
        "🤎",
        "💔",
        "❣️",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "💟",
        "☮️",
        "✝️",
        "☪️",
        "🕉️",
        "☸️",
        "✡️",
        "🔯",
        "🕎",
        "☯️",
        "☦️",
        "🛐",
        "⭐",
        "🌟",
        "✨",
        "⚡",
        "☄️",
        "💥",
        "🔥",
        "🌈",
        "☀️",
        "🌤️",
    ]

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    const handleImageChange = (file) => {
        if (file && file.type.startsWith("image/")) {
            if (file.size > 5 * 1024 * 1024) {
                alert("Image size should be less than 5MB")
                return
            }

            const reader = new FileReader()
            reader.onload = () => setSelectedImage(reader.result)
            reader.readAsDataURL(file)
        }
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        handleImageChange(file)
    }

    useEffect(() => {
        const handlePaste = (e) => {
            const activeElement = document.activeElement
            const isTextareaFocused = activeElement === textareaRef.current

            if (!isTextareaFocused && !activeElement?.closest(".chat-input-area")) {
                return
            }

            const items = e.clipboardData?.items
            if (!items) return

            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                if (item.type.startsWith("image/")) {
                    e.preventDefault()
                    const file = item.getAsFile()
                    if (file) {
                        handleImageChange(file)
                    }
                    break
                }
            }
        }

        document.addEventListener("paste", handlePaste)

        return () => {
            document.removeEventListener("paste", handlePaste)
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false)
            }
        }

        if (showEmojiPicker) {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [showEmojiPicker])

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragOver(false)

        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleImageChange(files[0])
        }
    }

    const removeSelectedImage = () => {
        setSelectedImage(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const insertEmoji = (emoji) => {
        const textarea = textareaRef.current
        if (textarea) {
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            const newMessageValue = newMessage.substring(0, start) + emoji + newMessage.substring(end)
            setNewMessage(newMessageValue)

            setTimeout(() => {
                textarea.selectionStart = start + emoji.length
                textarea.selectionEnd = start + emoji.length
                textarea.focus()
            }, 0)
        } else {
            setNewMessage((prev) => prev + emoji)
        }
        setShowEmojiPicker(false)
    }

    const openImageFullScreen = (imageSrc) => {
        setFullScreenImage(imageSrc)
    }

    const closeFullScreenImage = () => {
        setFullScreenImage(null)
    }

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex z-50">
            {fullScreenImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
                    <button
                        onClick={closeFullScreenImage}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={fullScreenImage || "/placeholder.svg"}
                        alt="Full screen view"
                        className="max-w-full max-h-full object-contain rounded-lg"
                    />
                </div>
            )}

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div
                className={`
        bg-gradient-to-b from-slate-800 to-slate-900 
        w-full sm:w-80 lg:w-80
        border-r border-purple-500/20 shadow-2xl
        fixed lg:relative
        inset-y-0 left-0
        transform transition-transform duration-300 ease-in-out
        z-50 lg:z-auto
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
            >
                <div className="p-4 sm:p-6 border-b border-purple-500/20">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <Crown size={16} className="sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Admin Panel</h3>
                                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                                    {isConnected ? (
                                        <>
                                            <Wifi size={10} className="sm:w-3 sm:h-3 text-green-400" />
                                            <span className="text-green-400">Connected</span>
                                        </>
                                    ) : (
                                        <>
                                            <WifiOff size={10} className="sm:w-3 sm:h-3 text-red-400" />
                                            <span className="text-red-400">Disconnected</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={onMinimize}
                                className="text-gray-400 hover:text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                                title="Minimize"
                            >
                                <Minus size={16} className="sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={setIsChatOpen}
                                className="text-gray-400 hover:text-red-400 p-1.5 sm:p-2 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                                title="Close Admin Panel"
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </button>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="lg:hidden text-gray-400 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                                title="Close Sidebar"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-emerald-500/30">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <Users size={12} className="sm:w-4 sm:h-4 text-emerald-400" />
                                <span className="text-emerald-300 text-xs sm:text-sm font-medium">Active Users</span>
                            </div>
                            <div className="text-lg sm:text-2xl font-bold text-white mt-1">{usersList.length}</div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-blue-500/30">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <MessageCircle size={12} className="sm:w-4 sm:h-4 text-blue-400" />
                                <span className="text-blue-300 text-xs sm:text-sm font-medium">Status</span>
                            </div>
                            <div className="text-lg sm:text-2xl font-bold text-white mt-1">
                                <div className="flex items-center space-x-1">
                                    <div
                                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isConnected ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
                                    ></div>
                                    <span className="text-xs sm:text-sm">{isConnected ? "Live" : "Offline"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3 sm:p-6 overflow-y-auto h-[calc(100vh-200px)] sm:h-auto">
                    <h4 className="text-white font-semibold mb-3 sm:mb-4 flex items-center space-x-2 text-sm sm:text-base">
                        <Users size={14} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Active Conversations</span>
                    </h4>
                    {usersList.length === 0 ? (
                        <div className="text-center py-6 sm:py-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <Users size={20} className="sm:w-6 sm:h-6 text-gray-400" />
                            </div>
                            <p className="text-gray-400 text-sm">No active users</p>
                            <p className="text-gray-500 text-xs mt-1">Waiting for customers to connect...</p>
                        </div>
                    ) : (
                        <ul className="space-y-1 sm:space-y-2">
                            {usersList.map((user) => (
                                <li
                                    key={user}
                                    className={`group relative p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 ${activeChatUser === user
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                                            : "hover:bg-white/10 text-gray-300 hover:text-white"
                                        }`}
                                    onClick={() => {
                                        setActiveChatUser(user)
                                        setIsSidebarOpen(false)
                                    }}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div
                                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${activeChatUser === user ? "bg-white/20" : "bg-gradient-to-r from-blue-500 to-purple-500"
                                                }`}
                                        >
                                            <span className="text-xs sm:text-sm font-bold text-white">{user.charAt(0).toUpperCase()}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-sm sm:text-base truncate">{user}</div>
                                            <div className="text-xs opacity-75">{typingUsers[user] ? "Typing..." : "Online"}</div>
                                        </div>
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            {activeChatUser !== user && unseenCounts[user] > 0 && (
                                                <div className="px-1.5 sm:px-2 py-0.5 bg-red-500 text-white text-xs rounded-full min-w-[20px] text-center">
                                                    {unseenCounts[user]}
                                                </div>
                                            )}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    if (window.confirm(`Are you sure you want to disconnect ${user}?`)) {
                                                        disconnectUser(user)
                                                    }
                                                }}
                                                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 rounded text-red-400 hover:text-red-300 transition-all duration-200"
                                                title={`Disconnect ${user}`}
                                            >
                                                <UserX size={12} className="sm:w-3.5 sm:h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col bg-gradient-to-b from-slate-800 to-slate-900">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-slate-800 to-purple-800 text-white p-3 sm:p-6 border-b border-purple-500/20 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                                title="Open Sidebar"
                            >
                                <Menu size={20} />
                            </button>

                            {activeChatUser ? (
                                <>
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm sm:text-lg font-bold text-white">
                                            {activeChatUser.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold truncate">{activeChatUser}</h3>
                                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-purple-300">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span>Online now</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold">Select a conversation</h3>
                                    <p className="text-purple-300 text-xs sm:text-sm">Choose a user from the sidebar to start chatting</p>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={onMinimize}
                                className="text-gray-400 hover:text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                                title="Minimize"
                            >
                                <Minus size={16} className="sm:w-5 sm:h-5" />
                            </button>
                            <button
                                onClick={setIsChatOpen}
                                className="text-gray-400 hover:text-red-400 p-1.5 sm:p-2 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                                title="Close Admin Panel"
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-slate-900 to-slate-800">
                    {activeChatUser ? (
                        <>
                            {(messages[activeChatUser] || []).map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === "001" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[85%] sm:max-w-md px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg ${msg.from === "001"
                                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                                : "bg-white text-gray-800"
                                            }`}
                                    >
                                        {msg.text && (
                                            <div className="text-sm sm:text-base font-medium break-words whitespace-pre-wrap mb-2">
                                                {msg.text}
                                            </div>
                                        )}

                                        {msg.image && (
                                            <div className="rounded-lg overflow-hidden">
                                                <img
                                                    src={msg.image || "/placeholder.svg"}
                                                    alt="Shared content"
                                                    className="max-w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                                                    onClick={() => openImageFullScreen(msg.image)}
                                                />
                                            </div>
                                        )}

                                        <div className={`text-xs mt-2 ${msg.from === "001" ? "text-purple-200" : "text-gray-500"}`}>
                                            {msg.time}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {typingUsers[activeChatUser] && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-200 px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl">
                                        <div className="flex space-x-1">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div
                                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.1s" }}
                                            ></div>
                                            <div
                                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.2s" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-center px-4">
                                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                    <MessageCircle size={28} className="sm:w-10 sm:h-10 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No conversation selected</h3>
                                <p className="text-gray-400 text-sm sm:text-base">Choose a user from the sidebar to start chatting</p>
                                <button
                                    onClick={toggleSidebar}
                                    className="lg:hidden mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm"
                                >
                                    Open User List
                                </button>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                {activeChatUser && (
                    <div
                        className={`chat-input-area p-3 sm:p-6 border-t border-purple-500/20 bg-gradient-to-r from-slate-800 to-purple-800 ${isDragOver ? "bg-purple-600/20" : ""}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {selectedImage && (
                            <div className="mb-4 p-3 bg-slate-700/50 rounded-xl border border-purple-500/30">
                                <div className="flex items-start space-x-3">
                                    <div className="relative">
                                        <img
                                            src={selectedImage || "/placeholder.svg"}
                                            alt="Preview"
                                            className="max-h-32 max-w-32 rounded-lg shadow-md object-cover"
                                        />
                                        <button
                                            onClick={removeSelectedImage}
                                            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors"
                                            title="Remove image"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                    <div className="flex-1 text-sm text-gray-300">
                                        <p className="font-medium text-white mb-1">Image ready to send</p>
                                        <p className="text-xs text-gray-400">Click the remove button to cancel or send button to share</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isDragOver && (
                            <div className="absolute inset-0 bg-purple-600/20 border-2 border-dashed border-purple-400 rounded-xl flex items-center justify-center z-10">
                                <div className="text-center text-white">
                                    <ImageIcon size={48} className="mx-auto mb-2 text-purple-300" />
                                    <p className="text-lg font-semibold">Drop image here</p>
                                    <p className="text-sm text-purple-200">Release to upload</p>
                                </div>
                            </div>
                        )}

                        <div className="flex space-x-2 sm:space-x-4 relative">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                                className="hidden"
                                id="image-upload"
                                disabled={!isConnected}
                            />
                            <label
                                htmlFor="image-upload"
                                className={`cursor-pointer p-2 rounded-lg transition-all duration-200 ${isConnected
                                        ? "text-purple-300 hover:text-white hover:bg-purple-600/20"
                                        : "text-gray-500 cursor-not-allowed"
                                    }`}
                                title="Upload image (or paste with Ctrl+V)"
                            >
                                <ImageIcon size={20} />
                            </label>

                            <div className="relative" ref={emojiPickerRef}>
                                <button
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                    className={`p-2 rounded-lg transition-all duration-200 ${isConnected
                                            ? "text-purple-300 hover:text-white hover:bg-purple-600/20"
                                            : "text-gray-500 cursor-not-allowed"
                                        }`}
                                    title="Add emoji"
                                    disabled={!isConnected}
                                >
                                    <Smile size={20} />
                                </button>

                                {showEmojiPicker && (
                                    <div className="absolute bottom-full left-0 mb-2 bg-slate-800 border border-purple-500/30 rounded-xl shadow-2xl p-4 w-80 max-h-64 overflow-y-auto z-50">
                                        <div className="grid grid-cols-8 gap-2">
                                            {commonEmojis.map((emoji, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => insertEmoji(emoji)}
                                                    className="text-2xl hover:bg-purple-600/20 rounded-lg p-2 transition-colors"
                                                    title={`Add ${emoji}`}
                                                >
                                                    {emoji}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <textarea
                                ref={textareaRef}
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault()
                                        sendMessage()
                                    }
                                }}
                                placeholder="Type your message... (Ctrl+V to paste images)"
                                className="flex-1 bg-slate-700 text-white border border-purple-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-sm sm:text-base resize-none"
                                disabled={!isConnected}
                                rows={2}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={(!newMessage.trim() && !selectedImage) || !isConnected}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                            >
                                <Send size={16} className="sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        <div className="mt-2 text-xs text-gray-400 text-center">
                            💡 Tip: Drag & drop images, paste with Ctrl+V, click 📷 to upload, or 😊 for emojis
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatInterface
