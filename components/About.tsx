'use client'

import { motion } from 'framer-motion'
import { Award, Users, Star, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: <Award size={32} />, value: '3', label: 'Michelin Stars' },
    { icon: <Users size={32} />, value: '50+', label: 'Expert Chefs' },
    { icon: <Star size={32} />, value: '15+', label: 'Years Excellence' },
    { icon: <Clock size={32} />, value: '24/7', label: 'AI Concierge' },
  ]

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              At Lumière, we blend centuries-old culinary traditions with cutting-edge artificial 
              intelligence to create an unparalleled dining experience. Our Michelin-starred chefs 
              work in harmony with advanced AI systems to craft personalized menus that delight 
              every palate.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Founded in 2010, we've been at the forefront of the gastronomic revolution, 
              earning three Michelin stars and becoming the world's first restaurant to integrate 
              AI-powered dining recommendations.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Every dish is a masterpiece, every meal a memory, and every guest a cherished part 
              of our story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-2xl p-8 text-center hover:border-gold-400 transition-all"
                >
                  <div className="text-gold-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/5 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
