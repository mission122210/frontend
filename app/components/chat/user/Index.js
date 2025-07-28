"use client"
import { Minus, Send, Headphones, MessageCircle, Zap, Wifi, WifiOff } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import MessageTone from "./MessageTune"

const Index = ({
    username,
    setIsChatOpen,
    onMinimize,
    phone,
    messages,
    typingUsers,
    messagesEndRef,
    newMessage,
    setNewMessage,
    sendMessage,
    isConnected,
}) => {
    const whatsappNumber = phone.replace(/\D/g, "")
    const unseenMessages = (messages["001"] || []).filter((msg) => !msg.seen).length

    return (
        <>
            <MessageTone messages={messages} />
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:items-end sm:justify-end sm:p-4 z-50">
                <div className="relative w-full h-full sm:w-auto sm:h-auto">
                    {/* Background decoration */}
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>

                    <div className="relative bg-white rounded-2xl sm:rounded-3xl w-full h-full sm:w-96 sm:max-w-md sm:h-[700px] flex flex-col shadow-2xl overflow-hidden">
                        {/* Enhanced Header */}
                        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-4 sm:p-6 relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full -translate-x-12 sm:-translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                                <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-12"></div>
                            </div>

                            <div className="relative flex justify-between items-center">
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="relative">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                                            <Headphones size={20} className="sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <div
                                            className={`absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white flex items-center justify-center ${isConnected ? "bg-green-400" : "bg-red-400"}`}
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full ${isConnected ? "animate-pulse" : ""}`}
                                            ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold">Customer Support</h3>
                                        <p className="text-emerald-100 text-xs sm:text-sm">Chatting as {username}</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            {isConnected ? (
                                                <>
                                                    <Wifi size={10} className="sm:w-3 sm:h-3 text-emerald-200" />
                                                    <span className="text-xs text-emerald-200">Connected</span>
                                                </>
                                            ) : (
                                                <>
                                                    <WifiOff size={10} className="sm:w-3 sm:h-3 text-red-200" />
                                                    <span className="text-xs text-red-200">Reconnecting...</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={onMinimize}
                                        className="p-2 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-200"
                                        title="Minimize Chat"
                                    >
                                        <Minus size={18} className="sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Info Message */}
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                            <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Zap size={12} className="sm:w-4 sm:h-4 text-white" />
                                </div>
                                <div className="text-xs sm:text-sm">
                                    <p className="text-yellow-800 font-medium mb-1">Quick Response Available!</p>
                                    <p className="text-yellow-700">
                                        For instant support, contact us via WhatsApp:{" "}
                                        <a
                                            href={`https://wa.me/${whatsappNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-semibold underline transition-colors duration-200"
                                        >
                                            <FaWhatsapp size={12} className="sm:w-3.5 sm:h-3.5" />
                                            <span className="break-all">{phone}</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Messages Area */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white">
                            {(messages["001"] || []).length === 0 && (
                                <div className="text-center py-6 sm:py-8">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <MessageCircle size={20} className="sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Start the conversation!</h4>
                                    <p className="text-gray-600 text-sm px-4">Send a message to get help from our support team</p>
                                </div>
                            )}

                            {(messages["001"] || []).map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === "001" ? "justify-start" : "justify-end"}`}>
                                    <div
                                        className={`max-w-[85%] sm:max-w-xs px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-lg ${msg.from === "001"
                                                ? "bg-white border border-gray-200 text-gray-800"
                                                : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                                            }`}
                                    >
                                        <div className="text-sm sm:text-base font-medium break-words">{msg.text}</div>
                                        <div
                                            className={`text-xs mt-1 sm:mt-2 ${msg.from === "001" ? "text-gray-500" : "text-emerald-100"}`}
                                        >
                                            {msg.time}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {typingUsers["001"] && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-lg">
                                        <div className="flex items-center space-x-2">
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
                                            <span className="text-xs sm:text-sm text-gray-500 italic">Support is typing...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Enhanced Input Area */}
                        <div className="p-3 sm:p-6 border-t border-gray-200 bg-white">
                            <div className="flex space-x-2 sm:space-x-3">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    placeholder={isConnected ? "Type your message..." : "Reconnecting..."}
                                    className="flex-1 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 sm:focus:ring-4 focus:ring-emerald-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 transition-all duration-200 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    disabled={!isConnected}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!newMessage.trim() || !isConnected}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                                >
                                    <Send size={16} className="sm:w-5 sm:h-5" />
                                </button>
                            </div>
                            {!isConnected && (
                                <div className="mt-2 text-center">
                                    <span className="text-xs text-orange-600 bg-orange-100 px-2 sm:px-3 py-1 rounded-full">
                                        Connection lost. Attempting to reconnect...
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
