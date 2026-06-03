"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Compass } from "lucide-react";
import Hero from "./components/Hero";
import DividerShape from "./components/DividerShape";
import NewsTicker from "./components/NewsTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
     <Hero />
       {/* Divider Shape - Mounted negatively to overlap hero section */}
      <div className="relative -mt-16 md:-mt-20 z-10">
        <DividerShape />
      </div>
       {/* News Ticker - Positioned at top */}
           <div className="relative -mt-1">
        <NewsTicker />
      </div>


{/* Incubation Programme Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Left Side - Content */}
      <div className="flex-1">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to take your business to the next level?
        </h2>
        
        <p className="text-gray-600 text-md mb-8 leading-relaxed">
          Our Incubation Programme is specially curated to support a diverse array of B2B and B2B2C companies. 
          Our approach is comprehensive, offering tailored coaching to propel your vision forward. We pair you 
          with an experienced mentor, someone with more than just academic knowledge.
        </p>

        {/* Apply Button */}
        <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true }}
              href="/apply"
            >
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl mb-10">
          Apply Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
</motion.a>
        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 flex space-x-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
                <h3 className="text-md font-bold text-gray-900 mb-1">Bring your idea</h3>
                <p className="text-gray-500 text-sm">Share your vision with us</p>
          </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-5 flex space-x-4  rounded-2xl border border-amber-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900 mb-1">Make your vision clear</h3>
            <p className="text-gray-500 text-sm">Define your goals clearly</p>
            </div>
            
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 flex space-x-4  rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900 mb-1">Pair you with a mentor</h3>
              <p className="text-gray-500 text-sm">Get expert guidance</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-5 flex space-x-4  rounded-2xl border border-amber-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900 mb-1">Help you build your idea</h3>
              <p className="text-gray-500 text-sm">Launch and scale successfully</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Circular Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          {/* Animated ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-amber-500 blur-2xl opacity-30 animate-pulse"></div>
          
          {/* Circular Image Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/business.png"
              alt="Business mentorship"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative dots around circle */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Learning Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      
      {/* Left Side - Irregular Shape Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          {/* Irregular shape background blobs */}
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-amber-500/10 rounded-full blur-2xl"></div>
          
          {/* Main Irregular Shape Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Custom irregular shape using clip-path */}
            <div 
              className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white"
              style={{
                transform: "rotate(5deg)",
              }}
            >
              <Image
                src="/business.png"
                alt="Learning new things"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative smaller irregular shapes */}
            <div 
              className="absolute -top-8 -right-8 w-24 h-24 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
              style={{ transform: "rotate(15deg)" }}
            >
              <div className="flex items-center justify-center h-full text-white text-2xl">✨</div>
            </div>
            
            <div 
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg"
              style={{ transform: "rotate(-10deg)" }}
            >
              <div className="flex items-center justify-center h-full text-white text-xl">🎯</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Interested In learning something new?
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Being interested in learning something new is the first step toward growth. 
          It means opening yourself up to fresh ideas, skills, and experiences that can 
          expand your perspective and equip you for greater opportunities. Every new 
          thing you learn adds value—not just to your knowledge, but also to your 
          confidence and ability to adapt in a changing world.
        </p>

        {/* Check Courses Button */}
        <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="http://localhost:3001/custom-web-development"
            >
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
          Check Courses
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        </motion.a>

        {/* Small decorative elements */}
        <div className="flex gap-3 mt-8">
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"></div>
          <div className="w-6 h-1 rounded-full bg-gray-300"></div>
          <div className="w-3 h-1 rounded-full bg-gray-300"></div>
        </div>
      </div>
      
    </div>
  </div>
</section>




{/* Business Idea Section */}
<section className="relative py-20 md:py-28 overflow-hidden">
  {/* Background gradients */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
  
  {/* Animated floating particles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Side - Main Content */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">Limited Time Opportunity</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Do you have a Business idea, and worried about{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            getting noticed?
          </span>
        </h2>

        <div className="space-y-6 mb-8">
          {/* Highlight box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-amber-400 text-lg font-semibold mb-2">Why not try having a website that works for you</p>
            <p className="text-white/80 text-md">
              Build a website that works for you -{' '}
              <span className="text-white font-semibold">SEO Optimised, mobile friendly and High-Converting</span>
            </p>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap gap-4">
            {[
              "🚀 SEO Optimised",
              "📱 Mobile Friendly",
              "💼 High-Converting",
              "⚡ Fast Loading",
              "🎨 Modern Design",
              "🔒 Secure"
            ].map((feature, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true }}
              href="https://wa.me/15142192987"
            >
        <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4 font-bold text-gray-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl text-lg">
          Get your website now
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        </motion.a>
      </div>

      {/* Right Side - We Believe Card */}
      <div>
        <div className="relative">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          
          {/* Main Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Quote mark */}
            <div className="text-6xl text-amber-400/30 font-serif absolute top-4 right-6">"</div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-xl">🌟</span>
              </div>
              <div>
                <p className="text-amber-400 font-semibold">We believe in you</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-white/90 text-md leading-relaxed mb-8">
              At Thriveon, we firmly believe that groundbreaking ideas can emerge from anyone, anywhere. 
              Regardless of where entrepreneurs reside or their diverse backgrounds, we champion the potential 
              of every innovator.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20 flex items-center justify-center text-white text-sm">
                    👤
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm">Join 1000+ successful entrepreneurs</p>
            </div>

            {/* Book a call button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true }}
              href="https://wa.me/15142192987"
            >
            <button className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 font-semibold text-white border border-white/30 transition-all hover:scale-[1.02]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Book a call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </motion.a>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-white/60 text-sm">Websites Built</p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-white/60 text-sm">Client Satisfaction</p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-white/60 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


{/* Entrepreneur Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full px-4 py-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span className="text-blue-800 text-sm font-semibold">Empowering Entrepreneurs</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        ThriveOn <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Entrepreneur</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Your complete ecosystem for business growth and success
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1 - ThriveOn Entrepreneur */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">ThriveOn Entrepreneur</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As an entrepreneur, you wear many hats, and it can be daunting, especially if you are just starting 
            out with your innovation. It can feel overwhelming. That's where ThriveOn Entrepreneur steps in.
          </p>
          <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group-hover:text-blue-700">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card 2 - Business Summit FAQ */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">ThriveOn Business Summit FAQ</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our application process ensures that each participant brings value and leaves with even more. 
            It's not merely an event; it's the inception of your next great adventure.
          </p>
          <button className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all group-hover:text-amber-700">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card 3 - Business Incubation Program FAQ */}
      <div className="group relative md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Incubation Program FAQ</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The ThriveOn Entrepreneur Business Incubation Program is a six-month initiative designed to support 
            early-stage startups with mentorship, resources, and strategic guidance to accelerate growth.
          </p>
          <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group-hover:text-blue-700">
            Read More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Decorative tag */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            New
          </div>
        </div>
      </div>

    </div>

    {/* Bottom decorative line */}
    <div className="flex justify-center mt-16">
      <div className="flex gap-2">
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}