"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LineChart, PieChart, TrendingUp, Zap, Search, Link2 } from "lucide-react"

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <TrendingUp className="text-teal-500" size={24} />,
      title: "Trending Tokens",
      description: "Track the most popular tokens across multiple blockchains with real-time updates.",
    },
    {
      icon: <LineChart className="text-blue-500" size={24} />,
      title: "Token Details",
      description: "In-depth information about any token including price charts, transactions, and liquidity data.",
    },
    {
      icon: <PieChart className="text-purple-500" size={24} />,
      title: "Portfolio Tracking",
      description: "Monitor your crypto holdings in one place with performance analytics and alerts.",
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Pump.fun Integration",
      description: "Discover new tokens from the Pump.fun ecosystem and track their performance.",
    },
    {
      icon: <Search className="text-green-500" size={24} />,
      title: "Advanced Search",
      description: "Find tokens by name, symbol, or contract address with our powerful search engine.",
    },
    {
      icon: <Link2 className="text-red-500" size={24} />,
      title: "Multi-Chain Support",
      description: "Access data from Ethereum, BSC, Polygon, Solana, and more blockchains in one platform.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 text-sm"
          >
            Powerful Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Everything you need for <span className="text-teal-400">DEX trading</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our platform provides comprehensive tools for traders, investors, and analysts to navigate the decentralized
            exchange landscape with confidence.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-black to-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

