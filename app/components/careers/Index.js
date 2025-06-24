"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Clock, DollarSign, Sparkles, ChevronRight, Building, Calendar } from "lucide-react"
import ChatBox from "@/app/components/chat/Index"
import Header from "@/app/components/header/Index"
import Footer from "@/app/components/footer/Index"
import phone from "@/app/phone"

const jobCategories = [
    { name: "All Jobs", count: 25, active: true },
    { name: "Products Optimization", count: 1, active: false },
    { name: "Engineering", count: 8, active: false },
    { name: "Marketing", count: 4, active: false },
    { name: "Sales", count: 6, active: false },
    { name: "Design", count: 3, active: false },
    { name: "Support", count: 3, active: false },
]

const jobListings = [
    {
        id: 1,
        title: "Products Optimization Specialist",
        department: "Products Optimization",
        location: "Remote (Worldwide)",
        type: "Part-time / Full-time",
        salary: "$180 - $200 / hour",
        experience: "No experience required",
        posted: "New",
        description:
            "Join our AI-powered Products Optimization team to help improve product visibility and ranking on platforms like Amazon and eBay. No technical skills required - just your mobile phone and internet connection!",
        requirements: [
            "Mobile phone with internet connection",
            "Available for flexible work hours",
            "No technical or SEO experience needed",
            "Reliable internet connection",
            "Ability to follow simple instructions",
        ],
        benefits: [
            "Instant Daily Payments",
            "Daily Commission",
            "100% Remote Work",
            "Flexible Hours",
            "No Personal Info Required",
            "AI-Powered Backend",
        ],
        fullDescription: `
      **What is Products Optimization?**
      
      A Products Optimization job involves improving the visibility and ranking of products listed on platforms like Amazon and eBay. The goal is to enhance product performance using real data, which leads to better traffic, higher sales, and increased profitability for merchants.
      
      **How it Works:**
      
      This job is powered by AI, but requires crucial human involvement for authenticity and effectiveness. You don't need to be an SEO expert - anyone with a mobile phone and internet connection can participate. All backend optimization techniques are managed by AI—your job is to contribute your presence and human verification to make the process real and trustworthy.
      
      **Why Human Involvement is Important:**
      
      AI can automate many tasks, but platforms like Amazon and eBay require genuine human signals to ensure the process is not manipulated by bots. Human interaction provides:
      
      • Real engagement and behavior patterns
      • Trust signals for product authenticity  
      • Verification that AI cannot fake
      
      **What You'll Do:**
      
      You are not giving reviews or making false claims. You are simply assisting our AI system in understanding how real users interact with certain product listings—such as clicking, searching, and spending time on them. This helps train the algorithm to improve product positioning on platforms.
      
      **About Nexxen:**
      
      Our platform, Nexxen, partners with trusted merchants to manage and optimize their products. As a Products Optimizer, you'll help them improve sales and visibility, and earn a daily salary plus commission.
    `,
    },
    {
        id: 2,
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        salary: "$120k - $160k",
        experience: "5+ years",
        posted: "2 days ago",
        description:
            "Join our engineering team to build scalable web applications using React, Node.js, and modern technologies.",
        requirements: [
            "5+ years of full-stack development",
            "React, Node.js, TypeScript",
            "Experience with cloud platforms",
        ],
        benefits: ["Health Insurance", "Remote Work", "Stock Options", "Learning Budget"],
    },
    {
        id: 3,
        title: "Product Marketing Manager",
        department: "Marketing",
        location: "San Francisco / Remote",
        type: "Full-time",
        salary: "$90k - $130k",
        experience: "3+ years",
        posted: "1 week ago",
        description: "Lead product marketing initiatives and drive growth strategies for our digital solutions platform.",
        requirements: ["3+ years in product marketing", "B2B SaaS experience", "Data-driven mindset"],
        benefits: ["Health Insurance", "Flexible Hours", "Professional Development", "Team Retreats"],
    },
    {
        id: 4,
        title: "UX/UI Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        salary: "$80k - $110k",
        experience: "3+ years",
        posted: "3 days ago",
        description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
        requirements: ["3+ years of UX/UI design", "Figma, Adobe Creative Suite", "Portfolio required"],
        benefits: ["Health Insurance", "Remote Work", "Design Tools Budget", "Conference Attendance"],
    },
    {
        id: 5,
        title: "Sales Development Representative",
        department: "Sales",
        location: "Chicago / Remote",
        type: "Full-time",
        salary: "$60k - $80k + Commission",
        experience: "1+ years",
        posted: "5 days ago",
        description: "Generate qualified leads and build relationships with potential clients in our target markets.",
        requirements: ["1+ years in sales/SDR role", "CRM experience", "Excellent communication skills"],
        benefits: ["Health Insurance", "Commission Structure", "Sales Training", "Career Growth"],
    },
    {
        id: 6,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: "$110k - $140k",
        experience: "4+ years",
        posted: "1 day ago",
        description: "Manage and optimize our cloud infrastructure, CI/CD pipelines, and deployment processes.",
        requirements: ["4+ years DevOps experience", "AWS/Azure, Docker, Kubernetes", "Infrastructure as Code"],
        benefits: ["Health Insurance", "Remote Work", "Tech Budget", "Certification Support"],
    },
    {
        id: 7,
        title: "Customer Success Manager",
        department: "Support",
        location: "Austin / Remote",
        type: "Full-time",
        salary: "$70k - $95k",
        experience: "2+ years",
        posted: "4 days ago",
        description: "Ensure customer satisfaction and drive retention through proactive relationship management.",
        requirements: ["2+ years in customer success", "SaaS experience preferred", "Problem-solving skills"],
        benefits: ["Health Insurance", "Flexible Schedule", "Customer Training", "Growth Opportunities"],
    },
]

const companyBenefits = [
    {
        icon: "💰",
        title: "Competitive Salary",
        description: "Market-leading compensation packages with equity options",
    },
    {
        icon: "🏥",
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision insurance coverage",
    },
    {
        icon: "🏠",
        title: "Remote Flexibility",
        description: "Work from anywhere with flexible hours and home office setup",
    },
    {
        icon: "📚",
        title: "Learning & Development",
        description: "Annual learning budget and conference attendance support",
    },
    {
        icon: "🌴",
        title: "Unlimited PTO",
        description: "Take the time you need to recharge and maintain work-life balance",
    },
    {
        icon: "🚀",
        title: "Career Growth",
        description: "Clear advancement paths and mentorship opportunities",
    },
]

export default function CareersPage() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All Jobs")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedJob, setSelectedJob] = useState(null)

    const filteredJobs = jobListings.filter((job) => {
        const matchesCategory = selectedCategory === "All Jobs" || job.department === selectedCategory
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    // Auto scroll to job details on mobile when job is selected
    useEffect(() => {
        if (selectedJob && window.innerWidth < 1024) {
            const detailsElement = document.getElementById("job-details-section")
            if (detailsElement) {
                detailsElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        }
    }, [selectedJob])

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
                        <Building size={18} className="animate-pulse" />
                        <span>🚀 Join Our Growing Team • 2000+ Professionals Worldwide</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                        Build Your{" "}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
                                Career
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-full"></div>
                        </span>{" "}
                        With Us
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Join{" "}
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Nexxen
                        </span>{" "}
                        and be part of an innovative team that's shaping the future of digital solutions. We offer competitive
                        compensation, flexible work arrangements, and unlimited growth opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full border-2 border-white ${i === 0
                                                ? "bg-gradient-to-r from-purple-400 to-pink-400"
                                                : i === 1
                                                    ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                                                    : i === 2
                                                        ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                                                        : "bg-gradient-to-r from-orange-400 to-red-400"
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <span className="text-sm font-medium">2000+ team members across 15+ countries</span>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-12">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            {/* Search Bar */}
                            <div className="relative flex-1 w-full">
                                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search jobs by title, department, or keywords..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {jobCategories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedCategory === category.name
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category.name} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Job List */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{filteredJobs.length} Open Positions</h2>

                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => setSelectedJob(job.id)}
                                className={`group relative cursor-pointer transition-all duration-300 ${selectedJob === job.id ? "scale-[1.02]" : "hover:scale-[1.01]"
                                    }`}
                            >
                                <div
                                    className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 transition duration-300 ${selectedJob === job.id ? "opacity-50" : "group-hover:opacity-40"
                                        }`}
                                ></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                    {job.posted === "New" && (
                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                            NEW
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <span className="flex items-center space-x-1">
                                                    <Building size={16} />
                                                    <span>{job.department}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <MapPin size={16} />
                                                    <span>{job.location}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <Clock size={16} />
                                                    <span>{job.type}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-emerald-600">{job.salary}</div>
                                            <div className="text-sm text-gray-500">{job.posted}</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {job.benefits.slice(0, 3).map((benefit, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-medium rounded-full"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                        {job.benefits.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                +{job.benefits.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">
                                            <strong>Experience:</strong> {job.experience}
                                        </span>
                                        <ChevronRight
                                            size={20}
                                            className="text-purple-500 group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Job Details Sidebar */}
                    <div className="lg:col-span-1" id="job-details-section">
                        <div className="sticky top-32">
                            {selectedJob ? (
                                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                                    {(() => {
                                        const job = jobListings.find((j) => j.id === selectedJob)
                                        return (
                                            <>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>

                                                <div className="space-y-4 mb-6">
                                                    <div className="flex items-center space-x-3">
                                                        <Building size={18} className="text-purple-500" />
                                                        <span className="text-gray-700">{job.department}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <MapPin size={18} className="text-purple-500" />
                                                        <span className="text-gray-700">{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <DollarSign size={18} className="text-purple-500" />
                                                        <span className="text-gray-700">{job.salary}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <Calendar size={18} className="text-purple-500" />
                                                        <span className="text-gray-700">Posted {job.posted}</span>
                                                    </div>
                                                </div>

                                                {job.fullDescription && (
                                                    <div className="mb-6">
                                                        <h4 className="font-bold text-gray-900 mb-3">Job Details</h4>
                                                        <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                                                            {job.fullDescription}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="mb-6">
                                                    <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                                                    <ul className="space-y-2">
                                                        {job.requirements.map((req, index) => (
                                                            <li key={index} className="flex items-start space-x-2">
                                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                                <span className="text-gray-700 text-sm">{req}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="mb-8">
                                                    <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.benefits.map((benefit, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-medium rounded-full"
                                                            >
                                                                {benefit}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => setIsChatOpen(true)}
                                                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                                                >
                                                    Contact to Support
                                                </button>
                                            </>
                                        )
                                    })()}
                                </div>
                            ) : (
                                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Building size={32} className="text-purple-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Select a Job</h3>
                                    <p className="text-gray-600">
                                        Click on any job listing to view detailed information and requirements.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Company Benefits Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Why Work{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                With Us?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We believe in creating an environment where our team members can thrive, grow, and make a meaningful
                            impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companyBenefits.map((benefit, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
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
                            <Sparkles size={16} className="animate-spin" />
                            <span>Ready to Join Our Team?</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6">Don't See Your Perfect Role?</h2>
                        <p className="text-white/90 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                            We're always looking for talented individuals to join our team. Send us your resume and let us know how
                            you'd like to contribute to our mission.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="group relative bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105"
                            >
                                <span className="relative z-10">Contact HR Team</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>

                            <button className="group relative border-2 border-white/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105">
                                <span className="relative z-10">Send General Application</span>
                                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center space-x-6 text-white/80">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">HR team available</span>
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
