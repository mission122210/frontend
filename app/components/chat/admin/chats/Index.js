import React from 'react'
import { Users } from "lucide-react"

const Index = ({ usersList, setActiveChatUser, activeChatUser, messages, typingUsers }) => {
    return (
        <>
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
        </>
    )
}

export default Index
