import React from 'react'
import { MessageCircle, Sparkles, Zap } from "lucide-react"

const Index = ({ username, setUsername, setIsChatOpen, startChat }) => {
    return (
        <>
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
        </>
    )
}

export default Index
