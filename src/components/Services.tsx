'use client'

import { useState } from 'react'
import { 
  Workflow, 
  Bot, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Rocket
} from 'lucide-react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      title: 'Workflow Automation',
      description: 'Revolutionize your business processes with intelligent workflow automation that eliminates bottlenecks, reduces manual errors, and accelerates decision-making across your organization.',
      icon: Workflow,
      color: 'cheesh-orange',
      features: [
        'Process mapping and optimization',
        'Automated approval workflows',
        'Real-time progress tracking',
        'Integration with existing systems'
      ],
      benefits: ['Reduce processing time by 70%', 'Eliminate human errors', 'Improve team productivity']
    },
    {
      id: 2,
      title: 'Marketing Automation',
      description: 'Supercharge your marketing efforts with AI-powered automation that personalizes customer journeys, optimizes campaign performance, and maximizes your marketing ROI.',
      icon: Bot,
      color: 'cheesh-red',
      features: [
        'Lead scoring and nurturing',
        'Email campaign automation',
        'Social media scheduling',
        'Performance analytics'
      ],
      benefits: ['Increase lead conversion by 50%', 'Reduce marketing costs', 'Improve customer engagement']
    },
    {
      id: 3,
      title: 'CRM Automation',
      description: 'Transform your customer relationships with smart CRM automation that captures every interaction, predicts customer needs, and drives sales growth through intelligent insights.',
      icon: Cpu,
      color: 'cheesh-blue',
      features: [
        'Contact data automation',
        'Sales pipeline management',
        'Customer behavior tracking',
        'Automated follow-ups'
      ],
      benefits: ['Improve sales efficiency by 40%', 'Better customer insights', 'Streamlined sales process']
    },
    {
      id: 4,
      title: 'Customer Support Automation',
      description: 'Elevate customer experience with intelligent support automation that provides instant responses, routes inquiries efficiently, and ensures no customer query goes unanswered.',
      icon: Shield,
      color: 'cheesh-green',
      features: [
        'AI-powered chatbots',
        'Ticket routing automation',
        'Knowledge base integration',
        'Customer satisfaction tracking'
      ],
      benefits: ['Reduce response time by 80%', 'Improve customer satisfaction', 'Lower support costs']
    },
    {
      id: 5,
      title: 'Custom Automation Solutions',
      description: 'Get tailor-made automation solutions designed specifically for your unique business challenges, industry requirements, and growth objectives.',
      icon: Rocket,
      color: 'purple-500',
      features: [
        'Custom workflow design',
        'Industry-specific solutions',
        'Scalable architecture',
        'Ongoing optimization'
      ],
      benefits: ['Perfect fit for your business', 'Competitive advantage', 'Future-proof solutions']
    }
  ]

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-cheesh-orange/10 animate-float">
          <Workflow size={64} />
        </div>
        <div className="absolute top-20 right-20 text-cheesh-blue/10 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu size={48} />
        </div>
        <div className="absolute bottom-20 left-20 text-cheesh-green/10 animate-float" style={{ animationDelay: '2s' }}>
          <Bot size={56} />
        </div>
        <div className="absolute bottom-10 right-10 text-cheesh-red/10 animate-float" style={{ animationDelay: '3s' }}>
          <Zap size={40} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-cheesh-orange/5 animate-float" style={{ animationDelay: '0.5s' }}>
          <Target size={32} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-cheesh-blue/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Lightbulb size={28} />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Our <span className="gradient-text">Automation Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From workflow optimization to custom solutions, we provide comprehensive automation services 
            that transform how your business operates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
                         <div
               key={service.id}
               className={`bg-gray-800/50 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50 card-hover cursor-pointer transition-all duration-300 group ${
                 activeService === index ? 'ring-2 ring-cheesh-orange bg-gray-800/70' : ''
               }`}
               onClick={() => setActiveService(index)}
             >
                             {/* Process Flow Lines */}
               <div className="relative mb-6">
                 <div className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                   <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-110 transition-transform duration-300">
                     <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none" className={`text-${service.color}`}/>
                     <circle cx="0" cy="50" r="3" fill="currentColor" className={`text-${service.color} animate-pulse`}/>
                     <circle cx="100" cy="50" r="3" fill="currentColor" className={`text-${service.color} animate-pulse`} style={{ animationDelay: '0.5s' }}/>
                   </svg>
                 </div>
                 {/* Floating particles */}
                 <div className="absolute top-2 left-2 w-2 h-2 bg-cheesh-orange rounded-full opacity-0 group-hover:opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                 <div className="absolute top-4 right-4 w-1 h-1 bg-cheesh-blue rounded-full opacity-0 group-hover:opacity-60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
               </div>
              
                             <div className="flex items-center mb-6">
                 <div className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-${service.color}/80 rounded-xl flex items-center justify-center mr-4 relative group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                   <service.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                   {/* Animated Ring */}
                   <div className={`absolute inset-0 border-2 border-${service.color} rounded-xl animate-ping opacity-20`}></div>
                   {/* Glow Effect */}
                   <div className={`absolute inset-0 bg-${service.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white group-hover:text-cheesh-orange transition-colors duration-300">{service.title}</h3>
                   <div className="flex items-center space-x-2 mt-1">
                     <Zap className="w-4 h-4 text-cheesh-orange animate-pulse" />
                     <span className="text-sm text-gray-400">Automation</span>
                   </div>
                 </div>
               </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-cheesh-green flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

                             <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   setActiveService(index);
                   // Scroll to the active service details section with offset
                   setTimeout(() => {
                     const element = document.querySelector('#services');
                     if (element) {
                       const offset = 100; // Adjust this value as needed
                       const elementPosition = element.getBoundingClientRect().top;
                       const offsetPosition = elementPosition + window.pageYOffset - offset;
                       window.scrollTo({
                         top: offsetPosition,
                         behavior: 'smooth'
                       });
                     }
                   }, 100);
                 }}
                 className="w-full btn-secondary flex items-center justify-center space-x-2 group-hover:bg-cheesh-orange group-hover:text-white transition-all duration-300"
               >
                 <span>Learn More</span>
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
               </button>
            </div>
          ))}
        </div>

        {/* Visual Process Flow */}
        <div className="mb-16 bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Automation Process Flow</h3>
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cheesh-orange rounded-full flex items-center justify-center mb-3 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-300">Analyze</div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-cheesh-orange to-cheesh-blue"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cheesh-blue rounded-full flex items-center justify-center mb-3 mx-auto">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-300">Design</div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-cheesh-blue to-cheesh-green"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cheesh-green rounded-full flex items-center justify-center mb-3 mx-auto">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-300">Implement</div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-cheesh-green to-cheesh-red"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cheesh-red rounded-full flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-gray-300">Optimize</div>
            </div>
          </div>
        </div>

        {/* Active Service Details */}
        <div className="bg-gray-800/30 backdrop-blur-custom rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cheesh-green flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Benefits You'll Get:</h4>
              <div className="space-y-4">
                {services[activeService].benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-cheesh-orange/10 to-cheesh-red/10 rounded-lg p-4 border border-cheesh-orange/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cheesh-orange rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary w-full"
                >
                  Get Started with {services[activeService].title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services; 