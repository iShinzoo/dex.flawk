"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, BarChart3, TrendingUp, LineChart } from "lucide-react"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 text-sm"
        >
          The Next Generation DEX Analytics Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-300 to-blue-400 bg-clip-text text-transparent"
        >
          Track. Analyze. <br />
          <span className="text-white">Trade Smarter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Real-time data visualization and analytics for decentralized exchanges. Track trending tokens across multiple
          blockchains and make informed trading decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium"
          >
            Launch App
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-transparent border border-teal-500/50 hover:border-teal-500 text-white font-medium transition-colors"
          >
            Explore Features
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80">
          <motion.div
            className="absolute top-0 left-0 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-teal-500/20 flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <BarChart3 className="text-teal-500" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Volume 24h</div>
              <div className="font-bold">$1,234,567</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/4 right-0 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-blue-500/20 flex items-center gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TrendingUp className="text-blue-500" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Price Change</div>
              <div className="font-bold text-green-500">+12.34%</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/4 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-purple-500/20 flex items-center gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <LineChart className="text-purple-500" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Liquidity</div>
              <div className="font-bold">$9,876,543</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <ArrowDown className="text-teal-500" size={24} />
      </motion.div>
    </section>
  )
}

