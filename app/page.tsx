"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomeSlide } from "@/components/slides/home-slide"
import { ProgressSlide } from "@/components/slides/progress-slide"
import { SubjectsSlide } from "@/components/slides/subjects-slide"
import { FeaturesSlide } from "@/components/slides/features-slide"
import { FAQSlide } from "@/components/slides/faq-slide"
import { PricingSlide } from "@/components/slides/pricing-slide"
import { AuthModal } from "@/components/auth-modal"
import { ChatbotModal } from "@/components/chatbot-modal"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatbotSubject, setChatbotSubject] = useState<string>("")
  const [chatbotType, setChatbotType] = useState<"learning" | "quiz">("learning")

  const slides = ["home", "progress", "subjects", "features", "faq", "pricing"]

  const handleNavigate = (slideIndex: number) => {
    // Only allow home slide for unauthenticated users
    if (!isAuthenticated && slideIndex !== 0) {
      setShowAuthModal(true)
      return
    }
    setCurrentSlide(slideIndex)
  }

  const handleSubjectClick = (subject: string, type: "learning" | "quiz") => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }
    setChatbotSubject(subject)
    setChatbotType(type)
    setShowChatbot(true)
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation
        currentSlide={currentSlide}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onAuthClick={() => setShowAuthModal(true)}
      />

      <main className="pt-16">
        {currentSlide === 0 && <HomeSlide onGetStarted={() => handleNavigate(2)} />}
        {currentSlide === 1 && isAuthenticated && <ProgressSlide />}
        {currentSlide === 2 && <SubjectsSlide onSubjectClick={handleSubjectClick} isAuthenticated={isAuthenticated} />}
        {currentSlide === 3 && <FeaturesSlide />}
        {currentSlide === 4 && <FAQSlide />}
        {currentSlide === 5 && <PricingSlide />}
      </main>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />

      <ChatbotModal
        isOpen={showChatbot}
        onClose={() => setShowChatbot(false)}
        subject={chatbotSubject}
        type={chatbotType}
        onAuthRequired={() => {
          setShowChatbot(false)
          setShowAuthModal(true)
        }}
      />
    </div>
  )
}
