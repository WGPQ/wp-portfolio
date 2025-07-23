"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function AnimatedTextReveal() {
  const textRef = useRef<HTMLDivElement>(null)
  const [textWidth, setTextWidth] = useState(0)

  const progress = useMotionValue(0)
  const clipPath = useTransform(progress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  const starX = useTransform(progress, [0, 1], [-50, textWidth])

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth) // Medición más confiable
    }

    const animation = animate(progress, 1, {
      duration: 2.5,
      ease: "easeInOut",
    })

    return () => animation.stop()
  }, [progress])

  return (
    <div className="flex items-center justify-center overflow-hidden p-4">
      <div className="relative max-w-full px-2">
        <motion.div
          ref={textRef}
          className="text-white text-center text-3xl sm:text-4xl lg:text-6xl font-bold break-words leading-tight"
          style={{ clipPath }}
        >
          {/* Puedes forzar el salto de línea así si deseas */}
          <span className="block sm:inline">Creativity Changes</span>{" "}
          <span className="block sm:inline">Everything</span>
        </motion.div>
        <motion.span
          className="absolute top-1/2 -translate-y-1/2 text-2xl md:text-6xl lg:text-4xl"
          style={{ x: starX, y: 10, left: 10, zIndex: 10 }}
        >
          ✨
        </motion.span>
      </div>
    </div>
  )
}
