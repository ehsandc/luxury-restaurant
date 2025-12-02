'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'AI Features', href: '#ai-features' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
      style={{ transition: 'background-color 0.3s ease, padding 0.3s ease' }}
    >
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between w-full">
          <Link href="#home">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-serif font-bold text-gradient gold-glow cursor-pointer"
            >
              Lumière
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.1, color: '#d4a854' }}
                  className="text-white/90 hover:text-gold-400 transition-colors cursor-pointer font-medium"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold-400 z-50 relative p-2 hover:bg-gold-400/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-white/90 hover:text-gold-400 transition-colors"
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
