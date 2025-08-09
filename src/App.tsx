import React, { useState, useEffect } from "react";
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
  Github,
  MessageCircle,
  Check,
  Cpu,
  HardDrive,
  Gift,
  Globe,
  TrendingUp,
  DollarSign,
  Headphones,
  Rocket,
  Bot,
  Monitor,
  Scale,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [stats, setStats] = useState({
    users: 600,
    servers: 1298,
    uptime: 99.9,
  });

  // Animate stats on load
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: prev.users + Math.floor(Math.random() * 3),
        servers: prev.servers + Math.floor(Math.random() * 2),
        uptime: 99.9,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection against all types of attacks",
    },
    {
      icon: Zap,
      title: "Fast SSD Storage",
      description: "Lightning-fast NVMe SSD storage for optimal performance",
    },
    {
      icon: Settings,
      title: "Custom Panel",
      description: "Intuitive control panel designed for ease of use",
    },
    {
      icon: Gamepad2,
      title: "Minecraft Hosting",
      description: "Optimized servers for Minecraft and other games",
    },
    {
      icon: Ban,
      title: "No Ads",
      description: "Clean, ad-free experience for all users",
    },
    {
      icon: Server,
      title: "24/7 Uptime",
      description: "Reliable hosting with maximum uptime guarantee",
    },
  ];

  const testimonials = [
    {
      name: "Asthrux",
      role: "Minecraft Developer",
      content:
        "RexNodes has been incredible for hosting my Minecraft server. Performance is great and the support is always helpful!",
      rating: 5,
    },
    {
      name: "SpiderGamer",
      role: "Developer",
      content:
        "Free hosting that actually works! I've been using RexNodes for 2 weeks and haven't experienced any downtime.",
      rating: 5,
    },
    {
      name: "adarsh573",
      role: "Community Manager",
      content:
        "The custom panel makes server management so easy. Perfect for beginners and experienced users alike.",
      rating: 5,
    },
  ];

  const gamerPlans = [
    {
      name: "Dirt Plan",
      emoji: "🟤",
      ram: "2 GB",
      cpu: "50%",
      disk: "6 GB",
      price: "$1",
    },
    {
      name: "Stone Plan",
      emoji: "⚫",
      ram: "4 GB",
      cpu: "100%",
      disk: "8 GB",
      price: "$1.5",
    },
    {
      name: "Copper Plan",
      emoji: "🟠",
      ram: "8 GB",
      cpu: "150%",
      disk: "15 GB",
      price: "$2",
    },
    {
      name: "Iron Plan",
      emoji: "⚙️",
      ram: "12 GB",
      cpu: "200%",
      disk: "30 GB",
      price: "$3",
    },
    {
      name: "Diamond Plan",
      emoji: "🔷",
      ram: "16 GB",
      cpu: "250%",
      disk: "45 GB",
      price: "$5",
    },
    {
      name: "Netherite Plan",
      emoji: "⬛",
      ram: "32 GB",
      cpu: "400%",
      disk: "70 GB",
      price: "$7",
    },
    {
      name: "Bedrock Plan",
      emoji: "🪨",
      ram: "48 GB",
      cpu: "600%",
      disk: "80 GB",
      price: "$10",
    },
  ];

  const vpsPlans = [
    {
      name: "Zero Two Plan",
      cpu: "4 Core Intel Xeon E5-2680",
      ram: "32 GB",
      disk: "500 GB SSD",
      firstMonth: "$14",
      renewal: "$6.99",
    },
    {
      name: "Rex Plan",
      cpu: "8 Core Intel Xeon E5-2680",
      ram: "64 GB",
      disk: "500 GB SSD",
      firstMonth: "$23.29",
      renewal: "$13.98",
    },
  ];

  const vmPlans = [
    {
      name: "Nano",
      ram: "4 GB",
      cores: "1 vCore",
      disk: "15 GB",
      price: "$0.50",
    },
    {
      name: "Basic",
      ram: "8 GB",
      cores: "2 vCores",
      disk: "30 GB",
      price: "$1",
    },
    {
      name: "Starter",
      ram: "16 GB",
      cores: "4 vCores",
      disk: "60 GB",
      price: "$3.5",
    },
    {
      name: "Pro",
      ram: "24 GB",
      cores: "6 vCores",
      disk: "160 GB",
      price: "$5",
    },
    {
      name: "Essentials",
      ram: "32 GB",
      cores: "8 vCores",
      disk: "300 GB",
      price: "$8",
    },
    {
      name: "Elite",
      ram: "48 GB",
      cores: "10 vCores",
      disk: "400 GB",
      price: "$12",
    },
    {
      name: "Enterprise",
      ram: "64 GB",
      cores: "12 vCores",
      disk: "600 GB",
      price: "$14",
    },
  ];

  const inviteRewards = [
    {
      name: "Dirt Plan",
      emoji: "🟤",
      ram: "2 GB",
      cpu: "100%",
      disk: "6 GB",
      invites: "2 Invites",
    },
    {
      name: "Stone Plan",
      emoji: "⚫",
      ram: "4 GB",
      cpu: "150%",
      disk: "8 GB",
      invites: "5 Invites",
    },
    {
      name: "Copper Plan",
      emoji: "🟠",
      ram: "8 GB",
      cpu: "200%",
      disk: "12 GB",
      invites: "10 Invites",
    },
    {
      name: "Iron Plan",
      emoji: "⚙️",
      ram: "12 GB",
      cpu: "300%",
      disk: "20 GB",
      invites: "15 Invites",
    },
    {
      name: "Diamond Plan",
      emoji: "🔷",
      ram: "16 GB",
      cpu: "400%",
      disk: "30 GB",
      invites: "18 Invites",
    },
    {
      name: "Bedrock Plan",
      emoji: "🪨",
      ram: "Infinite",
      cpu: "Infinite",
      disk: "Infinite",
      invites: "35 Invites",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const renderNavigation = () => (
    <div>
      {/* Fixed Top Navigation */}
      <nav className="fixed left-0 right-0 z-50 glass rounded-3xl mx-4 transition-all duration-700 ease-out top-4 scale-100 opacity-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RN</span>
              </div>
              <span className="quirky-font text-xl text-primary">REXNODES</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-4 py-2 rounded-xl transition-all hover:text-foreground hover:bg-secondary/50 ${currentPage === "home" ? "text-foreground bg-secondary/50" : "text-muted-foreground"} hover-glow`}
              >
                <span>Home</span>
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-4 py-2 rounded-xl transition-all hover:text-foreground hover:bg-secondary/50 ${currentPage === "features" ? "text-foreground bg-secondary/50" : "text-muted-foreground"} hover-glow`}
              >
                <span>Features</span>
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
                className={`px-4 py-2 rounded-xl transition-all hover:text-foreground hover:bg-secondary/50 ${currentPage === "pricing" ? "text-foreground bg-secondary/50" : "text-muted-foreground"} hover-glow`}
              >
                <span>Pricing</span>
              </button>
              <button
                onClick={() => setCurrentPage("support")}
                className={`px-4 py-2 rounded-xl transition-all hover:text-foreground hover:bg-secondary/50 ${currentPage === "support" ? "text-foreground bg-secondary/50" : "text-muted-foreground"} hover-glow`}
              >
                <span>Support</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://panel5.benmc.dpdns.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-xl"
              >
                <ExternalLink className="mr-2" />
                Panel
              </a>
              <a
                href="https://discord.gg/rexhost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 rounded-xl"
              >
                Join Discord
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-orange-400"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 rounded-b-3xl">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-white font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("features");
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-gray-400 hover:text-orange-400 font-medium w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => {
                  setCurrentPage("pricing");
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-gray-400 hover:text-orange-400 font-medium w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  setCurrentPage("support");
                  setIsMenuOpen(false);
                }}
                className="block py-2 text-gray-400 hover:text-orange-400 font-medium w-full text-left"
              >
                Support
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 glass rounded-2xl p-3 transition-all duration-700 ease-out translate-y-0 opacity-100 scale-100">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage("home")}
            className={`px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-secondary/50 text-sm hover-glow ${currentPage === "home" ? "text-foreground bg-secondary/50" : "text-muted-foreground"}`}
            style={{ animationDelay: "0s" }}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("features")}
            className={`px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-secondary/50 text-sm hover-glow ${currentPage === "features" ? "text-foreground bg-secondary/50" : "text-muted-foreground"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Features
          </button>
          <button
            onClick={() => setCurrentPage("pricing")}
            className={`px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-secondary/50 text-sm hover-glow ${currentPage === "pricing" ? "text-foreground bg-secondary/50" : "text-muted-foreground"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Pricing
          </button>
          <button
            onClick={() => setCurrentPage("support")}
            className={`px-3 py-2 rounded-lg transition-all hover:text-foreground hover:bg-secondary/50 text-sm hover-glow ${currentPage === "support" ? "text-foreground bg-secondary/50" : "text-muted-foreground"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Support
          </button>
        </div>
      </nav>
    </div>
  );

  const renderHomePage = () => (
    <main className="pt-15">
      {/* Shooting Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="shooting-star"></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="container mx-auto text-center">
            <div className="transition-all duration-1500 smooth-entrance">
              <h1 className="quirky-font text-7xl md:text-9xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                REXNODES
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-muted-foreground max-w-3xl mx-auto font-semibold">
                Free Hosting, No Limits
              </p>
              <p className="text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
                Experience the future of hosting with lightning-fast servers at
                unbeatable prices
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 mb-8 inline-block transition-all duration-1000 delay-300 hover-glow bounce-in">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Zap className="text-accent" />
                  <span>Free Servers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-accent" />
                  <span>Easy Panel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="text-accent" />
                  <span>24/7 Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-accent" />
                  <span>Fast Setup</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 animate-fade-in">
              <a
                href="https://panel5.benmc.dpdns.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-2xl px-8 py-4 text-lg font-semibold hover-glow"
              >
                Get Started
              </a>
              <a
                href="https://discord.gg/rexhost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-2xl px-8 py-4 text-lg font-semibold hover-glow"
              >
                Join Discord
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  value: stats.users.toLocaleString(),
                  label: "Total Users",
                },
                {
                  icon: Server,
                  value: stats.servers.toLocaleString(),
                  label: "Active Servers",
                },
                {
                  icon: TrendingUp,
                  value: `${stats.uptime.toFixed(1)}%`,
                  label: "Uptime",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm glass-card text-center hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <stat.icon
                      className="mx-auto mb-3 text-primary"
                      size={32}
                    />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-4xl md:text-5xl mb-6 text-primary">
                Why Choose RexNodes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide enterprise-grade hosting features completely free,
                with no hidden costs or limitations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm glass-card border-primary/20 hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col space-y-1.5 p-6 text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-fit">
                      <feature.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="tracking-tight text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-center text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="quirky-font text-4xl md:text-5xl mb-6 text-primary">
                What Our Users Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join thousands of satisfied users who trust RexNodes for their
                hosting needs
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm glass-card hover-glow">
                <div className="p-8 text-center min-h-[200px] flex flex-col justify-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 fill-current"
                          size={20}
                        />
                      ),
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-2"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-2"
              >
                <ChevronRight size={16} />
              </button>

              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm glass-card border-primary/20 hover-glow max-w-4xl mx-auto">
              <div className="p-12">
                <h2 className="quirky-font text-4xl md:text-5xl mb-6 text-primary">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users who trust RexNodes for their hosting
                  needs. Start with our free tier or choose a paid plan that
                  fits your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://discord.gg/rexhost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-2xl px-8 py-4 text-lg font-semibold hover-glow"
                  >
                    Join Discord <ArrowRight className="ml-2" size={20} />
                  </a>
                  <button
                    onClick={() => setCurrentPage("pricing")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-2xl px-8 py-4 text-lg font-semibold hover-glow"
                  >
                    View Plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );

  const renderPricingPage = () => (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From free hosting to enterprise solutions, we have the perfect plan
            for your needs.
          </p>
        </div>

        {/* Gamer Server Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center gap-3">
            <Gamepad2 className="h-8 w-8 text-orange-400" />
            Gamer Server Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {gamerPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/30 transition-all w-full max-w-sm mx-auto"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-orange-400">
                    {plan.price}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Server className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.ram} RAM
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Cpu className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.cpu} CPU
                  </div>
                  <div className="flex items-center text-gray-300">
                    <HardDrive className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.disk} Disk
                  </div>
                </div>
                <a
                  href="https://discord.gg/rexhost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all inline-flex items-center justify-center"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* VPS Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center gap-3">
            <Server className="h-8 w-8 text-orange-400" />
            High Performance VPS Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vpsPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {plan.name}
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Cpu className="h-5 w-5 text-orange-400 mr-3" />
                    {plan.cpu}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Server className="h-5 w-5 text-orange-400 mr-3" />
                    {plan.ram} RAM
                  </div>
                  <div className="flex items-center text-gray-300">
                    <HardDrive className="h-5 w-5 text-orange-400 mr-3" />
                    {plan.disk}
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-1">First Month</div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {plan.firstMonth}
                  </div>
                  <div className="text-sm text-gray-400">
                    Then {plan.renewal}/month
                  </div>
                </div>
                <a
                  href="https://discord.gg/rexhost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all inline-flex items-center justify-center"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* VM Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center gap-3">
            <Settings className="h-8 w-8 text-orange-400" />
            VM Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vmPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/30 transition-all w-full max-w-sm mx-auto"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-orange-400">
                    {plan.price}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Server className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.ram} RAM
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Cpu className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.cores}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <HardDrive className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.disk} Disk
                  </div>
                </div>
                <a
                  href="https://discord.gg/rexhost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all inline-flex items-center justify-center"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Rewards */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-white flex items-center justify-center gap-3">
            <Gift className="h-8 w-8 text-orange-400" />
            Invite Rewards Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inviteRewards.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/30 transition-all w-full max-w-sm mx-auto"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-orange-400">
                    📨 {plan.invites}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Server className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.ram} RAM
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Cpu className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.cpu} CPU
                  </div>
                  <div className="flex items-center text-gray-300">
                    <HardDrive className="h-4 w-4 text-orange-400 mr-2" />
                    {plan.disk} Disk
                  </div>
                </div>
                <a
                  href="https://discord.gg/rexhost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold transition-all inline-flex items-center justify-center"
                >
                  Start Inviting
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLegalPage = (type: string) => {
    const content = {
      tos: {
        title: "Terms of Service",
        sections: [
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using RexNodes™ services, you accept and agree to be bound by the terms and provision of this agreement.",
          },
          {
            title: "2. Use License",
            content:
              "Permission is granted to temporarily use RexNodes™ services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
          },
          {
            title: "3. Disclaimer",
            content:
              "The materials on RexNodes™ are provided on an 'as is' basis. RexNodes™ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
          },
          {
            title: "4. Limitations",
            content:
              "In no event shall RexNodes™ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use RexNodes™ services.",
          },
          {
            title: "5. Account Termination",
            content:
              "RexNodes™ reserves the right to terminate accounts that violate our terms of service or engage in activities that may harm our infrastructure or other users.",
          },
          {
            title: "6. Prohibited Activities",
            content:
              "Users are prohibited from using our services for illegal activities, spamming, cryptocurrency mining, or any activities that may cause excessive resource usage or harm to our infrastructure.",
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            title: "1. Information We Collect",
            content:
              "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and usage data.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and events.",
          },
          {
            title: "3. Information Sharing",
            content:
              "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.",
          },
          {
            title: "4. Data Security",
            content:
              "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
          },
          {
            title: "5. Cookies",
            content:
              "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser.",
          },
          {
            title: "6. Contact Us",
            content:
              "If you have any questions about this Privacy Policy, please contact us through our Discord server or support channels.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        sections: [
          {
            title: "1. What Are Cookies",
            content:
              "Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.",
          },
          {
            title: "2. Types of Cookies We Use",
            content:
              "We use essential cookies for basic website functionality, analytics cookies to understand how visitors interact with our website, and preference cookies to remember your settings and choices.",
          },
          {
            title: "3. Managing Cookies",
            content:
              "You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.",
          },
          {
            title: "4. Third-Party Cookies",
            content:
              "We may use third-party services that set cookies on our website for analytics and advertising purposes. These third parties have their own privacy policies.",
          },
          {
            title: "5. Updates to This Policy",
            content:
              "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.",
          },
        ],
      },
    };

    const currentContent = content[type as keyof typeof content];

    return (
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            <p className="text-lg text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-8">
              {currentContent.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Have questions about our {currentContent.title.toLowerCase()}?
            </p>
            <a
              href="https://discord.gg/rexhost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderSupportPage = () => (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-gray-400">
            Get help with your RexNodes™ hosting services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-all">
            <MessageCircle className="h-12 w-12 text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Discord Support
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Join our Discord community for real-time support, updates, and to
              connect with other users.
            </p>
            <a
              href="https://discord.gg/rexhost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Join Discord
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 transition-all">
            <Settings className="h-12 w-12 text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Control Panel
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Access your server management panel to configure your hosting
              services and monitor performance.
            </p>
            <a
              href="https://panel5.benmc.dpdns.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <ExternalLink className="h-5 w-5" />
              Open Panel
            </a>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                How do I get started with free hosting?
              </h4>
              <p className="text-gray-400">
                Simply join our Discord server and follow the setup
                instructions. Our free plans are available via invite plans.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                What do you support?
              </h4>
              <p className="text-gray-400">
                We support Minecraft server networks and personal VPSs. Check
                our Discord for the full list of supported software.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                How does the invite rewards system work?
              </h4>
              <p className="text-gray-400">
                Invite friends to our Discord server and earn better hosting
                plans. The more people you invite, the better resources you
                unlock.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Is there really no catch with free hosting?
              </h4>
              <p className="text-gray-400">
                Our free hosting is genuinely free with no hidden costs. We're
                supported by our paid plans and community contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <footer className="glass-card rounded-t-3xl mx-4 mb-2 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RN</span>
              </div>
              <span className="quirky-font text-lg text-primary">REXNODES</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Free hosting platform offering unbeatable performance and pricing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setCurrentPage("pricing")}
                  className="hover:text-foreground cursor-pointer"
                >
                  Paid VPS Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("pricing")}
                  className="hover:text-foreground cursor-pointer"
                >
                  Free VPS Rewards
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Game Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Bot Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setCurrentPage("features")}
                  className="hover:text-foreground cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("support")}
                  className="hover:text-foreground cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("tos")}
                  className="hover:text-foreground cursor-pointer"
                >
                  Legal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <a
              href="https://discord.gg/rexhost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-xl hover-glow"
            >
              Join Discord
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 RexNodes™. All rights reserved. • Made with ❤️ for the
          community
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {renderNavigation()}
      {currentPage === "home" && renderHomePage()}
      {currentPage === "features" && renderHomePage()}
      {currentPage === "pricing" && renderPricingPage()}
      {currentPage === "support" && renderSupportPage()}
      {currentPage === "tos" && renderLegalPage("tos")}
      {currentPage === "privacy" && renderLegalPage("privacy")}
      {currentPage === "cookies" && renderLegalPage("cookies")}

      {renderFooter()}
    </div>
  );
}

export default App;
