import React from 'react'
import { X, Send, Users, MessageCircle, Crown } from "lucide-react"

const Index = ({
    setIsChatOpen,
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
    onlineUsers
}) => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex z-50">

            {/* Sidebar */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 w-80 border-r border-purple-500/20 shadow-2xl">

                {/* Header */}
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
                <div className="p-6 overflow-y-auto space-y-2">
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
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${activeChatUser === user
                                                    ? "bg-white/20"
                                                    : "bg-gradient-to-r from-blue-500 to-purple-500"
                                                }`}
                                        >
                                            <span className="text-sm font-bold text-white">
                                                {user.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium">{user}</div>
                                            <div className="text-xs opacity-75">
                                                {typingUsers[user] ? "Typing..." : "Online"}
                                            </div>
                                        </div>

                                        {/* 🔥 Unseen message badge */}
                                        {activeChatUser !== user && unseenCounts[user] > 0 && (
                                            <div className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                                                {unseenCounts[user]}
                                            </div>
                                        )}
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
                <div className="bg-gradient-to-r from-slate-800 to-purple-800 text-white p-6 border-b border-purple-500/20 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            {activeChatUser ? (
                                <>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-lg font-bold text-white">
                                            {activeChatUser.charAt(0).toUpperCase()}
                                        </span>
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
                                    <p className="text-purple-300 text-sm">
                                        Choose a user from the sidebar to start chatting
                                    </p>
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

                {/* Messages */}
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
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
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

export default Index
