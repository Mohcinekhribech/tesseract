"use client"

import { useEffect } from "react"
import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-9 h-9 text-gray-200 hover:bg-gray-800"
      aria-label="Dark theme"
      disabled
    >
      <Moon size={20} />
    </Button>
  )
}
