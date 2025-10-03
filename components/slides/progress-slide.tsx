"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Trophy, Target, Award, TrendingUp, Zap, Star, Crown } from "lucide-react"

export function ProgressSlide() {
  const leaderboard = [
    { rank: 1, name: "Arjun Sharma", points: 2450, avatar: "AS" },
    { rank: 2, name: "Priya Patel", points: 2380, avatar: "PP" },
    { rank: 3, name: "Rahul Kumar", points: 2310, avatar: "RK" },
    { rank: 4, name: "You", points: 2250, avatar: "JK", isUser: true },
    { rank: 5, name: "Sneha Reddy", points: 2180, avatar: "SR" },
  ]

  const badges = [
    { icon: Trophy, label: "7 Day Streak", color: "text-yellow-500" },
    { icon: Target, label: "100 Questions", color: "text-blue-500" },
    { icon: Award, label: "Top Scorer", color: "text-purple-500" },
    { icon: Zap, label: "Speed Master", color: "text-orange-500" },
  ]

  return (
    <section className="min-h-screen py-24 px-4 animate-fade-in-up">
      <div className="container max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Your Progress</h2>
          <p className="text-xl text-muted-foreground">Track your journey to JEE success</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Streak Card */}
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-orange-500">7</div>
              <p className="text-sm text-muted-foreground mt-2">days in a row</p>
            </CardContent>
          </Card>

          {/* Points Card */}
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-500" />
                Total Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-purple-500">2,250</div>
              <p className="text-sm text-muted-foreground mt-2">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +150 this week
              </p>
            </CardContent>
          </Card>

          {/* Rank Card */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-blue-500" />
                Your Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-blue-500">#4</div>
              <p className="text-sm text-muted-foreground mt-2">out of 10,000</p>
            </CardContent>
          </Card>
        </div>

        {/* Completion Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Completion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Physics</span>
                <span className="font-semibold">75%</span>
              </div>
              <Progress value={75} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Chemistry</span>
                <span className="font-semibold">62%</span>
              </div>
              <Progress value={62} className="h-3" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Mathematics</span>
                <span className="font-semibold">88%</span>
              </div>
              <Progress value={88} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <badge.icon className={`h-8 w-8 ${badge.color}`} />
                  <span className="text-sm font-medium text-center">{badge.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                    user.isUser ? "bg-primary/10 border border-primary/20" : "bg-secondary/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-bold">
                    {user.rank}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.points} points</div>
                  </div>
                  {user.rank <= 3 && (
                    <Trophy
                      className={`h-5 w-5 ${
                        user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-orange-600"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
