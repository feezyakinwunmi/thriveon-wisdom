// app/books/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Download, Eye, MapPin, ChevronRight } from "lucide-react";

const books = [
  {
    id: 1,
    title: "You Are Awesome",
    subtitle: "You Are Like God: Bible Stories Retold for Kids",
    coverImage: "/yaa.jpg",
    authors: "",
    countries: [
      { name: "Canada", link: "https://a.co/d/drkbxzV", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/eAAu4QU", flag: "🇺🇸" },
      { name: "UK", link: "https://a.co/d/eAAu4QU1", flag: "🇬🇧" }
    ]
  },
  {
    id: 2,
    title: "The Empowered Teens Daily Affirmation",
    subtitle: "Cultivating Self-Confidence, Self-Acceptance, Self-Worth and the Love of God for Teens",
    coverImage: "/teda.jpg",
    authors: "Co-authored with Nike Okeke",
    countries: [
      { name: "Canada", link: "https://a.co/d/6wGvrw7", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/aEyuUjg", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/4ZwvGs3", flag: "🇬🇧" }
    ]
  },
  {
    id: 3,
    title: "See the Bees",
    subtitle: "A Delightful Journey to a Bee Farm",
    coverImage: "/stb.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/2YKA3Er", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/fLTAvqs", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/61BFcSS", flag: "🇬🇧" }
    ]
  },
  {
    id: 4,
    title: "Ants and Termites",
    subtitle: "An Incredible World of Order",
    coverImage: "/aat.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/0wo8rxP", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/es9tcD3", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/j2ftioH", flag: "🇬🇧" }
    ]
  },
  {
    id: 5,
    title: "Rhapsody of Love",
    subtitle: "Rediscovering Your Inner Harmony Through Love and Meditation",
    coverImage: "/rol.jpg",
    authors: "",
    countries: [
      { name: "Canada", link: "https://a.co/d/aEvU3sj", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/i1wxIWp", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/5v0VWUn", flag: "🇬🇧" }
    ]
  },
  {
    id: 6,
    title: "A Visit to Aunt Ngozi",
    subtitle: "A Delightful Journey to a Bee Farm",
    coverImage: "/AVTAN.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/3ihn8gK", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/3ihn8gK", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/97ZRWbS", flag: "🇬🇧" }
    ]
  }
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-full px-4 py-2 mb-6"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm font-semibold">Our Publications</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Discover Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Books</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Inspiring reads for children, teens, and adults. Available in multiple countries.
          </motion.p>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  
                  {/* Book Cover Image Placeholder */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-600/20 to-amber-500/20 flex items-center justify-center p-8">
                    <div className="w-80 h-56 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-xl flex items-center justify-center overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        width={400}
                        height={224}
                        className="object-fit rounded-lg shadow-md"
                      />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-blue-600">
                      E-Book
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {book.subtitle}
                    </p>
                    {book.authors && (
                      <p className="text-xs text-amber-600 mb-4">
                        {book.authors}
                      </p>
                    )}
                    
                    {/* Country Links */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Available in:
                      </p>
                      <div className="flex gap-3">
                        {book.countries.map((country) => (
                          <a
                            key={country.name}
                            href={country.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-amber-50 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all group/country"
                          >
                            <span className="text-lg">{country.flag}</span>
                            <span>{country.name}</span>
                            <Download className="w-3 h-3 opacity-0 group-hover/country:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Updates on New Releases
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to receive notifications about our latest books and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-semibold hover:scale-105 transition-all">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}