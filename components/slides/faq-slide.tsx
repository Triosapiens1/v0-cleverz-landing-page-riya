"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSlide() {
  const faqs = [
    {
      question: "What is Cleverz?",
      answer:
        "Cleverz is an AI-powered JEE preparation platform that provides personalized learning experiences, adaptive practice questions, and comprehensive progress tracking to help students excel in their JEE exams.",
    },
    {
      question: "How does the AI tutor work?",
      answer:
        "Our AI tutor uses advanced natural language processing to understand your questions and provide detailed explanations. It adapts to your learning style and focuses on areas where you need the most help.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Yes! Cleverz offers detailed progress tracking including streaks, points, badges, subject-wise completion percentages, and leaderboard rankings to keep you motivated and informed about your performance.",
    },
    {
      question: "What subjects are covered?",
      answer:
        "Cleverz covers all three JEE subjects: Physics, Chemistry, and Mathematics. Each subject includes comprehensive content aligned with the latest JEE syllabus, with hundreds of practice questions and tests.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a free plan that gives you access to basic features and limited questions. You can upgrade to Standard or Premium plans anytime for full access to all features and unlimited practice.",
    },
    {
      question: "How is Cleverz different from other platforms?",
      answer:
        "Cleverz combines AI-powered personalization, gamification, and competitive learning in one platform. Our adaptive system ensures you focus on what matters most, while the engaging interface keeps you motivated throughout your preparation journey.",
    },
    {
      question: "Can I use Cleverz on mobile devices?",
      answer:
        "Cleverz is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops. Learn anytime, anywhere at your convenience.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up with your email or phone number, choose your subjects, and start learning! Our AI will assess your current level and create a personalized learning path for you.",
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 animate-fade-in-up">
      <div className="container max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Cleverz</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
