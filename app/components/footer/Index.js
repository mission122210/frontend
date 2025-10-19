import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

const Index = ({ phone }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Nexxen
              </h3>
              <p className="text-gray-400 text-sm font-medium">Professional Digital Solutions</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join our growing team of 2000+ professionals worldwide. We're committed to creating an inclusive,
              innovative workplace where talent thrives and innovation flourishes.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-gray-900 shadow-md ${
                      i === 0
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
              <span className="text-sm text-gray-400 font-medium">2000+ team members</span>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
              <h4 className="text-lg font-bold mb-6 text-gray-100">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}

          {/* Careers Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100">Join Our Team</h4>
            <div className="space-y-4">
              <Link
                href="/careers"
                className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <span className="relative z-10">View Careers</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore exciting opportunities and grow your career with us in a dynamic, supportive environment.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span className="text-emerald-400 font-semibold">We're actively hiring!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">© 2025 Nexxen. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Terms of Service
            </Link>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 px-3 py-2 rounded-full border border-emerald-700">
              <FaWhatsapp size={16} className="text-emerald-400" />
              <span className="text-gray-300 font-semibold">{phone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Index
