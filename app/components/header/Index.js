import React from 'react'
import { MessageCircle, Clock, Star, Users, Award, Sparkles } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

const Index = ({ phone, setIsChatOpen }) => {
    return (
        <header className="bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center relative">
                            {/* <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div> */}
                            <div className="relative bg-white p-2 rounded-xl ">
                                <Image src="/logo.webp" alt="Nexxen Logo" width={120} height={40} className="h-12 w-auto" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-gray-700 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Professional Digital Solutions
                            </p>
                            <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="text-yellow-400 fill-current" />
                                ))}
                                <span className="text-xs text-gray-500 ml-2">Trusted by 100+ merchants</span>
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
                                <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-200">
                                    <FaWhatsapp size={20} className="text-emerald-600" />
                                    <span className="font-semibold text-gray-700">{phone}</span>
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
