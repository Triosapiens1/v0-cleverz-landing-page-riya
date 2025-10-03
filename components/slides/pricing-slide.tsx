"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Crown } from "lucide-react"

export function PricingSlide() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      icon: Sparkles,
      color: "from-gray-500 to-gray-600",
      features: [
        "50 questions per month",
        "Basic AI assistance",
        "Progress tracking",
        "Community access",
        "Mobile app access",
      ],
      limitations: ["Limited quiz attempts", "No leaderboard access", "Standard support"],
    },
    {
      name: "Standard",
      price: "₹499",
      period: "per month",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      popular: true,
      features: [
        "Unlimited questions",
        "Advanced AI tutor",
        "Full progress analytics",
        "Leaderboard access",
        "All badges & rewards",
        "Priority support",
        "Downloadable resources",
      ],
      limitations: [],
    },
    {
      name: "Premium",
      price: "₹999",
      period: "per month",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      features: [
        "Everything in Standard",
        "Personalized study plans",
        "1-on-1 doubt sessions",
        "Mock test analysis",
        "Performance predictions",
        "Exclusive content",
        "24/7 premium support",
        "Offline access",
      ],
      limitations: [],
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 animate-fade-in-up">
      <div className="container max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground">Start free, upgrade when you're ready</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pb-8">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full ${plan.popular ? "" : "variant-outline"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>All plans include a 7-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}
