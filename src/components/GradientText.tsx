import React from 'react'

type GradientTextProps = {
  children: React.ReactNode
}
export default function GradientText({ children }: GradientTextProps) {
  return (
    <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
      {children}
    </span>
  )
}
