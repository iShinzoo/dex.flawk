"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Discord size={20} />, href: "https://discord.com", label: "Discord" },
    { icon: <Mail size={20} />, href: "mailto:info@example.com", label: "Email" },
  ]

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-950/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-70 blur-sm" />
                <div className="relative text-2xl font-bold">D</div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                dex.flawk
              </span>
            </Link>
            <p className="text-gray-400 mb-4">The next generation DEX analytics platform for traders and investors.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest features and releases.</p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-r-lg px-4 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} dex.flawk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

