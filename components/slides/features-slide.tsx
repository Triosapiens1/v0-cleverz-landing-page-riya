"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, TrendingUp, Users, Clock, Award, Sparkles, BookOpen } from "lucide-react"

export function FeaturesSlide() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized explanations and guidance from our advanced AI tutor",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Target,
      title: "Adaptive Practice",
      description: "Questions tailored to your skill level and learning progress",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Detailed analytics and insights into your performance and growth",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Competitive Learning",
      description: "Compete with peers on leaderboards and stay motivated",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Learn at your own pace, anytime and anywhere you want",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Award,
      title: "Gamified Experience",
      description: "Earn badges, streaks, and rewards as you progress through topics",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "AI suggests topics and questions based on your weak areas",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Content",
      description: "Complete syllabus coverage with 500+ practice tests and questions",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 animate-fade-in-up">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you master JEE preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} border-border/50 hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="pt-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
