"use client"
import { MessageCircle, Sparkles, Zap, Minus, Shield, Clock, Users } from "lucide-react"

const Index = ({ username, setUsername, setIsChatOpen, startChat }) => {
    const handleMinimize = () => {
        // This will minimize the chat instead of completely closing it
        setIsChatOpen(false)
    }

    const handleStartChat = () => {
        if (!username.trim()) return
        startChat()
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="relative">
                    {/* Background decorations */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-20"></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-6 text-white relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
                            </div>

                            <div className="relative">
                                {/* Minimize button */}
                                <button
                                    onClick={handleMinimize}
                                    className="absolute top-0 right-0 p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                                    title="Minimize"
                                >
                                    <Minus size={20} />
                                </button>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <MessageCircle size={32} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">Welcome to Live Support</h2>
                                    <p className="text-white/90 text-sm">Enter your name to connect with our support team</p>
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Clock size={16} className="text-green-600" />
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium">Fast Response</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users size={16} className="text-blue-600" />
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium">Expert Team</span>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Shield size={16} className="text-purple-600" />
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium">Secure Chat</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-3">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter your full name"
                                        className="w-full border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 p-4 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 outline-none pr-12"
                                        onKeyDown={(e) => e.key === "Enter" && handleStartChat()}
                                        autoFocus
                                        maxLength={50}
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                        <Sparkles size={20} className={username.trim() ? "text-purple-500" : "text-gray-300"} />
                                    </div>
                                </div>
                                {username.trim() && username.length < 2 && (
                                    <p className="text-red-500 text-xs mt-2">Name must be at least 2 characters long</p>
                                )}
                            </div>

                            <button
                                onClick={handleStartChat}
                                disabled={!username.trim() || username.length < 2}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                            >
                                {username.trim() && username.length >= 2 ? (
                                    <span className="flex items-center justify-center space-x-2">
                                        <Zap size={20} />
                                        <span>Start Live Chat</span>
                                    </span>
                                ) : (
                                    "Enter your name to continue"
                                )}
                            </button>

                            {/* Additional Info */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600 mb-2">By starting this chat, you agree to our terms of service</p>
                                <button
                                    onClick={handleMinimize}
                                    className="text-gray-500 hover:text-gray-700 font-medium text-sm underline transition-colors duration-200"
                                >
                                    I'll chat later
                                </button>
                            </div>
                        </div>

                        {/* Footer info */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-4 text-center border-t">
                            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
                                <div className="flex items-center space-x-1">
                                    <Shield size={12} className="text-green-500" />
                                    <span>Privacy Protected</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                <div className="flex items-center space-x-1">
                                    <Clock size={12} className="text-blue-500" />
                                    <span>Avg. response: 2 min</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-green-600 font-medium">Support team is online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
