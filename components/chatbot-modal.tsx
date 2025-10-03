"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"

interface ChatbotModalProps {
  isOpen: boolean
  onClose: () => void
  subject: string
  type: "learning" | "quiz"
  onAuthRequired: () => void
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export function ChatbotModal({ isOpen, onClose, subject, type, onAuthRequired }: ChatbotModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [questionCount, setQuestionCount] = useState(0)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting =
        type === "learning"
          ? `Hey there! 👋 I'm your ${subject} tutor. What would you like to learn today? Feel free to ask me anything about ${subject}!`
          : `Ready to test your ${subject} knowledge? 🧠 I'll ask you questions and provide detailed explanations. Let's start with your first question!`

      setMessages([{ role: "assistant", content: greeting }])
    }
  }, [isOpen, subject, type, messages.length])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessages: Message[] = [...messages, { role: "user", content: input }]

    // After first question, redirect to auth
    if (questionCount >= 1) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "To continue learning and access unlimited questions, please sign in or create an account. It's quick and free! 🚀",
        },
      ])
      setTimeout(() => {
        onClose()
        onAuthRequired()
      }, 2000)
      return
    }

    // Simulate AI response
    const response =
      type === "learning"
        ? `Great question about ${subject}! Let me explain that in detail. ${input.toLowerCase().includes("what") ? "This concept is fundamental to understanding..." : "Here's how it works..."} Would you like me to provide an example?`
        : `Excellent! Here's a ${subject} question for you: What is the derivative of x²? Take your time to think about it, and I'll explain the solution step by step.`

    setMessages([...newMessages, { role: "assistant", content: response }])
    setInput("")
    setQuestionCount(questionCount + 1)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            {subject} {type === "learning" ? "Tutor" : "Quiz"}
          </DialogTitle>
          <DialogDescription>
            {type === "learning"
              ? "Ask questions and get detailed explanations"
              : "Test your knowledge with practice questions"}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <User className="h-5 w-5 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2 pt-4 border-t">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
