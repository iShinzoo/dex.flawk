"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <CustomCursor />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Navbar />
        <main>
          <HeroSection scrollY={scrollY} />
          <FeaturesSection />
          <StatsSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}

