'use client'

import { useEffect, useState } from 'react'

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    setIsVisible(true)

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-accent-blue pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-accent-blue/20 animate-ping" />
      </div>

      {/* Trail */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-blue pointer-events-none z-[9998] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: 0.6,
        }}
      />
    </>
  )
}

