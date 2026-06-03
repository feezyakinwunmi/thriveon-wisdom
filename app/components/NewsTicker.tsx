// components/NewsTicker.tsx
"use client";

import { motion } from "framer-motion";

const newsItems = [
  "🎉 ThriveOn Entrepreneur Launches New Incubation Program for 2025",
  "Build Your Dream Website with ThriveOn - Affordable, Fast, and Stunning Designs",
  "🚀 Join Our Business Summit - Networking with Industry Experts",
  "💡 Free Webinar: SEO Strategies for Small Businesses",
  "Grow Your Business with ThriveOn's Digital Marketing Services",
  "🌍 ThriveOn Expands Global Reach - New Partnerships in Canada, USA, UK",
  "🏆 Apply Now for Startup Funding - Deadline Approaching",
  "📈 Record Growth: 500+ Websites Built for Entrepreneurs",
  "🤝 Mentorship Program Now Accepting Applications"
];

export default function NewsTicker() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 py-3 shadow-lg">
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
      
      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-600 to-transparent z-10"></div>
      
      {/* Ticker content */}
      <div className="relative flex whitespace-nowrap animate-scroll">
        {/* Duplicate items for seamless loop */}
        {[...newsItems, ...newsItems].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 mx-4 text-white text-sm md:text-base font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{item}</span>
            <span className="w-4 h-4 flex items-center justify-center text-amber-400">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}