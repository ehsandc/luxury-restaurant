'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = ['appetizers', 'mains', 'desserts', 'beverages']

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Carpaccio',
        description: 'Thinly sliced wagyu beef with black truffle shavings, aged parmesan, and arugula',
        price: '$42',
        ai: 'AI Recommended for meat lovers',
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters with spinach, pernod, and breadcrumbs',
        price: '$38',
        ai: 'Pairs perfectly with Champagne',
      },
      {
        name: 'Foie Gras Terrine',
        description: 'Duck foie gras with fig compote and brioche toast',
        price: '$45',
        ai: 'Chef\'s special recommendation',
      },
    ],
    mains: [
      {
        name: 'Wagyu Ribeye',
        description: 'A5 Japanese wagyu with truffle butter, seasonal vegetables',
        price: '$185',
        ai: 'Most popular dish',
      },
      {
        name: 'Mediterranean Seabass',
        description: 'Pan-seared with lemon butter sauce, capers, and herb risotto',
        price: '$68',
        ai: 'Light and healthy option',
      },
      {
        name: 'Duck à l\'Orange',
        description: 'Roasted duck breast with orange gastrique and dauphinoise potatoes',
        price: '$72',
        ai: 'Classic French excellence',
      },
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate soufflé with vanilla bean ice cream',
        price: '$24',
        ai: 'Best paired with espresso',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar',
        price: '$22',
        ai: 'Traditional favorite',
      },
      {
        name: 'Tarte Tatin',
        description: 'Caramelized apple tart with crème fraîche',
        price: '$26',
        ai: 'Perfect for sharing',
      },
    ],
    beverages: [
      {
        name: 'Château Margaux 2015',
        description: 'Premier Grand Cru Classé, Bordeaux',
        price: '$850',
        ai: 'Pairs with Wagyu',
      },
      {
        name: 'Dom Pérignon 2012',
        description: 'Vintage Champagne, France',
        price: '$425',
        ai: 'Celebration choice',
      },
      {
        name: 'Signature Cocktails',
        description: 'Handcrafted by our mixologists',
        price: '$22',
        ai: 'Try the Gold Rush',
      },
    ],
  }

  return (
    <section id="menu" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gradient">Exquisite Menu</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Curated by our Michelin-starred chefs and enhanced by AI recommendations
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold capitalize transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black'
                  : 'glass-effect text-white hover:border-gold-400'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:border-gold-400 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-semibold text-white">
                  {item.name}
                </h3>
                <span className="text-gold-400 font-bold text-xl">{item.price}</span>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-gold-400 text-sm">
                <Sparkles size={16} />
                <span>{item.ai}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/50 transition-all"
          >
            Download Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
