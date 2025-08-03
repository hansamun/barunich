"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp" | "fadeIn"
  delay?: number
  className?: string
}

export function AnimatedSection({ children, animation = "fadeInUp", delay = 0, className = "" }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const animationClasses = {
    fadeInUp: "animate-fade-in-up",
    fadeInLeft: "animate-fade-in-left",
    fadeInRight: "animate-fade-in-right",
    scaleIn: "animate-scale-in",
    slideInUp: "animate-slide-in-up",
    fadeIn: "animate-fade-in",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? animationClasses[animation] : "opacity-0 transform translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
