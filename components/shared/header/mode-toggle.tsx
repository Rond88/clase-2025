'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themes = ['light', 'dark', 'system']

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme!)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
  }

  const renderIcon = () => {
    switch (theme) {
      case 'dark':
        return <MoonIcon />
      case 'light':
        return <SunIcon />
      default:
        return <SunMoon />
    }
  }

  return (
    <Button variant="ghost" onClick={handleToggle}>
      {renderIcon()}
    </Button>
  )
}
