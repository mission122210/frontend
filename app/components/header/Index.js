"use client"
import { MessageCircle, Star, Sparkles } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

const Index = ({ phone, setIsChatOpen }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center relative">
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div> */}
              <Link
                href="/"
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-blue-300 transition-all duration-300 tracking-tight"
              >
                Nexxen
              </Link>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-300 text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Digital Solutions
              </p>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-current" />
                ))}
                <span className="text-xs text-gray-400 ml-2">Trusted by 100+ merchants</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden sm:block"></nav>

            {/* Mobile Careers Link */}
            <div className="sm:hidden"></div>

            {/* Contact Info & Chat */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 px-4 py-2 rounded-full border border-emerald-700/50">
                  <FaWhatsapp size={20} className="text-emerald-400" />
                  <span className="font-semibold text-gray-200">{phone}</span>
                </div>
              </div>

              <button
                onClick={() => setIsChatOpen(true)}
                className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25 group"
              >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce shadow-lg">
                  <Sparkles size={12} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index
