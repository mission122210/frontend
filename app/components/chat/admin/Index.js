"use client"
import { X, Send, Users, MessageCircle, Crown, Minus, UserX, Wifi, WifiOff, Menu } from "lucide-react"
import { useState } from "react"

const Index = ({
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

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex z-50">
            {/* Mobile Overlay */}
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
                {/* Header */}
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
                                <X size={16} className="sm:w-5 sm:h-5" />
                            </button>
                            {/* Mobile close sidebar button */}
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="lg:hidden text-gray-400 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-all duration-200"
                                title="Close Sidebar"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
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

                {/* Users List */}
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
                                        setIsSidebarOpen(false) // Close sidebar on mobile when user is selected
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
                                            {/* Unseen message badge */}
                                            {activeChatUser !== user && unseenCounts[user] > 0 && (
                                                <div className="px-1.5 sm:px-2 py-0.5 bg-red-500 text-white text-xs rounded-full min-w-[20px] text-center">
                                                    {unseenCounts[user]}
                                                </div>
                                            )}
                                            {/* Disconnect user button */}
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
                            {/* Mobile menu button */}
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
                                        <div className="text-sm sm:text-base font-medium break-words">{msg.text}</div>
                                        <div className={`text-xs mt-1 sm:mt-2 ${msg.from === "001" ? "text-purple-200" : "text-gray-500"}`}>
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
                    <div className="p-3 sm:p-6 border-t border-purple-500/20 bg-gradient-to-r from-slate-800 to-purple-800">
                        <div className="flex space-x-2 sm:space-x-4">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 bg-slate-700 text-white border border-purple-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-sm sm:text-base"
                                disabled={!isConnected}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!newMessage.trim() || !isConnected}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100"
                            >
                                <Send size={16} className="sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Index
