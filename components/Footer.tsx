'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram size={24} />, href: '#' },
    { icon: <Facebook size={24} />, href: '#' },
    { icon: <Twitter size={24} />, href: '#' },
    { icon: <Youtube size={24} />, href: '#' },
  ]

  return (
    <footer className="bg-black border-t border-gold-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-gradient mb-4">Lumière</h3>
            <p className="text-white/70">
              Where culinary art meets artificial intelligence. Experience the future of fine dining.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-white/70 hover:text-gold-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-white/70 hover:text-gold-400 transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-gold-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-white/70">
              <li>Monday: Closed</li>
              <li>Tue-Thu: 5:00 PM - 10:00 PM</li>
              <li>Fri-Sat: 5:00 PM - 11:00 PM</li>
              <li>Sunday: 5:00 PM - 9:00 PM</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-white/70 text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-sm font-semibold rounded-lg"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Lumière Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-gold-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <span className="text-gold-400 text-sm">✨ AI-Enhanced Dining Experience</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
