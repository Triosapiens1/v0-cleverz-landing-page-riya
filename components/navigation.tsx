"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, GraduationCap } from "lucide-react"

interface NavigationProps {
  currentSlide: number
  onNavigate: (index: number) => void
  isAuthenticated: boolean
  onAuthClick: () => void
}

export function Navigation({ currentSlide, onNavigate, isAuthenticated, onAuthClick }: NavigationProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const navItems = [
    { label: "Home", index: 0 },
    { label: "Progress", index: 1 },
    { label: "Subjects", index: 2 },
    { label: "Features", index: 3 },
    { label: "FAQ", index: 4 },
    { label: "Pricing", index: 5 },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cleverz
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => onNavigate(item.index)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentSlide === item.index ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {!isAuthenticated ? (
            <Button onClick={onAuthClick} className="rounded-full">
              Sign In
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                JK
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
