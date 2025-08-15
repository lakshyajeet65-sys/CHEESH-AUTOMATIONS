'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/90 backdrop-blur-custom shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/CHEESH-LOGO.png"
              alt="CHEESH AUTOMATIONS Logo"
              className="h-16 w-auto md:h-20 lg:h-24 object-contain"
              onError={() => {
                const logoDiv = document.getElementById('logo-text');
                if (logoDiv) logoDiv.style.display = 'block';
              }}
            />
            <div id="logo-text" className="text-2xl font-bold text-white hidden ml-3">
              CHEESH AUTOMATIONS
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button key={item.name} onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cheesh-orange transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-lg px-8 py-3"
            >
              Get Started
            </button>
          </nav>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-custom border-t border-gray-800">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-cheesh-orange transition-colors duration-300 font-medium px-4 py-3 text-lg"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full text-lg py-3"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;
