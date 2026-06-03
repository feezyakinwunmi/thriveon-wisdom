// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, Phone } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Us", href: "/about", icon: Users },
      { name: "Our Team", href: "/our-team", icon: Users },
      { name: "Contact Us", href: "/contact", icon: Phone },
    ],
  },
  { name: "Courses", href: "https://learn.ithriveonwisdom.com/wp/courses/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Custom-web-development", href: "/custom-web-development" },
  { name: "Books", href: "/books" },
  // { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-blue-900/95 backdrop-blur-md shadow-lg"
            : "bg-white/10 backdrop-blur-md"
        }`}
        style={{
          background: scrolled
            ? "rgba(30, 58, 138, 0.95)"
            : "rgba(255, 255, 255, 0.15)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 overflow-hidden to-amber-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-[2px] bg-white rounded-full flex overflow-hidden items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r overflow-hidden from-blue-700 to-amber-600 bg-clip-text text-transparent">
                    <img src="/logo.jpg" alt="ThriveOn Logo" width={54} height={32} className="object-cover" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${scrolled ? "text-white" : "text-gray-800"}`}>
                  ThriveOn
                </span>
                <span className={`text-xs transition-colors duration-300 hidden sm:block ${scrolled ? "text-blue-200" : "text-gray-500"}`}>
                  Wisdom
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-white/20 inline-flex items-center gap-1 ${
                          scrolled ? "text-white hover:text-amber-300" : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-56 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50 overflow-hidden z-50"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-amber-50 transition-all duration-200"
                              >
                                <dropdownItem.icon className="h-4 w-4 text-blue-600" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-white/20 ${
                        scrolled ? "text-white hover:text-amber-300" : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Apply Here Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/apply"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
                  scrolled
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900"
                    : "bg-gradient-to-r from-blue-700 to-blue-600 text-white"
                }`}
              >
                Apply Here
                <ChevronDown className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg backdrop-blur-sm transition-colors duration-300 ${
                scrolled ? "bg-white/20" : "bg-white/20"
              }`}
            >
              {isOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${scrolled ? "text-white" : "text-gray-800"}`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${scrolled ? "text-white" : "text-gray-800"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                      <div className="py-2">
                        <div className="text-lg font-medium text-gray-800 py-2">
                          {item.name}
                        </div>
                        <div className="ml-4 space-y-2 border-l-2 border-blue-200 pl-4">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 text-base text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              <dropdownItem.icon className="h-4 w-4" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-4 text-lg font-medium text-gray-800 border-b border-gray-200 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="py-6 pb-8">
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105"
                >
                  Apply Here
                  <ChevronDown className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}