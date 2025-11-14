"use client"

import { useState } from "react"
import { MessageCircle, Clock, Star, Users, Award, Sparkles, Copy } from "lucide-react"
import Faqs from "@/app/components/faqs/Index"
import ChatBox from "@/app/components/chat/Index"
import Header from "@/app/components/header/Index"
import Footer from "@/app/components/footer/Index"
import phone from "@/app/phone"
// import AdsenseAd from "./components/ads/test"

export default function FAQPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const [copied, setCopied] = useState(false)

  const handleCopyBitcoinAddress = () => {
    const bitcoinAddress = "bc1q5u8knp7n8yt3jfxphjltstdjdvmwm6mx7rrwc7"

    navigator.clipboard.writeText(bitcoinAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden text-gray-300">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <Header phone={phone} setIsChatOpen={setIsChatOpen} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-emerald-700/50">
            <Clock size={18} className="animate-pulse text-emerald-400" />
            <span>🕘 09:30 AM - 09:30 PM EST • Live Support Available</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-100 mb-8 leading-tight">
            Frequently Asked{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Questions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Find answers to the most common questions about working at{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Nexxen
            </span>{" "}
            — from our hiring process and company policies to day-to-day operations and employee support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-gray-900 ${i === 0
                      ? "bg-gradient-to-r from-purple-700 to-pink-700"
                      : i === 1
                        ? "bg-gradient-to-r from-blue-700 to-cyan-700"
                        : i === 2
                          ? "bg-gradient-to-r from-emerald-700 to-teal-700"
                          : "bg-gradient-to-r from-orange-700 to-red-700"
                      }`}
                  ></div>
                ))}
              </div>
              <span className="text-sm font-medium">Join 2000+ happy team members</span>
            </div>
          </div>
        </div>
        {/* <AdsenseAd /> */}
        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-pink-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                2000+
              </div>
              <div className="text-gray-400 font-semibold">Team Members Worldwide</div>
              <div className="text-xs text-gray-500 mt-2">Growing every month</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                95%
              </div>
              <div className="text-gray-400 font-semibold">Employee Satisfaction</div>
              <div className="text-xs text-gray-500 mt-2">Based on recent survey</div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-cyan-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock size={32} className="text-white" />
              </div>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                09:30 AM - 09:30 PM
              </div>
              <div className="text-gray-400 font-semibold">HR & IT Support</div>
              <div className="text-xs text-gray-500 mt-2">EST timezone</div>
            </div>
          </div>
        </div>

        {/* Bitcoin Address Copy Section */}
        <div className="mb-20 mx-auto max-w-2xl">
          <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Copy size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-gray-100 mb-4">
              Do you want to copy the deposit address?
            </h3>
            <button
              onClick={handleCopyBitcoinAddress}
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-700/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Copy size={20} />
              Click me!
            </button>
            {copied && (
              <p className="text-center text-sm text-green-400 font-semibold mt-3">
                ✓ Address copied
              </p>
            )}
            <p className="text-center text-sm text-gray-400 mt-4">
              Deposit Address: <span className="text-yellow-400 font-mono text-xs">bc1q5u8knp7n8yt3jfxphjltstdjdvmwm6mx7rrwc7</span>
            </p>
          </div>
        </div>

        {/* FAQ Section with Enhanced Container */}
        <Faqs />

        {/* Enhanced Contact CTA */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/40 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-16 text-white text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} className="animate-spin text-yellow-300" />
                <span>Premium Support Available</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6">Still Have Questions?</h2>
              <p className="text-white/90 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                Our expert support team is available{" "}
                <span className="font-bold text-yellow-300">09:30 AM - 09:30 PM EST</span> to help you with any
                questions or concerns. Get instant answers through our live chat or schedule a consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="group relative bg-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-800 transition-all duration-300 shadow-2xl hover:shadow-purple-700/50 hover:scale-105"
                >
                  <span className="relative z-10">Start Live Chat</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => setIsChatOpen(true)}
                  className="group relative border-2 border-white/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live support online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span className="text-sm">Average response: 2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Box */}
      <ChatBox isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} phone={phone} />
      {/* Footer */}
      <Footer phone={phone} />
    </div>
  )
}
