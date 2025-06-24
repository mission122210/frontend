"use client"

import { useState } from "react"
import { Shield, FileText, Users, Lock, AlertCircle, CheckCircle, Scale, Globe, Calendar, Clock } from "lucide-react"
import ChatBox from "@/app/components/chat/Index"
import Header from "@/app/components/header/Index"
import Footer from "@/app/components/footer/Index"
import phone from "@/app/phone"

const termsCategories = [
  { name: "All Terms", icon: FileText, active: true },
  { name: "User Agreement", icon: Users, active: false },
  { name: "Privacy Policy", icon: Lock, active: false },
  { name: "Service Terms", icon: Shield, active: false },
  // { name: "Payment Terms", icon: Scale, active: false },
  { name: "Data Protection", icon: Globe, active: false },
]

const termsContent = {
  "User Agreement": {
    title: "User Agreement",
    lastUpdated: "December 15, 2024",
    icon: Users,
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: `By accessing and using Nexxen's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms constitute a legally binding agreement between you and Nexxen. Your continued use of our services indicates your acceptance of any updates or modifications to these terms.`,
      },
      {
        title: "2. User Responsibilities",
        content: `As a user of our platform, you agree to:
• Provide accurate and truthful information
• Maintain the confidentiality of your account credentials
• Use our services in compliance with applicable laws
• Respect intellectual property rights
• Not engage in fraudulent or harmful activities
• Report any security vulnerabilities or suspicious activities`,
      },
      {
        title: "3. Account Management",
        content: `You are responsible for maintaining the security of your account and password. Nexxen cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.

You must notify us immediately of any unauthorized use of your account or any other breach of security.`,
      },
    ],
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    lastUpdated: "December 10, 2024",
    icon: Lock,
    sections: [
      {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.

Types of information collected:
• Personal identification information (name, email, phone)
• Professional information (job title, company)
• Usage data and analytics
• Device and browser information
• Location data (with your consent)`,
      },
      {
        title: "2. How We Use Your Information",
        content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices and support messages
• Communicate about products, services, and events
• Monitor and analyze trends and usage
• Detect and prevent fraudulent activities`,
      },
      {
        title: "3. Information Sharing",
        content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

We may share information with:
• Service providers who assist in our operations
• Legal authorities when required by law
• Business partners with your explicit consent
• In connection with business transfers or mergers`,
      },
    ],
  },
  "Service Terms": {
    title: "Service Terms",
    lastUpdated: "December 12, 2024",
    icon: Shield,
    sections: [
      {
        title: "1. Service Description",
        content: `Nexxen provides AI-powered digital solutions and optimization services. Our platform helps businesses improve their online presence and operational efficiency through advanced technology and human expertise.

Services include but are not limited to:
• Products optimization and ranking improvement
• Digital marketing solutions
• AI-powered analytics and insights
• Customer support and consultation`,
      },
      {
        title: "2. Service Availability",
        content: `We strive to maintain high service availability, but we cannot guarantee uninterrupted access to our services. Scheduled maintenance, technical issues, or force majeure events may temporarily affect service availability.

We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice to users.`,
      },
      {
        title: "3. Service Limitations",
        content: `Our services are provided "as is" and we make no warranties regarding:
• Specific results or outcomes
• Compatibility with all systems or platforms
• Error-free operation
• Meeting all user requirements
• Continuous availability without interruption`,
      },
    ],
  },
  "Data Protection": {
    title: "Data Protection",
    lastUpdated: "December 5, 2024",
    icon: Globe,
    sections: [
      {
        title: "1. Data Security Measures",
        content: `We implement comprehensive security measures to protect your data:
• End-to-end encryption for data transmission
• Secure data storage with regular backups
• Multi-factor authentication options
• Regular security audits and assessments
• Employee training on data protection
• Compliance with international security standards`,
      },
      {
        title: "2. Data Retention",
        content: `We retain your data only as long as necessary to provide our services and comply with legal obligations:
• Active account data is retained during service period
• Backup data is kept for disaster recovery purposes
• Deleted data is permanently removed within 30 days
• Legal compliance may require longer retention periods
• You can request data deletion at any time`,
      },
      {
        title: "3. International Data Transfers",
        content: `Your data may be transferred to and processed in countries other than your own. We ensure adequate protection through:
• Standard contractual clauses
• Adequacy decisions by relevant authorities
• Binding corporate rules
• Explicit consent when required
• Regular monitoring of transfer mechanisms`,
      },
    ],
  },
}

export default function TermsConditionsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("User Agreement")
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }))
  }

  const currentContent = termsContent[selectedCategory]

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-emerald-200/50">
            <Shield size={18} className="animate-pulse" />
            <span>🔒 Your Privacy & Rights Protected • Updated December 2024</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Terms &{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
                Conditions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Welcome to{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Nexxen's
            </span>{" "}
            Terms and Conditions. We believe in transparency and want you to understand your rights and responsibilities
            when using our services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar size={18} className="text-purple-500" />
              <span className="text-sm font-medium">Last updated: December 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock size={18} className="text-emerald-500" />
              <span className="text-sm font-medium">Effective immediately</span>
            </div>
          </div>
        </div>

        {/* Navigation Categories */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose a Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {termsCategories
                .filter((cat) => cat.name !== "All Terms")
                .map((category) => {
                  const IconComponent = category.icon
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`group relative p-6 rounded-2xl font-semibold text-left transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          size={24}
                          className={selectedCategory === category.name ? "text-white" : "text-purple-500"}
                        />
                        <span>{category.name}</span>
                      </div>
                      {selectedCategory === category.name && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50 -z-10"></div>
                      )}
                    </button>
                  )
                })}
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <currentContent.icon size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentContent.title}</h2>
                  <p className="text-gray-600">Last updated: {currentContent.lastUpdated}</p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {currentContent.sections.map((section, index) => (
                  <div key={index} className="group">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-gray-900 text-left">{section.title}</h3>
                      <div
                        className={`transform transition-transform duration-300 ${expandedSections[index] ? "rotate-180" : ""}`}
                      >
                        <AlertCircle size={20} className="text-purple-500" />
                      </div>
                    </button>

                    {expandedSections[index] && (
                      <div className="mt-4 p-6 bg-white rounded-2xl shadow-inner border border-gray-100">
                        <div className="prose prose-gray max-w-none">
                          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Have Questions? Contact Support
                  </button>
                  {/* <button className="flex-1 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105">
                    Download PDF Version
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <div className="space-y-2">
                  {currentContent.sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSection(index)}
                      className={`w-full text-left p-3 rounded-xl text-sm transition-all duration-300 ${
                        expandedSections[index]
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <Shield size={16} className="text-blue-500" />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Lock size={16} className="text-purple-500" />
                    <span>SOC 2 Type II</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and Conditions are legally binding. By using our services, you acknowledge that you have
                  read, understood, and agree to be bound by these terms. If you have any questions or concerns, please
                  contact our legal team.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-amber-500" />
                    <span>Terms updated monthly</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe size={16} className="text-amber-500" />
                    <span>Applicable worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 p-16 text-white text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText size={16} className="animate-pulse" />
              <span>Need Legal Assistance?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">Questions About Our Terms?</h2>
            <p className="text-white/90 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
              Our legal team is here to help clarify any questions you may have about our Terms and Conditions, Privacy
              Policy, or your rights as a user.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsChatOpen(true)}
                className="group relative bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105"
              >
                <span className="relative z-10">Contact Legal Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              <button className="group relative border-2 border-white/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Download All Terms</span>
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Legal team available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span className="text-sm">Response within 24 hours</span>
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
