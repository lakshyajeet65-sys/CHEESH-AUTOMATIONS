'use client'

import { useState, useEffect } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Users, 
  CheckCircle, 
  Award, 
  ThumbsUp, 
  Heart, 
  Zap,
  Lightbulb,
  Target,
  Rocket,
  Bot,
  Cpu
} from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      location: 'London, UK',
      avatar: '🇬🇧',
      content: 'CHEESH AUTOMATIONS transformed our entire customer support system. Their workflow automation reduced our response time by 85% and customer satisfaction scores jumped from 72% to 94%. The team\'s expertise in international business processes is exceptional.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      company: 'Digital Dynamics India',
      location: 'Mumbai, India',
      avatar: '🇮🇳',
      content: 'Working with CHEESH has been a game-changer for our e-commerce operations. Their marketing automation platform increased our conversion rates by 60% and reduced our customer acquisition costs significantly. Truly world-class solutions.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Global Innovations Inc.',
      location: 'San Francisco, USA',
      avatar: '🇺🇸',
      content: 'The custom automation solution CHEESH built for us exceeded all expectations. Their understanding of complex business workflows and ability to integrate with our existing systems was impressive. ROI achieved in just 3 months.',
      rating: 5
    },
    {
      id: 4,
      name: 'Priya Sharma',
      company: 'Smart Retail Solutions',
      location: 'Delhi, India',
      avatar: '🇮🇳',
      content: 'CHEESH\'s CRM automation revolutionized how we manage customer relationships. Sales team productivity increased by 75% and we\'re now closing deals faster than ever. Their support team is incredibly responsive.',
      rating: 5
    },
    {
      id: 5,
      name: 'David Rodriguez',
      company: 'European Tech Hub',
      location: 'Berlin, Germany',
      avatar: '🇩🇪',
      content: 'We were struggling with manual processes across multiple departments. CHEESH implemented a comprehensive automation strategy that streamlined everything. The efficiency gains are remarkable and measurable.',
      rating: 5
    },
    {
      id: 6,
      name: 'Anita Patel',
      company: 'Innovation Labs',
      location: 'Bangalore, India',
      avatar: '🇮🇳',
      content: 'CHEESH\'s expertise in workflow automation helped us scale our operations without increasing headcount. Their solutions are not just technically sound but also business-focused. Highly recommended for any business looking to automate.',
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-cheesh-orange/10 animate-float">
          <Quote size={56} />
        </div>
        <div className="absolute top-20 left-20 text-cheesh-blue/10 animate-float" style={{ animationDelay: '1s' }}>
          <Star size={48} />
        </div>
        <div className="absolute bottom-20 right-20 text-cheesh-green/10 animate-float" style={{ animationDelay: '2s' }}>
          <Award size={52} />
        </div>
        <div className="absolute bottom-10 left-10 text-cheesh-red/10 animate-float" style={{ animationDelay: '3s' }}>
          <Heart size={44} />
        </div>
        <div className="absolute top-1/3 left-1/3 text-cheesh-orange/5 animate-float" style={{ animationDelay: '0.5s' }}>
          <ThumbsUp size={36} />
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-cheesh-blue/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <CheckCircle size={32} />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their 
            automation journey with CHEESH AUTOMATIONS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-800/50 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50 card-hover transition-all duration-300 ${
                currentTestimonial === index ? 'ring-2 ring-cheesh-orange bg-gray-800/70' : ''
              }`}
            >
              {/* Visual Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cheesh-orange fill-current" />
                ))}
              </div>
              
              {/* Client Avatar with Flag */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cheesh-orange to-cheesh-red rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                  {testimonial.avatar}
                </div>
                <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                <p className="text-cheesh-orange font-medium">{testimonial.company}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>

              {/* Success Indicator */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-cheesh-green/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-cheesh-green" />
                </div>
              </div>

              <p className="text-gray-300 text-center leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Industry Badge */}
              <div className="text-center">
                <span className="inline-block bg-cheesh-blue/20 text-cheesh-blue text-xs font-medium px-3 py-1 rounded-full">
                  Automation Success
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Visualization */}
        <div className="mb-16 bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Client Success Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="25.12" className="transition-all duration-1000"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
              </div>
              <div className="text-gray-300 font-medium">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="50.24" className="transition-all duration-1000"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">80%</span>
                </div>
              </div>
              <div className="text-gray-300 font-medium">Efficiency Gain</div>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="75.36" className="transition-all duration-1000"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
              </div>
              <div className="text-gray-300 font-medium">Cost Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="100.48" className="transition-all duration-1000"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
              </div>
              <div className="text-gray-300 font-medium">Time Saved</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cheesh-orange/10 via-cheesh-red/10 to-cheesh-blue/10 rounded-2xl p-8 border border-cheesh-orange/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your business with automation and become our next success story. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Start Your Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials; 