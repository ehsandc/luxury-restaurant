'use client'

import { motion } from 'framer-motion'
import { Brain, Camera, Sparkles, ChefHat } from 'lucide-react'

export default function AIFeatures() {
  const features = [
    {
      icon: <Brain size={40} />,
      title: 'AI Sommelier',
      description: 'Get personalized wine and beverage recommendations based on your taste preferences and menu choices',
    },
    {
      icon: <Camera size={40} />,
      title: 'Visual Menu Recognition',
      description: 'Point your camera at any dish to get instant nutritional information, ingredients, and pairing suggestions',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Smart Recommendations',
      description: 'Our AI learns your preferences and dietary restrictions to suggest the perfect dishes for you',
    },
    {
      icon: <ChefHat size={40} />,
      title: 'Virtual Chef Assistant',
      description: 'Chat with our AI chef to customize dishes, ask about ingredients, or get cooking inspiration',
    },
  ]

  return (
    <section id="ai-features" className="py-24 bg-gradient-to-b from-black via-gold-950/5 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gradient">AI-Powered Excellence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the cutting edge of culinary technology with our advanced AI features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-8 hover:border-gold-400 transition-all group"
            >
              <div className="text-gold-400 mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block rounded-full px-8 py-4">
            <p className="text-gold-400 font-medium">
              ✨ Powered by GPT-4 & Advanced Computer Vision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
