"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface HomeSlideProps {
  onGetStarted: () => void
}

export function HomeSlide({ onGetStarted }: HomeSlideProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in-up">
      <div className="container max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles className="h-4 w-4" />
          <span>Your Path to JEE Success</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
          Master JEE with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Cleverz
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Your intelligent companion for JEE preparation. Learn smarter with AI-powered guidance, track your progress,
          and ace your exams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" onClick={onGetStarted} className="rounded-full text-lg px-8 py-6 group">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent">
            Watch Demo
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Practice Tests</div>
          </div>
        </div>
      </div>
    </section>
  )
}
