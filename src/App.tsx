import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Shield, 
  Zap, 
  Settings, 
  Gamepad2, 
  Ban,
  Users,
  Activity,
  Clock,
  Menu,
  X,
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  Github
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    users: 12847,
    servers: 3421,
    uptime: 99.9
  });

  // Animate stats on load
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 3),
        servers: prev.servers + Math.floor(Math.random() * 2),
        uptime: 99.9 + Math.random() * 0.1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection against all types of attacks"
    },
    {
      icon: Zap,
      title: "Fast SSD Storage",
      description: "Lightning-fast NVMe SSD storage for optimal performance"
    },
    {
      icon: Settings,
      title: "Custom Panel",
      description: "Intuitive control panel designed for ease of use"
    },
    {
      icon: Gamepad2,
      title: "Minecraft Hosting",
      description: "Optimized servers for Minecraft and other games"
    },
    {
      icon: Ban,
      title: "No Ads",
      description: "Clean, ad-free experience for all users"
    },
    {
      icon: Server,
      title: "24/7 Uptime",
      description: "Reliable hosting with maximum uptime guarantee"
    }
  ];

  const testimonials = [
    {
      name: "Asthrux",
      role: "Minecraft Developer",
      content: "RexNodes has been incredible for hosting my Minecraft server. Performance is great and the support is always helpful!",
      rating: 5
    },
    {
      name: "SpiderGamer",
      role: "Developer",
      content: "Free hosting that actually works! I've been using RexNodes for 2 weeks and haven't experienced any downtime.",
      rating: 5
    },
    {
      name: "adarsh573",
      role: "Community Manager",
      content: "The custom panel makes server management so easy. Perfect for beginners and experienced users alike.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RN</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  REXNODES
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-white hover:text-purple-400 transition-colors font-medium">Home</a>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Features</a>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Pricing</a>
                <a href="#support" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Support</a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2.5 rounded-xl transition-all font-medium">
                  Join Discord
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-purple-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              <a href="#home" className="block py-2 text-white font-medium">Home</a>
              <a href="#features" className="block py-2 text-gray-400 hover:text-purple-400 font-medium">Features</a>
              <a href="#pricing" className="block py-2 text-gray-400 hover:text-purple-400 font-medium">Pricing</a>
              <a href="#support" className="block py-2 text-gray-400 hover:text-purple-400 font-medium">Support</a>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 py-2.5 rounded-xl font-medium">
                Join Discord
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                REXNODES™
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Free Hosting, No Limits.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the future of hosting with lightning-fast servers at unbeatable prices
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Instant Setup</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Shield className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">DDoS Protected</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Activity className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25">
                Paid Plans
              </button>
              <button className="border border-white/20 hover:border-purple-400/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all">
                Free Plans
              </button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stats.users.toLocaleString()}</div>
                <div className="text-gray-400 font-medium">Total Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all">
                <Server className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stats.servers.toLocaleString()}</div>
                <div className="text-gray-400 font-medium">Active Servers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all">
                <Activity className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stats.uptime.toFixed(1)}%</div>
                <div className="text-gray-400 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose RexNodes?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We provide enterprise-grade hosting features completely free, with no hidden costs or limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <feature.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Join hundreds of satisfied users who trust RexNodes for their hosting needs.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-purple-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400 text-lg">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm rounded-full p-4 transition-all border border-white/10 hover:border-purple-400/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm rounded-full p-4 transition-all border border-white/10 hover:border-purple-400/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 text-gray-300 leading-relaxed">
            Join thousands of users who trust RexNodes for their hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/25">
              Create Account
            </button>
            <button className="border border-white/20 hover:border-purple-400/50 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/5 transition-all">
              Join Discord
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RN</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  REXNODES™
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Premium hosting services, completely free. Experience the power of professional hosting without the cost.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/20 rounded-xl flex items-center justify-center transition-all border border-white/10 hover:border-purple-400/30">
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-purple-400" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-purple-500/20 rounded-xl flex items-center justify-center transition-all border border-white/10 hover:border-purple-400/30">
                  <Github className="h-5 w-5 text-gray-400 hover:text-purple-400" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#support" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
                <li><a href="#discord" className="text-gray-400 hover:text-purple-400 transition-colors">Discord</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RexNodes™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;