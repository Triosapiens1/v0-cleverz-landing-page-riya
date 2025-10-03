"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Lock, Chrome } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email")
  const [use2FA, setUse2FA] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    onSuccess()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Welcome to Cleverz</DialogTitle>
          <DialogDescription className="text-center">
            Sign in to access all features and track your progress
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={authMethod === "email" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAuthMethod("email")}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button
                  type="button"
                  variant={authMethod === "phone" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAuthMethod("phone")}
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </Button>
              </div>

              {authMethod === "email" ? (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="2fa"
                  checked={use2FA}
                  onChange={(e) => setUse2FA(e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="2fa" className="text-sm cursor-pointer">
                  Enable 2-step authentication
                </Label>
              </div>

              <Button type="submit" className="w-full rounded-full">
                <Lock className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                OR
              </span>
            </div>

            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full bg-transparent"
                onClick={handleSubmit}
              >
                <Chrome className="h-4 w-4 mr-2" />
                Continue with Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full bg-transparent"
                onClick={handleSubmit}
              >
                <Phone className="h-4 w-4 mr-2" />
                Sign in with OTP
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={authMethod === "email" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAuthMethod("email")}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button
                  type="button"
                  variant={authMethod === "phone" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAuthMethod("phone")}
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </Button>
              </div>

              {authMethod === "email" ? (
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="your@email.com" required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="signup-phone">Phone Number</Label>
                  <Input id="signup-phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="signup-2fa"
                  checked={use2FA}
                  onChange={(e) => setUse2FA(e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="signup-2fa" className="text-sm cursor-pointer">
                  Enable 2-step authentication
                </Label>
              </div>

              <Button type="submit" className="w-full rounded-full">
                Create Account
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                OR
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full bg-transparent"
              onClick={handleSubmit}
            >
              <Chrome className="h-4 w-4 mr-2" />
              Sign up with Google
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
