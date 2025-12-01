'use client'

import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import AIFeatures from '@/components/AIFeatures'
import Gallery from '@/components/Gallery'
import Reservations from '@/components/Reservations'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import AIChatbot from '@/components/AIChatbot'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Menu />
      <AIFeatures />
      <Gallery />
      <About />
      <Reservations />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  )
}
