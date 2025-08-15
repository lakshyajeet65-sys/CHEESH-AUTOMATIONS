'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', showText = false }) => {
  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-24 h-30',
    lg: 'w-32 h-40',
    xl: 'w-40 h-50'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className} flex items-center justify-center`}>
      {/* Logo Image with better styling */}
      <div className="relative w-full h-full">
        <Image
          src="/CHEESH-LOGO.png"
          alt="CHEESH AUTOMATIONS Logo"
          fill
          className="object-contain drop-shadow-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default Logo 