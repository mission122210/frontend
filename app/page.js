"use client"

import { useState } from "react"
import { MessageCircle, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Faqs from "@/app/components/faqs/Index"
import ChatBox from '@/app/components/chat/Index'

const phone = "+1 408-382-9385"


export default function FAQPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

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
      <ChatBox isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} phone={phone} />

    </div>
  )
}
