"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver)
      link.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver)
        link.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(0, 255, 170, 0.1)",
      border: "1px solid rgba(0, 255, 170, 0.5)",
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(0, 255, 170, 0.2)",
      border: "1px solid rgba(0, 255, 170, 0.8)",
    },
  }

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button {
          cursor: none;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-teal-500"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          height: 8,
          width: 8,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28 }}
      />
    </>
  )
}

