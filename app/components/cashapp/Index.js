"use client"
import { useState } from "react"
import {
    MessageCircle,
    Clock,
    Sparkles,
    Phone,
    Mail,
    CheckCircle,
    AlertCircle,
    ArrowRight,
    Bitcoin,
    Smartphone,
    Send,
    Shield,
} from "lucide-react"
import phone from "@/app/phone"
import Footer from "@/app/components/footer/Index"
import Header from "@/app/components/header/Index"
import Link from "next/link"

export default function BitcoinTutorial() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const [isVerified, setIsVerified] = useState(null) // null = not selected, true = verified, false = not verified

    const steps = [
        {
            id: 1,
            title: "Contact Nexxen Customer Service",
            description: "Get your Bitcoin deposit address from our support team",
            icon: Phone,
            color: "from-purple-500 to-pink-500",
        },
        {
            id: 2,
            title: "Open Cash App & Buy Bitcoin",
            description: "Navigate to Bitcoin section and purchase your desired amount",
            icon: Bitcoin,
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 3,
            title: "Send Bitcoin to Nexxen",
            description: "Transfer your Bitcoin to the provided deposit address",
            icon: Send,
            color: "from-emerald-500 to-teal-500",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <Header phone={phone} setIsChatOpen={setIsChatOpen} />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-emerald-200/50">
                        <Bitcoin size={18} className="animate-pulse" />
                        <span>🚀 Complete Bitcoin Transaction in 3 Simple Steps</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                        How to Buy & Send{" "}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
                                Bitcoin
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 rounded-full"></div>
                        </span>{" "}
                        via Cash App
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Follow this step-by-step guide to safely buy Bitcoin on Cash App and send it to your{" "}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Nexxen account
                        </span>
                        . Even if you're completely new to Bitcoin, this tutorial will guide you through every click.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-16">
                    <div className="flex items-center space-x-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className={`relative ${currentStep >= step.id ? "z-10" : "z-0"}`}>
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep >= step.id
                                            ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                                            : "bg-gray-200 text-gray-500"
                                            }`}
                                    >
                                        {currentStep > step.id ? <CheckCircle size={20} /> : <step.icon size={20} />}
                                    </div>
                                    {currentStep === step.id && (
                                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 animate-pulse"></div>
                                    )}
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-16 h-1 mx-4 rounded-full transition-all duration-300 ${currentStep > step.id ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gray-200"
                                            }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 1: Contact Customer Service */}
                {currentStep === 1 && (
                    <div className="relative mb-16">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 via-pink-50 to-cyan-50 rounded-3xl blur-xl opacity-50"></div>
                        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <Phone size={40} className="text-white" />
                                </div>
                                <h2 className="text-4xl font-black text-gray-900 mb-4">Step 1: Get Your Bitcoin Address</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    First, you need to contact Nexxen customer service to get your unique Bitcoin deposit address.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Contact Methods */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Options:</h3>

                                    <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                        <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                    <MessageCircle size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Live Chat</h4>
                                                    <p className="text-gray-600">Instant response • Available from 09:30 AM To 09:30 PM Eastern</p>
                                                </div>
                                            </div>
                                            <button

                                                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                                            >
                                                <Link href="https://nexxwentyq.cc/"
                                                    target="_blank">Contact to Support</Link>
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                        <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                                    <Mail size={24} className="text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Email Support</h4>
                                                    <p className="text-gray-600">support@nexxen.com</p>
                                                </div>
                                            </div>
                                            <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                                                Send Email
                                            </button>
                                        </div>
                                    </div> */}
                                </div>

                                {/* What to Ask */}
                                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Sparkles className="mr-2 text-yellow-500" />
                                        What to Say:
                                    </h3>
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-yellow-200/50">
                                        <p className="text-gray-800 italic text-lg leading-relaxed">
                                            "Hi, I need Bitcoin deposit address to send Bitcoin to my Nexxen account. Can you please
                                            provide me with the BTC deposit address?"
                                        </p>
                                    </div>
                                    {/* <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                        <div className="flex items-start space-x-3">
                                            <AlertCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-blue-900">Important:</h4>
                                                <p className="text-blue-800 text-sm">
                                                    Make sure to save the Bitcoin address they provide. You'll need it in the next steps.
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => setCurrentStep(2)}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                                >
                                    <span>I Got My Bitcoin Address</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Buy Bitcoin on Cash App */}
                {currentStep === 2 && (
                    <div className="relative mb-16">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-50 rounded-3xl blur-xl opacity-50"></div>
                        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <Smartphone size={40} className="text-white" />
                                </div>
                                <h2 className="text-4xl font-black text-gray-900 mb-4">Step 2: Buy Bitcoin on Cash App</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Now let's open Cash App and buy Bitcoin. Follow these exact steps:
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                {/* Instructions */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Open Cash App</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Open the Cash App on your phone. You should see the main dashboard.
                                        </p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Cash App Homepage"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Cash App Main Screen</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Find Bitcoin Section</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Look for the Bitcoin symbol (₿) on your home screen and tap on it.
                                        </p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Bitcoin Section"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Bitcoin Section Location</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                                3
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Tap "Buy"</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            In the Bitcoin section, you'll see a "Buy" button. Tap on it to start purchasing.
                                        </p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Buy Bitcoin Button"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Buy Bitcoin Screen</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Amount Selection */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                                4
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Enter Amount</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Enter the amount of Bitcoin you want to buy. You can enter in USD ($) or Bitcoin (₿).
                                        </p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Enter Amount"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Amount Entry Screen</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                                5
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Confirm Purchase</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">Review your purchase details and tap "Confirm" to buy Bitcoin.</p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Confirm Purchase"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Purchase Confirmation</p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <CheckCircle className="text-green-500" size={24} />
                                            <h3 className="text-xl font-bold text-green-900">Success!</h3>
                                        </div>
                                        <p className="text-green-800">
                                            Great! You now own Bitcoin in your Cash App. Next, we'll send it to your Nexxen account.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => setCurrentStep(3)}
                                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                                >
                                    <span>I Bought Bitcoin Successfully</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Send Bitcoin */}
                {currentStep === 3 && (
                    <div className="relative mb-16">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 via-teal-50 to-cyan-50 rounded-3xl blur-xl opacity-50"></div>
                        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <Send size={40} className="text-white" />
                                </div>
                                <h2 className="text-4xl font-black text-gray-900 mb-4">Step 3: Send Bitcoin to Nexxen</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Now let's send your Bitcoin to the Nexxen address you received in Step 1.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                {/* Send Instructions */}
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Go to Bitcoin Section</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            In Cash App, go back to the Bitcoin section and tap on your Bitcoin balance.
                                        </p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Bitcoin Balance"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Your Bitcoin Balance</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Tap "Send" or "Withdraw"</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">Look for a "Send" or "Withdraw Bitcoin" button and tap on it.</p>
                                        <div className="bg-gray-100 rounded-xl p-4">
                                            <img
                                                src="/placeholder.svg?height=200&width=300"
                                                alt="Send Bitcoin Button"
                                                className="w-full rounded-lg shadow-sm"
                                            />
                                            <p className="text-sm text-gray-500 mt-2 text-center">Send Bitcoin Option</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                                3
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Paste Bitcoin Address</h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Paste the Bitcoin address that Nexxen customer service gave you in Step 1.
                                        </p>
                                        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                                            <div className="flex items-start space-x-3">
                                                <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                                                <div>
                                                    <h4 className="font-semibold text-yellow-900">Important:</h4>
                                                    <p className="text-yellow-800 text-sm">
                                                        Double-check the address! Bitcoin transactions cannot be reversed.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Verification Scenarios */}
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                            <Shield className="mr-2 text-blue-500" />
                                            What Happens Next?
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            After pasting the Bitcoin address, Cash App might ask you to verify your identity. Choose your
                                            situation:
                                        </p>

                                        <div className="space-y-4">
                                            <button
                                                onClick={() => setIsVerified(true)}
                                                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${isVerified === true
                                                    ? "border-green-500 bg-green-50"
                                                    : "border-gray-200 bg-white hover:border-green-300"
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle
                                                        className={`${isVerified === true ? "text-green-500" : "text-gray-400"}`}
                                                        size={24}
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">My Cash App is Already Verified</h4>
                                                        <p className="text-sm text-gray-600">I can send Bitcoin without additional verification</p>
                                                    </div>
                                                </div>
                                            </button>

                                            <button
                                                onClick={() => setIsVerified(false)}
                                                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${isVerified === false
                                                    ? "border-orange-500 bg-orange-50"
                                                    : "border-gray-200 bg-white hover:border-orange-300"
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <AlertCircle
                                                        className={`${isVerified === false ? "text-orange-500" : "text-gray-400"}`}
                                                        size={24}
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">My Cash App Needs Verification</h4>
                                                        <p className="text-sm text-gray-600">Cash App is asking me to verify my identity</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Verification Required Scenario */}
                                    {isVerified === false && (
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                                            <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                                                <Shield className="mr-2" />
                                                Identity Verification Required
                                            </h4>
                                            <div className="space-y-4">
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        1
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Tap "Verify Identity"</strong> when Cash App prompts you
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        2
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Provide your personal information:</strong> Full name, date of birth, and last 4
                                                            digits of SSN
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        3
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Take a photo of your ID:</strong> Driver's license or state ID
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        4
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Wait for approval:</strong> Usually takes a few minutes to 24 hours
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                                                    <p className="text-orange-800 text-sm">
                                                        <strong>After verification:</strong> Return to the Bitcoin section and continue with sending
                                                        your Bitcoin to the Nexxen address.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Already Verified Scenario */}
                                    {isVerified === true && (
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200">
                                            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                                                <CheckCircle className="mr-2" />
                                                Continue Sending Bitcoin
                                            </h4>
                                            <div className="space-y-4">
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        4
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Enter the amount</strong> you want to send (or select "Send All")
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        5
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Review the transaction details</strong> carefully
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                        6
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-700">
                                                            <strong>Tap "Confirm"</strong> to send your Bitcoin
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                                    <div className="flex items-center space-x-3">
                                                        <CheckCircle className="text-green-500" size={20} />
                                                        <p className="text-green-800 text-sm">
                                                            <strong>Success!</strong> Your Bitcoin is now being sent to your Nexxen account. This
                                                            usually takes 10-60 minutes to complete.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {isVerified !== null && (
                                <div className="text-center">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center space-x-2 mx-auto max-w-md">
                                        <CheckCircle size={24} />
                                        <span>Transaction Complete!</span>
                                    </div>
                                    <p className="text-gray-600 mt-4">
                                        Your Bitcoin should appear in your Nexxen account within 10-60 minutes.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Support Section */}
                <Footer phone={phone} />
            </main>


        </div>
    )
}
