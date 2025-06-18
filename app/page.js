"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Headphones, Phone, Mail, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Faqs from "@/app/components/faqs/Index"

const phone = "+1 913-206-5691"
const agentResponses = [
  `Thank you for reaching out.\n\nAll our agents are currently assisting other customers, so response times may be slightly delayed.\n\nFor a faster response, we recommend messaging Nexxen Customer Support directly on WhatsApp using the number below:\n\n📱 ${phone}\n\nWe appreciate your patience and look forward to assisting you shortly.`
];

export default function FAQPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Image src="/logo.webp" alt="Nexxen Logo" width={120} height={40} className="h-10 w-auto" />
              </div>
              <div className="hidden md:block">
                <p className="text-gray-600 text-sm">Professional Digital Solutions</p>
              </div>
            </div>

            {/* Contact Info & Chat */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <FaWhatsapp size={20} className="text-emerald-600" />
                  <span>{phone}</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-emerald-600" />
                  <span>support@techcorp.com</span>
                </div> */}
              </div>

              <button
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
              >
                <MessageCircle size={24} />
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  !
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock size={16} />
            <span>09:30 AM - 09:30 PM EST Support Available</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about working at Nexxen — from our hiring process and company policies to day-to-day operations and employee support. Still have questions? Our support team is always here to help!
          </p>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">200+</div>
            <div className="text-gray-600">Team Members Worldwide</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
            <div className="text-gray-600">Employee Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">09:30 AM - 09:30 PM EST</div>
            <div className="text-gray-600">HR & IT Support</div>
          </div>
        </div>

        {/* FAQ Section */}
        <Faqs />

        {/* Contact CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                Our expert support team is available 09:30 AM - 09:30 PM EST to help you with any questions or concerns. Get instant
                answers through our live chat or schedule a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Live Chat
                </button>
                <button onClick={() => setIsChatOpen(true)} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Box */}
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
    </div>
  )
}
