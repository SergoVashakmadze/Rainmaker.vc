import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, TrendingUp, Users, Globe, Building, Lightbulb, Award, CheckCircle, BarChart3, Network, DollarSign, Eye, Brain, Handshake, Scale, ChevronRight, Star, Shield, Coins, TreePine, Briefcase, Lock } from 'lucide-react';

// Floating Elements Component - Purple Theme
const FloatingElements: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large violet circle - top left */}
    <div
      className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-2 border-violet-500/40 float-elegant"
      style={{ animationDelay: '0s' }}
    />

    {/* Medium purple circle - top right */}
    <div
      className="absolute top-40 -right-10 w-60 h-60 rounded-full border-2 border-purple-500/45 float-medium"
      style={{ animationDelay: '2s' }}
    />

    {/* Small fuchsia circle - middle left */}
    <div
      className="absolute top-1/2 left-10 w-40 h-40 rounded-full border-2 border-fuchsia-500/40 float-fast"
      style={{ animationDelay: '1s' }}
    />

    {/* Rotating ring - center right */}
    <div
      className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full border border-violet-400/25 rotate-slow"
    />

    {/* Small floating dots - VIBRANT */}
    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-violet-400/60 float-fast" style={{ animationDelay: '0.5s' }} />
    <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-purple-400/50 float-elegant" style={{ animationDelay: '1.5s' }} />
    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-fuchsia-400/55 float-medium" style={{ animationDelay: '2.5s' }} />
    <div className="absolute top-[35%] left-[8%] w-2 h-2 rounded-full bg-indigo-400/50 float-elegant" style={{ animationDelay: '0.8s' }} />
    <div className="absolute bottom-[40%] right-[10%] w-3 h-3 rounded-full bg-violet-300/55 float-fast" style={{ animationDelay: '1.8s' }} />
  </div>
);

// Animated Lines Component - Purple Theme
const AnimatedLines: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Horizontal wave line - top */}
    <svg className="absolute top-20 left-0 w-full h-20 opacity-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,10 Q250,30 500,10 T1000,10 T1500,10 T2000,10"
        fill="none"
        stroke="url(#violetGradient)"
        strokeWidth="1"
        className="animate-shimmer"
      />
    </svg>

    {/* Diagonal line - bottom right */}
    <svg className="absolute bottom-40 right-0 w-96 h-96 opacity-10" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="purpleDiagonal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" stopOpacity="0" />
          <stop offset="50%" stopColor="#9333EA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="100" x2="100" y2="0" stroke="url(#purpleDiagonal)" strokeWidth="0.5" />
    </svg>

    {/* Curved line - left side */}
    <svg className="absolute top-1/3 left-0 w-40 h-80 opacity-15" viewBox="0 0 50 100">
      <defs>
        <linearGradient id="fuchsiaCurve" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0" />
          <stop offset="50%" stopColor="#D946EF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M50,0 Q0,50 50,100"
        fill="none"
        stroke="url(#fuchsiaCurve)"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const RainmakerVC: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <div className="min-h-screen text-white relative">
      <Helmet>
        <title>Rainmaker VC - Investing in Innovative, Disruptive & Scalable Technologies</title>
        <meta name="title" content="Rainmaker VC - Investing in Innovative, Disruptive & Scalable Technologies" />
        <meta name="description" content="Rainmaker VC is a venture capital investment platform discovering and investing in the most promising technologies. Venture Capital, Digital Assets, Tokenization, and more." />
        <meta property="og:title" content="Rainmaker VC - Investing in Innovative, Disruptive & Scalable Technologies" />
        <meta property="og:description" content="Rainmaker VC is a venture capital investment platform discovering and investing in the most promising technologies." />
        <meta property="og:site_name" content="Rainmaker VC" />
        <meta property="twitter:title" content="Rainmaker VC - Investing in Innovative, Disruptive & Scalable Technologies" />
        <meta property="twitter:description" content="Rainmaker VC is a venture capital investment platform discovering and investing in the most promising technologies." />
      </Helmet>

      {/* Hero Section - Animated Purple Theme */}
      <motion.section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden hero-gradient-bg"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 elegant-grid" />
        <div className="absolute inset-0 diamond-pattern" />

        {/* Multi-color Orbs - Vibrant Violet/Purple/Fuchsia Theme */}
        <div className="absolute top-0 left-[15%] w-[600px] h-[600px] bg-[#8B5CF6] orb-hero" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#9333EA] orb-hero" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-[#D946EF] orb-hero" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[25%] w-[350px] h-[350px] bg-[#A855F7] orb-hero" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[30%] right-[5%] w-[400px] h-[400px] bg-[#C4B5FD] orb-hero" style={{ animationDelay: '4s' }} />

        {/* Floating Elements */}
        <FloatingElements />

        {/* Animated Lines */}
        <AnimatedLines />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0A1F]/80" />

        <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-violet rounded-full px-6 py-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-purple absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-violet-300 text-sm font-medium tracking-wide">Rainmaker Partners</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Investing in</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-300 drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                  Innovative, Disruptive
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">& Scalable Technologies</span>
              </motion.h1>

              {/* Animated Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                <span>Discovering and </span>
                <span className="gradient-text-animated-violet font-bold">Investing</span>
                <span> in the Most </span>
                <span className="gradient-text-animated-purple font-bold">Promising</span>
                <span> Technologies</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <a href="mailto:info@rainmaker.vc" className="group relative bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/40 hover:shadow-purple-500/50 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Get In Touch
                  </span>
                </a>
                <a href="mailto:info@rainmaker.vc" className="glass hover:bg-white/15 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/20 hover:border-violet-400/50 hover:scale-105">
                  <Eye className="w-5 h-5" />
                  Investment Opportunities
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-violet-400" />
                  <span>Global Investors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span>Curated Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-fuchsia-400" />
                  <span>AI-Powered Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                  <span>Since 2015</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-sm font-medium text-gray-400">Scroll to explore</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#8B5CF6]/60 flex justify-center pt-2 shadow-lg shadow-[#8B5CF6]/20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#A78BFA]"
            />
          </div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0A1F] to-transparent" />
      </motion.section>

      {/* Investment Philosophy */}
      <section className="py-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              <span>Deep Technology Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-fuchsia-400" />
              <span>Proven Track Record</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Technology Revolution</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-[#0F0A1F] to-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Investment Focus Areas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We dedicate capital to promising startups and investments with strong growth potential across diverse asset classes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Venture Capital",
                  description: "Funds allocated to early-stage businesses with strong growth prospects. We identify and back exceptional founders building transformative companies.",
                  gradient: "from-violet-500 to-purple-500"
                },
                {
                  icon: Coins,
                  title: "Digital Assets",
                  description: "Strategic investments in blockchain technology, cryptocurrencies, and digital asset infrastructure powering the next generation of finance.",
                  gradient: "from-purple-500 to-fuchsia-500"
                },
                {
                  icon: Lock,
                  title: "Tokenization",
                  description: "Investing in platforms and technologies enabling the tokenization of real-world assets, unlocking liquidity and democratizing access.",
                  gradient: "from-fuchsia-500 to-pink-500"
                },
                {
                  icon: BarChart3,
                  title: "Hedge Funds",
                  description: "Alternative investment structures allowing investments across stocks, derivatives, currencies, and real estate with sophisticated risk management.",
                  gradient: "from-indigo-500 to-violet-500"
                },
                {
                  icon: Briefcase,
                  title: "Private Debt",
                  description: "Corporate debt investments neither issued on open markets nor financed through traditional banking, offering attractive risk-adjusted returns.",
                  gradient: "from-violet-500 to-indigo-500"
                },
                {
                  icon: TreePine,
                  title: "Natural Resources",
                  description: "Investments in forestry, water, metals, agriculture, and renewable energy development for sustainable long-term value creation.",
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-violet-500/30 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-violet-900/20 to-purple-900/20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Investment Philosophy</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We partner with visionary founders who are building technologies that have the potential to fundamentally change how the world works
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation-First",
                  description: "We invest in companies pushing the boundaries of what's possible, leveraging breakthrough technologies and novel approaches to solve meaningful problems at scale.",
                  gradient: "from-violet-500 to-purple-500"
                },
                {
                  icon: Scale,
                  title: "Disruptive Potential",
                  description: "We seek businesses that challenge incumbents and create new market categories through superior products, business models, or go-to-market strategies.",
                  gradient: "from-purple-500 to-fuchsia-500"
                },
                {
                  icon: TrendingUp,
                  title: "Scalability-Driven",
                  description: "We focus on ventures with capital-efficient unit economics, strong network effects, and the ability to rapidly expand across markets and customer segments.",
                  gradient: "from-fuchsia-500 to-pink-500"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-violet-500/30 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What We Look For</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have specific criteria for the companies and founders we back
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Exceptional Founders",
                  points: [
                    "Obsessive problem-solvers with deep domain expertise",
                    "Proven ability to attract and retain world-class talent",
                    "Strong technical or go-to-market backgrounds",
                    "Resilience and adaptability through market cycles"
                  ]
                },
                {
                  icon: Target,
                  title: "Large Market Opportunity",
                  points: [
                    "Addressable markets of $1B+ with clear expansion paths",
                    "Secular tailwinds driving long-term growth",
                    "Opportunity to create or dominate new categories",
                    "Global scalability with limited geographic constraints"
                  ]
                },
                {
                  icon: Brain,
                  title: "Defensible Technology",
                  points: [
                    "Proprietary technology with 10x better performance",
                    "Network effects, data advantages, or switching costs",
                    "Patent protection or unique data/IP assets",
                    "Technical barriers that prevent easy replication"
                  ]
                },
                {
                  icon: DollarSign,
                  title: "Strong Unit Economics",
                  points: [
                    "Clear path to profitability with improving margins",
                    "Capital-efficient customer acquisition strategies",
                    "High lifetime value relative to acquisition cost (LTV/CAC > 3x)",
                    "Demonstrated early traction and revenue momentum"
                  ]
                }
              ].map((criteria, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <criteria.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{criteria.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {criteria.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value We Provide */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How We Support Our Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're hands-on partners who roll up our sleeves to help founders navigate critical challenges and capture opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Network,
                  title: "Network Access",
                  description: "Introductions to customers, partners, and follow-on investors across our extensive global network"
                },
                {
                  icon: Users,
                  title: "Talent Acquisition",
                  description: "Help recruiting executive leadership and building world-class teams through our talent network"
                },
                {
                  icon: Handshake,
                  title: "Go-to-Market",
                  description: "Strategic support on pricing, positioning, channel strategy, and customer acquisition"
                },
                {
                  icon: Globe,
                  title: "Global Expansion",
                  description: "Guidance on international market entry, local partnerships, and cross-border operations"
                },
                {
                  icon: DollarSign,
                  title: "Follow-On Capital",
                  description: "Continued funding in subsequent rounds and facilitation of syndicate partnerships"
                },
                {
                  icon: Shield,
                  title: "Strategic Guidance",
                  description: "Board-level advice on strategy, product roadmap, fundraising, and exit opportunities"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Rainmaker */}
      <section className="py-20 bg-gradient-to-br from-violet-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Rainmaker</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At the forefront of the technology revolution
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Globe,
                  label: "Global Investors",
                  description: "Access to worldwide capital",
                  color: "text-violet-400"
                },
                {
                  icon: Target,
                  label: "Curated Deals",
                  description: "Vetted investment opportunities",
                  color: "text-purple-400"
                },
                {
                  icon: Brain,
                  label: "AI-Powered",
                  description: "Smart deal-making platform",
                  color: "text-fuchsia-400"
                },
                {
                  icon: Award,
                  label: "Since 2015",
                  description: "Proven track record",
                  color: "text-indigo-400"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4">
                    <div className={`w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-violet-900/40 via-purple-900/40 to-fuchsia-900/40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA4MCAwIEwgMCAwIDAgODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              If you are a potential <span className="text-violet-400 font-semibold">Investor</span>, <span className="text-purple-400 font-semibold">User</span>, or <span className="text-fuchsia-400 font-semibold">Technology Partner</span> or have relevant skills, knowledge and experience and want to join our team <span className="text-white font-semibold">please get in touch</span>.
            </p>
            <p className="text-gray-400 mb-12">
              We're working hard to put the finishing touches onto Rainmaker VC. Things are going well and we should be ready to help you with Rainmaker VC very soon. If you would like us to contact you when we're ready, just give us your details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:info@rainmaker.vc" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20">
                <Rocket className="w-5 h-5" />
                Get In Touch
              </a>
              <a href="mailto:info@rainmaker.vc" className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Join Our Team
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-violet-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-fuchsia-400" />
                <span>Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RainmakerVC;
