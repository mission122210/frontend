"use client"

import { useState, useEffect, useRef } from "react"
import React from 'react'
import { X, Send, Headphones } from "lucide-react"



const Index = ({ isChatOpen, setIsChatOpen, phone }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! Welcome to Nexxen customer support. How can I assist you today?",
            sender: "agent",
            time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
            name: "Nexxen Bot",
        },
    ])

    const [newMessage, setNewMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    const agentResponses = [
        `Thank you for reaching out.\n\nAll our agents are currently assisting other customers, so response times may be slightly delayed.\n\nFor a faster response, we recommend messaging Nexxen Customer Support directly on WhatsApp using the number below:\n\n📱 ${phone}\n\nWe appreciate your patience and look forward to assisting you shortly.`
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = () => {
        if (newMessage.trim()) {
            const userMessage = {
                id: messages.length + 1,
                text: newMessage,
                sender: "user",
                time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
            }

            setMessages([...messages, userMessage])
            setNewMessage("")
            setIsTyping(true)

            // Simulate agent typing and response
            setTimeout(() => {
                setIsTyping(false)
                const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)]
                const agentResponse = {
                    id: messages.length + 2,
                    text: randomResponse,
                    sender: "agent",
                    time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
                    name: "Nexxen Bot",
                }
                setMessages((prev) => [...prev, agentResponse])
            }, 2000)
        }
    }

    return (
        <>
            {isChatOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
                    <div className="bg-white rounded-t-3xl w-full max-w-md h-[600px] flex flex-col shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                                    <Headphones size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Customer Support</h3>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <p className="text-sm text-emerald-100">Bot is online</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-xs ${message.sender === "user" ? "order-2" : "order-1"}`}>
                                        {message.sender === "agent" && <p className="text-xs text-gray-500 mb-1 px-1">{message.name}</p>}
                                        <div
                                            className={`px-4 py-3 rounded-2xl shadow-sm ${message.sender === "user"
                                                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                                                : "bg-white text-gray-900 border border-gray-200"
                                                }`}
                                        >
                                            <div className="text-sm leading-relaxed whitespace-pre-line">
                                                {message.text}
                                            </div>
                                            <p className={`text-xs mt-2 ${message.sender === "user" ? "text-emerald-100" : "text-gray-500"}`}>
                                                {message.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
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
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="p-6 border-t border-gray-200 bg-white">
                            <div className="flex space-x-3">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                                    placeholder="Type your message..."
                                    className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!newMessage.trim()}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">Typically replies in a few minutes</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Index
