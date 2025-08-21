'use client'

import { useState } from 'react'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageCircle, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle, 
  Star,
  Lightbulb,
  Target,
  Rocket,
  Zap,
  Bot
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear any previous error messages when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
        
        // Show success message
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'cheeshautomations@gmail.com',
      description: 'Send us an email anytime',
      color: 'cheesh-orange'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Jaipur, Rajasthan',
      description: 'Heart of Pink City',
      color: 'cheesh-blue'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: '24/7 Available',
      description: 'Round-the-clock support',
      color: 'cheesh-red'
    }
  ]

  const services = [
    'Workflow Automation',
    'Marketing Automation',
    'CRM Automation',
    'Customer Support Automation',
    'Custom Automation Solutions',
    'Other'
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-cheesh-orange/10 animate-float">
          <MessageCircle size={56} />
        </div>
        <div className="absolute top-20 right-20 text-cheesh-blue/10 animate-float" style={{ animationDelay: '1s' }}>
          <Mail size={48} />
        </div>
        <div className="absolute bottom-20 left-20 text-cheesh-green/10 animate-float" style={{ animationDelay: '2s' }}>
          <Globe size={52} />
        </div>
        <div className="absolute bottom-10 right-10 text-cheesh-red/10 animate-float" style={{ animationDelay: '3s' }}>
          <Users size={44} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-cheesh-orange/5 animate-float" style={{ animationDelay: '0.5s' }}>
          <Lightbulb size={36} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-cheesh-blue/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Target size={32} />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our automation solutions can revolutionize your operations. 
            Whether you're looking to streamline workflows, boost productivity, or create 
            innovative customer experiences, we're here to turn your vision into reality.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            {/* Visual Form Flow */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cheesh-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-cheesh-orange to-cheesh-blue"></div>
                <div className="w-12 h-12 bg-cheesh-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-cheesh-blue to-cheesh-green"></div>
                <div className="w-12 h-12 bg-cheesh-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-8 mb-6 text-sm text-gray-400">
              <span>Fill Form</span>
              <span>We Review</span>
              <span>Get Quote</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-gradient-to-r from-cheesh-green/10 to-cheesh-blue/10 border border-cheesh-green/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cheesh-green flex-shrink-0" />
                    <div>
                      <h4 className="text-cheesh-green font-semibold">Message Sent Successfully!</h4>
                      <p className="text-gray-300 text-sm">Thank you for your message! We will get back to you within 2-4 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-gradient-to-r from-cheesh-red/10 to-cheesh-orange/10 border border-cheesh-red/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 text-cheesh-red flex-shrink-0">⚠</div>
                    <div>
                      <h4 className="text-cheesh-red font-semibold">Error Sending Message</h4>
                      <p className="text-gray-300 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Service Interest</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Workflow Automation">Workflow Automation</option>
                  <option value="Marketing Automation">Marketing Automation</option>
                  <option value="CRM Automation">CRM Automation</option>
                  <option value="Customer Support Automation">Customer Support Automation</option>
                  <option value="Custom Automation Solutions">Custom Automation Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                  placeholder="Tell us about your automation needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'btn-primary hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Response */}
            <div className="bg-gradient-to-r from-cheesh-orange/10 to-cheesh-red/10 rounded-xl p-6 border border-cheesh-orange/20">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-cheesh-orange" />
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                We typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent matters, please email us directly.
              </p>
            </div>

            {/* Global Service */}
            <div className="bg-gradient-to-r from-cheesh-blue/10 to-cheesh-green/10 rounded-xl p-6 border border-cheesh-blue/20">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-cheesh-blue" />
                <h4 className="text-lg font-semibold text-white">Global Service</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Based in Jaipur, Rajasthan, we serve clients worldwide with localized support and solutions tailored to your 
                specific market and regulatory requirements.
              </p>
            </div>

            {/* Visual Contact Methods */}
            <div className="bg-gray-800/30 backdrop-blur-custom rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Contact Methods</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-cheesh-orange/10 to-cheesh-red/10 rounded-lg border border-cheesh-orange/20">
                  <Mail className="w-8 h-8 text-cheesh-orange mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Email</div>
                  <div className="text-xs text-cheesh-orange font-medium">cheeshautomations@gmail.com</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cheesh-blue/10 to-cheesh-green/10 rounded-lg border border-cheesh-blue/20">
                  <MapPin className="w-8 h-8 text-cheesh-blue mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Location</div>
                  <div className="text-xs text-cheesh-blue font-medium">Jaipur, Rajasthan</div>
                </div>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="bg-gradient-to-r from-cheesh-green/10 to-cheesh-orange/10 rounded-xl p-6 border border-cheesh-green/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Response Time</h4>
                <div className="w-16 h-16 relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="50.24" className="transition-all duration-1000"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">2-4h</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Average response time during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact; 
