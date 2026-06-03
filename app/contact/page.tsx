// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Contact <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Get in touch with us. We'd love to hear from you and help with any inquiries.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Info Cards */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-blue-600">Touch</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our programs, partnerships, or how we can help your business thrive? 
                  Reach out to us using any of the channels below or fill out the form.
                </p>

                {/* Location Card */}
                <div className="flex gap-5 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-500 text-sm">
                      1001-1551 Lycee Place Ottawa, Ontario. Canada, K1G4B5
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-5 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:info@ithriveonwisdom.com" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
                      info@ithriveonwisdom.com
                    </a>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="flex gap-5 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-500 text-sm">Mon-Sat: 09AM - 09PM</p>
                  </div>
                </div>

                {/* Phone (Optional - added for completeness) */}
                <div className="flex gap-5 p-5 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone (Optional)</h3>
                    <a href="tel:+1234567890" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a <span className="text-amber-500">Message</span>
              </h2>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                * Required fields. We'll get back to you within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.456789012345!2d-75.6789!3d45.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0716e4a8f8b9%3A0x9a2e5f8d3c7b4a1e!2sLycee%20Pl%2C%20Ottawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="ThriveOn Location Map"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}