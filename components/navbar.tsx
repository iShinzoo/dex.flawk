"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div className="relative w-10 h-10 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-70 blur-sm" />
            <div className="relative text-2xl font-bold">D</div>
          </motion.div>
          <motion.span
            className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            dex.flawk
          </motion.span>
        </Link>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 hover:border-teal-500 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  )
}

