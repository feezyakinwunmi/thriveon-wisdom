// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Shield, Brain, Users, TrendingUp, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
      
      {/* Hero Section */}
       <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutbg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-amber-900/70"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-white text-sm font-semibold">About Us</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Empowering{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                individuals and organizations
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-12"
            >
              Welcome to ThriveOn – your ultimate destination for small business solutions, 
              entrepreneurial guidance, and impactful non-profit initiatives. We are committed 
              to empowering individuals and organizations across the globe to thrive and succeed 
              in their respective endeavors.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-blue-600">Vision</span>
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  At ThriveOn, our vision is to empower our members to maximize life's possibilities 
                  in the six dimensions: physical, psychological, spiritual, financial, intellectual, 
                  and social.
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-600"></div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-amber-500">Mission</span>
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Through our mission, we aim to provide a comprehensive platform that leverages 
                  information, power, creativity, community, recognition, and accountability to 
                  transform lives and help individuals understand their life purpose, achieve their 
                  full potential, and make a positive impact on the world.
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <div className="w-16 h-16 rounded-full border-4 border-amber-500"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    



{/* Our Services Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-white">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-40 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-40 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full px-4 py-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="text-blue-800 text-sm font-semibold">What We Offer</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Comprehensive solutions tailored to your business needs
        </p>
      </motion.div>
    </div>

    {/* Services Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      
      {/* Service 1 - Business Incubation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Business Incubation</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nurturing early-stage startups with mentorship, resources, and strategic guidance to accelerate growth.
          </p>
        </div>
      </motion.div>

      {/* Service 2 - Entrepreneurial Empowerment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Entrepreneurial Empowerment</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Equipping entrepreneurs with tools, knowledge, and confidence to build successful ventures.
          </p>
        </div>
      </motion.div>

      {/* Service 3 - Non-Profit Advocacy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Non-Profit Advocacy</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Supporting non-profit organizations to maximize their impact and reach more communities.
          </p>
        </div>
      </motion.div>

      {/* Service 4 - Startup Support */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Support</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            End-to-end support for startups from ideation to market entry and scaling.
          </p>
        </div>
      </motion.div>

      {/* Service 5 - Social Entrepreneurship Advocacy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Social Entrepreneurship Advocacy</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Promoting business models that create positive social and environmental impact.
          </p>
        </div>
      </motion.div>

      {/* Service 6 - CSR Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">CSR Initiatives</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Helping businesses develop meaningful corporate social responsibility programs.
          </p>
        </div>
      </motion.div>

      {/* Service 7 - Leadership Development */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Development</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Cultivating effective leaders who inspire teams and drive organizational success.
          </p>
        </div>
      </motion.div>

      {/* Service 8 - Business Innovation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Business Innovation</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Driving innovation through creative problem-solving and cutting-edge strategies.
          </p>
        </div>
      </motion.div>
    </div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-center mt-12"
    >
      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
        Learn More About Our Services
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </motion.div>
  </div>
</section>




{/* Business Summits Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full px-4 py-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        <span className="text-blue-800 text-sm font-semibold">Join Our Community</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Business <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Summits</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Participate in our business summits to gain valuable insights, network with industry experts, 
        and explore new opportunities for growth and collaboration.
      </p>
    </motion.div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      
      {/* Card 1 - Access to Grants and Funding */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Access to Grants and Funding</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            Unlock access to grants and funding opportunities through our platform, empowering you to 
            fuel your entrepreneurial ventures and non-profit initiatives.
          </p>
          <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg w-full group-hover:from-blue-700 group-hover:to-blue-800">
            Join ThriveOn
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Card 2 - Training Programs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Training Programs</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            Enroll in our comprehensive training programs designed to enhance your entrepreneurial skills, 
            business acumen, and leadership capabilities.
          </p>
          <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg w-full group-hover:from-blue-700 group-hover:to-blue-800">
            Join ThriveOn
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Card 3 - Networking */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Networking</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            Connect with like-minded individuals, mentors, and industry leaders through our networking 
            events and community forums, fostering meaningful relationships and collaborations.
          </p>
          <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg w-full group-hover:from-blue-700 group-hover:to-blue-800">
            Join ThriveOn
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Card 4 - Business Summits (Main) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Business Summits</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            Participate in our business summits to gain valuable insights, network with industry experts, 
            and explore new opportunities for growth and collaboration.
          </p>
          <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg w-full">
            Join ThriveOn
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>

    {/* Bottom Decorative Line */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center"
    >
      <div className="flex gap-2">
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
      </div>
    </motion.div>
  </div>
</section>
      


{/* Who Can Become a Member Section */}
<section className="relative py-20 md:py-28 overflow-hidden bg-white">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full px-4 py-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span className="text-blue-800 text-sm font-semibold">Join Our Community</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Who Can Become a{' '}
        <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Member?</span>
      </h2>
      <p className="text-gray-600 text-lg">
        ThriveOn welcomes everyone passionate about growth, innovation, and making a difference
      </p>
    </motion.div>

    {/* Members Grid - 3 columns on desktop */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Member 1 - Aspiring Entrepreneurs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">01</span>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Aspiring Entrepreneurs</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Whether you're just starting your entrepreneurial journey or looking to scale your existing business, 
            ThriveOn provides valuable resources, guidance, and support to help you succeed.
          </p>
        </div>
      </motion.div>

      {/* Member 2 - Established Entrepreneurs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">02</span>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Established Entrepreneurs</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Experienced entrepreneurs seeking to expand their networks, share their knowledge, and give back 
            to the community are encouraged to join ThriveOn and contribute to our vibrant ecosystem.
          </p>
        </div>
      </motion.div>

      {/* Member 3 - Business Professionals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">03</span>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Business Professionals</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Individuals working in various industries, including marketing, finance, technology, and more, 
            can benefit from ThriveOn's networking events, training programs, and access to industry experts.
          </p>
        </div>
      </motion.div>

      {/* Member 4 - Students and Educators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">04</span>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Students and Educators</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Students interested in entrepreneurship, social innovation, and leadership can gain valuable 
            knowledge and mentorship through ThriveOn's programs. Educators passionate about fostering 
            entrepreneurial skills are also welcome to join.
          </p>
        </div>
      </motion.div>

      {/* Member 5 - Community Advocates */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">05</span>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Community Advocates</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Individuals committed to social change, environmental sustainability, and community empowerment 
            are encouraged to join ThriveOn and collaborate with like-minded advocates to drive positive impact.
          </p>
        </div>
      </motion.div>

      {/* Member 6 - Leadership Enthusiasts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">06</span>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Enthusiasts</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Those interested in honing their leadership skills, connecting with experienced mentors, and 
            participating in leadership development programs will find a supportive community at ThriveOn.
          </p>
        </div>
      </motion.div>

      {/* Member 7 - Non-Profit Leaders */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">07</span>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Profit Leaders</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Leaders and volunteers of non-profit organizations dedicated to social impact and community 
            development are invited to become members of ThriveOn. We provide resources, insights, and 
            collaboration opportunities to enhance their impact.
          </p>
        </div>
      </motion.div>

      {/* Member 8 - Innovators and Creatives */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">08</span>
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Innovators and Creatives</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Innovators, creatives, and visionaries with groundbreaking ideas and projects are invited to 
            join ThriveOn to gain support, feedback, and resources to bring their visions to life.
          </p>
        </div>
      </motion.div>

      {/* Member 9 - Others */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="group"
      >
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl font-bold text-white/60">09</span>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Others</h3>
          <p className="text-blue-100 text-sm leading-relaxed">
            Regardless of background or experience level, anyone passionate about personal growth, professional 
            development, and making a difference in the world is welcome to join ThriveOn and be part of our 
            thriving community.
          </p>
        </div>
      </motion.div>
    </div>

    {/* CTA Button */}
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      href="/apply"
      transition={{ duration: 0.6, delay: 0.9 }}
      className="text-center  mt-12 "
    >
      <button className="inline-flex mt-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
        Become a Member Today
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </motion.a>

    {/* Bottom Decorative Line */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex justify-center mt-12"
    >
      <div className="flex gap-2">
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
        <div className="w-3 h-1 rounded-full bg-gray-300"></div>
      </div>
    </motion.div>
  </div>
</section>

    </main>
  );
}