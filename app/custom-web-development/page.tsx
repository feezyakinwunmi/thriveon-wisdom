// app/custom-web-development/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle, 
  Rocket, 
  Search, 
  Smartphone, 
  Shield, 
  Users, 
  Zap, 
  ArrowRight,
  Star,
  Quote,
  Globe,
  BarChart3,
  Timer,
  Award,
  ChevronRight,
  Code,
  Layout,
  TrendingUp,
  Clock,
  DollarSign,
  Headphones,
  Target,
  Eye,
  HeartHandshake
} from "lucide-react";

export default function CustomWebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
      
      {/* Hero Section - Unique Design with Diagonal Split */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background split */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 lg:right-1/2 lg:left-0 lg:rounded-br-[100px]"></div>
        <div className="absolute inset-0 bg-white lg:left-1/2 hidden lg:block"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10 min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content - Blue side */}
            <div className="text-white py-16 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span className="text-white/90 text-sm font-semibold">Limited Time Offer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                DEVELOP YOUR
                <span className="relative inline-block mx-2">
                  WEBSITE
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-400"></span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 mb-4"
              >
                Build a website that works for you -{' '}
                <span className="font-semibold text-amber-300">SEO Optimised, Mobile Friendly & High-Converting</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-white/70 mb-8"
              >
                You have a mission. You have a message. Now, you need a website that elevates your brand, 
                attracts the right audience, and drives real results.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                href="/contact"
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="group flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:scale-105">
                  Get Started Today
                  <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
               
              </motion.a>
            </div>

            {/* Right content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1"></div>
                      <Globe className="w-4 h-4 text-white/50" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                      <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-20 bg-white/5 rounded-lg"></div>
                        <div className="h-20 bg-white/5 rounded-lg"></div>
                        <div className="h-20 bg-white/5 rounded-lg"></div>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full w-full mt-4"></div>
                      <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Websites Built", icon: Code },
              { number: "98%", label: "Client Satisfaction", icon: HeartHandshake },
              { number: "2x", label: "Traffic Increase", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Headphones },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              What We <span className="text-blue-600">Offer</span>
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive website solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Layout className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Design</h3>
                <p className="text-gray-500">Fully branded, professional website tailored to your business</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO Optimized</h3>
                <p className="text-gray-500">Get found on Google with high-ranking content and keywords</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Friendly</h3>
                <p className="text-gray-500">Looks great and works perfectly on any device</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Images - REDESIGNED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Why <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Choose Us</span>
            </motion.h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We deliver excellence with every project
            </p>
          </div>

          <div className="space-y-20">
            {/* Item 1 - SEO Driven */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/seo.jpg"
                    alt="SEO Strategy"
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-500/20"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO-driven approach</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Best-in-class SEO practices to rank your site higher on Google and drive organic traffic. 
                  We optimize every page, every image, and every piece of content to ensure you get found 
                  by the right audience.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Keyword optimization", "Meta tag optimization", "Fast loading speeds", "Mobile-first indexing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Item 2 - Lead Generation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row-reverse gap-12 items-center"
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/strategy.jpg"
                    alt="Lead Generation"
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-600/20"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic lead generation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Websites built to attract, engage, and convert visitors into paying clients. 
                  Our strategic approach ensures every element of your site works toward generating 
                  qualified leads for your business.
                </p>
                <ul className="mt-4 space-y-2">
                  {["Call-to-action optimization", "Lead capture forms", "Sales funnel integration", "Analytics tracking"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Item 3 - Fast Turnaround */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/fast.jpg"
                    alt="Fast Turnaround"
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-amber-500/20"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast turnaround time</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get your website live in days, not months, with our efficient development process. 
                  We respect your time and deliver quality results quickly without cutting corners.
                </p>
                <ul className="mt-4 space-y-2">
                  {["2-week delivery typical", "Regular progress updates", "Dedicated project manager", "Quick revision process"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Item 4 - Affordable Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row-reverse gap-12 items-center"
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/price.jpg"
                    alt="Affordable Pricing"
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable pricing</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  High-quality design and development without breaking the bank. 
                  We believe every business deserves a professional website at a fair price.
                </p>
                <ul className="mt-4 space-y-2">
                  {["No hidden fees", "Flexible payment plans", "Value-packed packages", "Free maintenance included"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bonus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl max-w-2xl mx-auto">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <p className="text-2xl font-bold mb-2">Free Domain and Hosting for One Year</p>
              <p className="text-white/90">Get free domain registration and hosting when you sign up for a full website package.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Simple <span className="text-amber-400">Process</span>
            </h2>
            <p className="text-blue-200 text-lg">Fast, transparent, and results-driven</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience", icon: Target },
              { step: "02", title: "Design & Develop", desc: "We create your custom website with SEO best practices", icon: Code },
              { step: "03", title: "Launch & Grow", desc: "We launch your site and provide ongoing support", icon: Rocket },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/3 right-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent transform translate-x-1/2"></div>
                )}
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-amber-400" />
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-200">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-200 text-lg mb-6">Your audience is searching for you. Make sure they find a website that represents your brand powerfully.</p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://wa.me/15142192987"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:scale-105"
            >
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all hover:scale-105">
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </button>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-amber-500">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Business Coach", text: "My new website has doubled my leads! The team was professional, fast, and really understood my vision.", rating: 5 },
              { name: "Michael Chen", role: "Entrepreneur", text: "Best investment I've made for my business. The SEO work alone has paid for itself many times over.", rating: 5 },
              { name: "David Williams", role: "Startup Founder", text: "From design to launch, everything was seamless. My site looks amazing and converts like crazy!", rating: 5 },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <Quote className="w-10 h-10 text-blue-400 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Claim Your Spot Now and get a website that works for you 24/7
            </p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true }}
              href="https://wa.me/15142192987"
            >
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-10 py-4 font-bold text-gray-900 shadow-xl transition-all hover:scale-105 text-lg">
              Get My Website Now
              <ChevronRight className="w-5 h-5" />
            </button>
            </motion.a>
            <p className="text-blue-200 text-sm mt-6">Limited time offer: Free domain & hosting for one year</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}