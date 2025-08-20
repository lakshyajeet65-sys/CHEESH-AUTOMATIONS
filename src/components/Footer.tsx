'use client'

import { useState } from 'react'
import {
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  CheckCircle,
  X
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Workflow Automation', href: '#services' },
      { name: 'Marketing Automation', href: '#services' },
      { name: 'CRM Automation', href: '#services' },
      { name: 'Custom Automation', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Help Center', href: '#contact' },
      { name: 'Documentation', href: '#contact' },
      { name: 'Status', href: '#contact' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:bg-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:bg-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:bg-blue-700' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:bg-pink-600' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Careers', href: '#careers' },
  ];

  const services = [
    'Workflow Automation',
    'Marketing Automation',
    'CRM Automation',
    'Custom Automation',
  ];

  return (
    <footer className="bg-black relative">
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Company Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src="/CHEESH-LOGO.png"
                  alt="CHEESH AUTOMATIONS Logo"
                  className="w-32 h-40 object-contain"
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white mb-2">CHEESH AUTOMATIONS</h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    Transforming businesses through intelligent automation solutions. 
                    We help companies streamline operations, boost productivity, and achieve remarkable results.
                  </p>
                </div>
              </div>
              
              {/* Visual Company Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gradient-to-r from-cheesh-orange/10 to-cheesh-red/10 rounded-lg border border-cheesh-orange/20">
                  <div className="text-2xl font-bold text-cheesh-orange">500+</div>
                  <div className="text-xs text-gray-400">Automations</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-cheesh-blue/10 to-cheesh-green/10 rounded-lg border border-cheesh-blue/20">
                  <div className="text-2xl font-bold text-cheesh-blue">50+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-cheesh-green/10 to-cheesh-orange/10 rounded-lg border border-cheesh-green/20">
                  <div className="text-2xl font-bold text-cheesh-green">98%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-cheesh-orange transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-cheesh-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        const element = document.querySelector('#services');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-cheesh-orange transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-2 h-2 bg-cheesh-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{service}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 bg-gradient-to-r from-cheesh-orange/10 via-cheesh-red/10 to-cheesh-blue/10 rounded-2xl p-8 border border-cheesh-orange/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest automation insights, industry trends, and success stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cheesh-orange focus:border-transparent"
                />
                <button 
                  onClick={() => {
                    // Show newsletter confirmation
                    const confirmation = document.getElementById('newsletter-confirmation');
                    if (confirmation) {
                      confirmation.classList.remove('hidden');
                      setTimeout(() => confirmation.classList.add('hidden'), 3000);
                    }
                  }}
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Confirmation */}
          <div id="newsletter-confirmation" className="hidden fixed top-4 right-4 z-50 bg-cheesh-green text-white px-6 py-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Successfully subscribed to newsletter!</span>
            </div>
          </div>



          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-base">
                © {currentYear} CHEESH AUTOMATIONS. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-cheesh-orange transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-cheesh-orange transition-colors duration-300"
                >
                  Terms of Service
                </button>
              </div>
              <button onClick={scrollToTop}
                className="w-12 h-12 bg-gray-800 hover:bg-cheesh-orange rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
            <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
                <p className="leading-relaxed">
                  By accessing and using CHEESH AUTOMATIONS services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Service Description</h3>
                <p className="leading-relaxed">
                  CHEESH AUTOMATIONS provides business automation solutions including but not limited to workflow automation, marketing automation, CRM automation, and custom automation services. Our services are designed to streamline business processes and improve operational efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Respect intellectual property rights and confidentiality agreements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Payment Terms</h3>
                <p className="leading-relaxed">
                  Payment for services is due upon receipt of invoice. Late payments may result in service suspension. All fees are non-refundable unless otherwise specified in writing. Prices are subject to change with 30 days notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Service Level Agreement</h3>
                <p className="leading-relaxed">
                  We commit to maintaining 99.9% uptime for our automation services. Scheduled maintenance will be communicated in advance. Support is available during business hours with emergency support for critical issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Data and Privacy</h3>
                <p className="leading-relaxed">
                  We handle all client data in accordance with our Privacy Policy and applicable data protection regulations. Client data remains the property of the client and is protected under strict confidentiality agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h3>
                <p className="leading-relaxed">
                  CHEESH AUTOMATIONS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for services in the 12 months preceding the claim.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Termination</h3>
                <p className="leading-relaxed">
                  Either party may terminate this agreement with 30 days written notice. Upon termination, all access to services will be suspended and client data will be returned or deleted as requested.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. Governing Law</h3>
                <p className="leading-relaxed">
                  This agreement shall be governed by and construed in accordance with the laws of the jurisdiction where CHEESH AUTOMATIONS is incorporated, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">10. Contact Information</h3>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at legal@cheeshautomations.com or through our contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
            <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
                <p className="leading-relaxed mb-3">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Contact us for automation services</li>
                  <li>Sign up for our newsletter</li>
                  <li>Request a consultation or quote</li>
                  <li>Use our automation platforms</li>
                  <li>Provide feedback or testimonials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Types of Data Collected</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li><strong>Personal Information:</strong> Name, email, phone number, company details</li>
                  <li><strong>Business Data:</strong> Process workflows, automation requirements, performance metrics</li>
                  <li><strong>Technical Data:</strong> IP addresses, browser information, usage analytics</li>
                  <li><strong>Communication Data:</strong> Emails, support tickets, consultation notes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h3>
                <p className="leading-relaxed mb-3">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Provide and improve our automation services</li>
                  <li>Communicate with you about services and updates</li>
                  <li>Process payments and maintain accounts</li>
                  <li>Analyze usage patterns to enhance our platforms</li>
                  <li>Comply with legal obligations</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Data Security</h3>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your data, including encryption, secure servers, access controls, and regular security audits. We maintain strict confidentiality agreements with all employees and contractors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Data Sharing and Disclosure</h3>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Service providers who assist in delivering our services</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                  <li>Third-party platforms for integration purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
                <p className="leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Access and review your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Lodge complaints with supervisory authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Cookies and Tracking</h3>
                <p className="leading-relaxed">
                  We use cookies and similar technologies to improve user experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Data Retention</h3>
                <p className="leading-relaxed">
                  We retain your data for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Client data is typically retained for 7 years after service termination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. International Data Transfers</h3>
                <p className="leading-relaxed">
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">10. Updates to This Policy</h3>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or through our website. Continued use of our services constitutes acceptance of updated policies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">11. Contact Us</h3>
                <p className="leading-relaxed">
                  For privacy-related questions or to exercise your rights, contact us at privacy@cheeshautomations.com or through our contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer; 