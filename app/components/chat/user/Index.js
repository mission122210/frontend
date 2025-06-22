import React from 'react'
import { X, Send, Headphones, MessageCircle, Zap } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import MessageTone from "./MessageTune";

const Index = ({ username, setIsChatOpen, phone, messages, typingUsers, messagesEndRef, newMessage, setNewMessage, sendMessage }) => {
    const whatsappNumber = phone.replace(/\D/g, "")

    return (
        <>
            <MessageTone messages={messages} />
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
        </>
    )
}

export default Index
