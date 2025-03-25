"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const stats = [
    { value: "10M+", label: "Transactions Analyzed" },
    { value: "500+", label: "Supported Tokens" },
    { value: "50+", label: "DEX Integrations" },
    { value: "24/7", label: "Real-time Updates" },
  ]

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950/10 to-black" />

        {/* Animated glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-500/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 + 0.2,
                }}
                className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to elevate your trading experience?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of traders who are already using dex.flawk to make smarter trading decisions and stay ahead
            of the market.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

