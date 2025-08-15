'use client'

import { 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Globe, 
  Target, 
  Lightbulb, 
  Shield, 
  Star, 
  CheckCircle,
  Rocket,
  Zap,
  Cpu,
  Bot,
  Workflow
} from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients', color: 'cheesh-blue' },
    { icon: Zap, value: '500+', label: 'Processes Automated', color: 'cheesh-orange' },
    { icon: TrendingUp, value: '85%', label: 'Efficiency Boost', color: 'cheesh-green' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'cheesh-red' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge automation technologies and creative solutions.',
      color: 'cheesh-orange'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Every solution we deliver meets the highest standards of quality and performance.',
      color: 'cheesh-green'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized solutions and 24/7 support.',
      color: 'cheesh-blue'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and processes are protected with enterprise-grade security measures.',
      color: 'cheesh-red'
    }
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-cheesh-orange/10 animate-float">
          <Target size={56} />
        </div>
        <div className="absolute top-20 left-20 text-cheesh-blue/10 animate-float" style={{ animationDelay: '1s' }}>
          <Lightbulb size={48} />
        </div>
        <div className="absolute bottom-20 right-20 text-cheesh-green/10 animate-float" style={{ animationDelay: '2s' }}>
          <Shield size={52} />
        </div>
        <div className="absolute bottom-10 left-10 text-cheesh-red/10 animate-float" style={{ animationDelay: '3s' }}>
          <Star size={44} />
        </div>
        <div className="absolute top-1/3 left-1/3 text-cheesh-orange/5 animate-float" style={{ animationDelay: '0.5s' }}>
          <Rocket size={36} />
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-cheesh-blue/5 animate-float" style={{ animationDelay: '1.5s' }}>
          <Cpu size={32} />
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Pioneering the Future of <span className="gradient-text">Business Automation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're not just another automation company – we're the architects of digital transformation. 
              Our team combines deep technical expertise with innovative thinking to create automation solutions 
              that don't just work, but revolutionize how businesses operate in the digital age.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From streamlining complex workflows to building intelligent customer experiences, we've helped 
              hundreds of companies across diverse industries achieve unprecedented efficiency gains and 
              competitive advantages through strategic automation implementation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    // Show detailed stat info
                    const modal = document.getElementById(`stat-modal-${index}`);
                    if (modal) {
                      modal.classList.remove('hidden');
                      setTimeout(() => modal.classList.add('hidden'), 4000);
                    }
                  }}
                >
                  <div className={`flex justify-center mb-2`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Logo Representation */}
            <div className="relative mx-auto w-80 h-80">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-cheesh-orange/20 via-cheesh-red/20 to-cheesh-blue/20 rounded-full blur-2xl"></div>
              
              {/* Main Logo */}
              <div className="relative w-full h-full bg-gradient-to-br from-cheesh-orange via-cheesh-red to-cheesh-blue rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-cheesh-orange rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                  </div>
                  {/* Eagle */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-cheesh-orange rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cheesh-green/80 rounded-full flex items-center justify-center animate-float">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cheesh-blue/80 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-cheesh-red/80 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Data Flow Visualization */}
            <div className="absolute -top-20 -right-20 w-40 h-40 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="dataFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="100%" stopColor="#ef4444"/>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#dataFlow1)" strokeWidth="2" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: '20s' }}/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="url(#dataFlow1)" strokeWidth="1" strokeDasharray="3,3" className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="url(#dataFlow1)" strokeWidth="1" strokeDasharray="2,2" className="animate-spin" style={{ animationDuration: '10s' }}/>
              </svg>
            </div>

            {/* Process Nodes */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-40">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-8 h-8 bg-cheesh-orange rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-cheesh-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-8 h-8 bg-cheesh-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="w-8 h-8 bg-cheesh-red rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="w-8 h-8 bg-cheesh-orange rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="w-8 h-8 bg-cheesh-blue rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                <div className="w-8 h-8 bg-cheesh-green rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="w-8 h-8 bg-cheesh-red rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
                <div className="w-8 h-8 bg-cheesh-orange rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-custom rounded-xl p-6 border border-gray-700/50 card-hover">
                <div className={`w-16 h-16 bg-${value.color} rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-cheesh-orange/10 via-cheesh-red/10 to-cheesh-blue/10 rounded-2xl p-8 border border-cheesh-orange/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              "To democratize automation technology and empower businesses of all sizes to achieve operational excellence, 
              drive innovation, and unlock their full potential through intelligent, scalable, and cost-effective automation solutions. 
              From Jaipur to the world, we're making automation accessible, reliable, and transformative."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About; 