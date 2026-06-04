// components/Footer.tsx
"use client";

import Link from "next/link";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {


const [newsletterEmail, setNewsletterEmail] = useState("");
const [isSubscribing, setIsSubscribing] = useState(false);

const handleNewsletterSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubscribing(true);
  
  if (!newsletterEmail || !newsletterEmail.includes('@')) {
    alert("Please enter a valid email address");
    setIsSubscribing(false);
    return;
  }
  
  const subject = encodeURIComponent("Newsletter Subscription Request");
  const body = encodeURIComponent(`
Newsletter Subscription Request
===============================

Email: ${newsletterEmail}

Please add this email to your newsletter subscription list.

---
Submitted from ThriveOn Website Footer
  `);
  
  // Open email client
  window.location.href = `mailto:info@ithriveonwisdom.com?subject=${subject}&body=${body}`;
  
  // Show confirmation message
  setTimeout(() => {
    alert("Thank you for subscribing! Please check your email client that just opened and click send to complete your subscription.");
    setNewsletterEmail("");
    setIsSubscribing(false);
  }, 500);
};

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 overflow-hidden rounded-full opacity-80"></div>
                <div className="absolute inset-[2px] bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                    <img src="/logo.jpg" alt="ThriveOn Logo" width={40} height={24} className="object-cover" />
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-white">ThriveOn</span>
                <span className="text-amber-400 text-sm block">Wisdom</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Welcome to ThriveOn — your ultimate destination for small business solutions, 
              entrepreneurial guidance, and impactful non-profit initiatives. We are committed 
              to empowering individuals and organizations across the globe to thrive and succeed 
              in their respective endeavors.
            </p>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Useful Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our Team", href: "/our-team" },
                { name: "Course", href: "/courses" },
                { name: "Gallery", href: "/gallery" },
                { name: "Custom-web-development", href: "/custom-web-development" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300 text-sm">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>1001-1551 Lycee Place Ottawa, Ontario Canada, K1G4B5</span>
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ithriveonwisdom.com" className="hover:text-amber-400 transition-colors">
                  info@ithriveonwisdom.com
                </a>
              </li>
              <li className="flex gap-3 text-gray-300 text-sm">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Monday–Friday: 9am - 6pm</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-blue-500"></span>
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-600 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2" fill="currentColor"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div>
  <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
  <form onSubmit={handleNewsletterSubmit} className="flex">
    <input 
      type="email" 
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
      placeholder="Your email"
      required
      className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 text-sm"
    />
    <button 
      type="submit"
      disabled={isSubscribing}
      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-r-lg hover:from-blue-700 hover:to-blue-800 transition-all text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
    >
      {isSubscribing ? (
        <>Sending...</>
      ) : (
        <>
          Subscribe
          <Send className="w-3 h-3" />
        </>
      )}
    </button>
  </form>
  <p className="text-gray-400 text-xs mt-2">We'll never share your email. Unsubscribe anytime.</p>
</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ThriveOnWisdom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}