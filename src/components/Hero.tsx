'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Play, Zap, TrendingUp, Users, Cpu, Bot, Workflow } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Automation', 'Innovation', 'Efficiency', 'Growth']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 text-cheesh-orange/30 animate-float">
          <Bot size={48} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-cheesh-blue/30 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu size={36} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-cheesh-green/30 animate-float" style={{ animationDelay: '2s' }}>
          <Workflow size={24} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-cheesh-red/30 animate-float" style={{ animationDelay: '3s' }}>
          <Zap size={36} />
        </div>
        {/* Additional Icons */}
        <div className="absolute top-1/6 right-1/6 text-cheesh-green/20 animate-float" style={{ animationDelay: '0.5s' }}>
          <TrendingUp size={32} />
        </div>
        <div className="absolute bottom-1/6 left-1/6 text-cheesh-orange/20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Users size={28} />
        </div>
        <div className="absolute top-1/2 left-1/6 text-cheesh-blue/20 animate-float" style={{ animationDelay: '2.5s' }}>
          <Play size={24} />
        </div>
        <div className="absolute top-1/6 left-1/2 text-cheesh-red/20 animate-float" style={{ animationDelay: '3.5s' }}>
          <ArrowRight size={20} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-gray-800/10 opacity-40"></div>

      {/* Visual Automation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Process Flow Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="flow2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M10,20 Q50,10 90,20" stroke="url(#flow1)" strokeWidth="0.5" fill="none" opacity="0.6"/>
          <path d="M10,80 Q50,90 90,80" stroke="url(#flow2)" strokeWidth="0.5" fill="none" opacity="0.6"/>
          <path d="M20,10 Q20,50 20,90" stroke="url(#flow1)" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M80,10 Q80,50 80,90" stroke="url(#flow2)" strokeWidth="0.5" fill="none" opacity="0.4"/>
        </svg>
        
        {/* Data Flow Nodes */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-cheesh-orange rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-cheesh-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-cheesh-green rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-3 h-3 bg-cheesh-red rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/6 w-16 h-0.5 bg-gradient-to-r from-cheesh-orange to-cheesh-blue transform rotate-45 origin-left"></div>
        <div className="absolute top-1/4 right-1/6 w-16 h-0.5 bg-gradient-to-r from-cheesh-blue to-cheesh-green transform -rotate-45 origin-right"></div>
        <div className="absolute bottom-1/4 left-1/6 w-16 h-0.5 bg-gradient-to-r from-cheesh-green to-cheesh-red transform rotate-45 origin-left"></div>
        <div className="absolute bottom-1/4 right-1/6 w-16 h-0.5 bg-gradient-to-r from-cheesh-red to-cheesh-orange transform -rotate-45 origin-right"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 font-display leading-tight">
            Transform Your Business with
            <span className="block mt-4 bg-gradient-to-r from-cheesh-orange via-cheesh-red via-cheesh-green to-cheesh-blue bg-clip-text text-transparent animate-pulse">
              {words[currentWord]}
            </span>
          </h1>
          {/* Enhanced Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            At <span className="text-cheesh-orange font-semibold">CHEESH AUTOMATIONS</span>, we transform business challenges into automated solutions. 
            Our cutting-edge automation technology streamlines operations, boosts productivity, and drives measurable results 
            for businesses worldwide.
          </p>
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-cheesh-orange to-cheesh-red hover:from-cheesh-red hover:to-cheesh-orange text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-cheesh-orange/25 flex items-center space-x-3"
            >
              <span>Start Your Automation Journey</span>
              <ArrowRight size={24} />
            </button>
            <button 
              onClick={() => {
                // Show a floating stats modal
                const modal = document.getElementById('stats-modal');
                if (modal) {
                  modal.classList.remove('hidden');
                  setTimeout(() => modal.classList.add('hidden'), 5000);
                }
              }}
              className="bg-transparent border-3 border-cheesh-blue text-cheesh-blue hover:bg-cheesh-blue hover:text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl flex items-center space-x-3"
            >
              <Play size={24} />
              <span>View Our Impact</span>
            </button>
            <button 
              onClick={() => {
                // Scroll to services with animation
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  // Add a highlight effect
                  element.classList.add('ring-4', 'ring-cheesh-orange', 'ring-opacity-50');
                  setTimeout(() => element.classList.remove('ring-4', 'ring-cheesh-orange', 'ring-opacity-50'), 2000);
                }
              }}
              className="bg-gradient-to-r from-cheesh-green to-cheesh-blue hover:from-cheesh-blue hover:to-cheesh-green text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-xl flex items-center space-x-3"
            >
              <Workflow size={20} />
              <span>Explore Services</span>
            </button>
          </div>

          {/* Floating Stats Modal */}
          <div id="stats-modal" className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/95 backdrop-blur-custom rounded-2xl p-8 border border-cheesh-orange/30 shadow-2xl animate-pulse">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cheesh-orange mb-4">Our Global Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cheesh-green mb-2">500+</div>
                  <div className="text-gray-300">Automations Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cheesh-blue mb-2">50+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cheesh-red mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cheesh-orange mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cheesh-orange mb-2">500+</div>
              <div className="text-gray-400 font-medium">Automations Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cheesh-blue mb-2">98%</div>
              <div className="text-gray-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cheesh-green mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cheesh-red mb-2">50+</div>
              <div className="text-gray-400 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-cheesh-orange rounded-full flex justify-center">
          <div className="w-2 h-4 bg-cheesh-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero; 
