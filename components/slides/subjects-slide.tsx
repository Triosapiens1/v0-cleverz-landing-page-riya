"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Atom, FlaskConical, Calculator, BookOpen, Brain } from "lucide-react"

interface SubjectsSlideProps {
  onSubjectClick: (subject: string, type: "learning" | "quiz") => void
  isAuthenticated: boolean
}

export function SubjectsSlide({ onSubjectClick, isAuthenticated }: SubjectsSlideProps) {
  const subjects = [
    {
      name: "Physics",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: "Master mechanics, electromagnetism, and modern physics",
    },
    {
      name: "Chemistry",
      icon: FlaskConical,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Explore organic, inorganic, and physical chemistry",
    },
    {
      name: "Mathematics",
      icon: Calculator,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description: "Solve calculus, algebra, and geometry problems",
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 animate-fade-in-up">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Choose Your Subject</h2>
          <p className="text-xl text-muted-foreground">
            Start learning or test your knowledge with AI-powered assistance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card
              key={subject.name}
              className={`${subject.bgColor} ${subject.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4`}
                >
                  <subject.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{subject.description}</p>
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={() => onSubjectClick(subject.name, "learning")}
                    className="w-full rounded-full"
                    variant="default"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  <Button
                    onClick={() => onSubjectClick(subject.name, "quiz")}
                    className="w-full rounded-full"
                    variant="outline"
                  >
                    <Brain className="h-4 w-4 mr-2" />
                    Take Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
