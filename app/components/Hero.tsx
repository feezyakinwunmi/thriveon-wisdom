// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Compass } from "lucide-react";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-4 pt-34 lg:pt-36 pb-16 sm:pt-12 sm:pb-20 md:py-24 lg:py-32 rounded-br-4xl">
      <Particles />
      
      {/* Animated glowing blue ball - main background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating glowing balls - hidden on mobile, visible on tablet+ */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {/* Ball 1 - top left */}
        <motion.div
          className="absolute left-[10%] top-[15%] hidden h-16 w-16 rounded-full bg-blue-400/30 blur-xl md:block md:h-24 md:w-24"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Ball 2 - top right */}
        <motion.div
          className="absolute right-[15%] top-[25%] hidden h-12 w-12 rounded-full bg-amber-400/30 blur-lg md:block md:h-20 md:w-20"
          animate={{
            y: [0, -40, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Ball 3 - bottom left */}
        <motion.div
          className="absolute bottom-[20%] left-[20%] hidden h-20 w-20 rounded-full bg-blue-500/25 blur-xl md:block md:h-28 md:w-28"
          animate={{
            y: [0, 25, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Ball 4 - bottom right */}
        <motion.div
          className="absolute bottom-[30%] right-[10%] hidden h-14 w-14 rounded-full bg-amber-500/20 blur-lg md:block md:h-20 md:w-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Ball 5 - center right */}
        <motion.div
          className="absolute right-[5%] top-[50%] hidden h-10 w-10 rounded-full bg-blue-300/30 blur-md md:block md:h-16 md:w-16"
          animate={{
            y: [0, -35, 0],
            x: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {/* Left content */}
        <div className="max-w-2xl flex-1 text-center lg:text-left">
          <motion.h1
            className="mb-8 md:mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              ThriveOn
            </span>
            <br className="block sm:hidden" />
            <span className="relative inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
              Wisdom
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-500 to-amber-500"></span>
            </span>
          </motion.h1>

          <motion.p
            className="mb-6 text-base text-gray-600 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to ThriveOn your ultimate destination for small business
            solutions, entrepreneurial guidance, and impactful non-profit
            initiatives. We are committed to empowering individuals and
            organizations across the globe to thrive and succeed in their
            respective endeavors.
          </motion.p>

          <motion.div
            className="flex flex-row justify-center gap-3 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
            >
            <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3">
              Register
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </button>
            </motion.a>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
            >
            <button className="flex items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 sm:px-8 sm:py-3">
              Explore
              <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            </motion.a>
          </motion.div>
        </div>

        {/* Right image stack - 3 cards stacked and tilted - Responsive */}
        <div className="relative flex flex-1 justify-center mt-8 lg:mt-0">
          {/* Mobile: Smaller container */}
          <div className="relative h-[320px] w-[280px] sm:h-[380px] sm:w-[340px] md:h-[450px] md:w-[380px] lg:h-[550px] lg:w-[450px]">
            
            {/* Card 3 (back-most) - Blue card */}
            <motion.div
              className="absolute z-10 h-48 w-48 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80"
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 50, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transform: "rotate(12deg)" }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 p-2 text-white sm:gap-2">
                <div className="text-3xl sm:text-4xl md:text-5xl">💡</div>
                <p className="text-xs font-medium sm:text-sm">Innovation</p>
              </div>
            </motion.div>

            {/* Card 2 (middle) - Glass card */}
            <motion.div
              className="absolute z-20 h-52 w-52 overflow-hidden rounded-2xl shadow-xl sm:h-60 sm:w-60 md:h-68 md:w-68 lg:h-80 lg:w-80"
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 30, y: -10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                transform: "rotate(6deg)",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 p-2">
                <div className="text-4xl sm:text-5xl md:text-6xl">🚀</div>
                <p className="text-sm font-semibold text-gray-800 sm:text-base">Growth</p>
              </div>
            </motion.div>

            {/* Card 1 (front-most) - Main image card */}
            <motion.div
              className="absolute left-0 top-0 z-30 h-56 w-56 overflow-hidden rounded-2xl shadow-2xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.6 }}
              style={{ transform: "rotate(-8deg)" }}
            >
              <Image
                src="/business.png"
                alt="Business team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
                priority
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}