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
        name: 'Beluga Caviar',
        description: 'Premium Iranian caviar served with blinis, crème fraîche, and gold leaf',
        price: '$125',
        ai: 'Ultimate luxury starter',
        image: '/images/menu/caviar.jpg',
      },
      {
        name: 'Lobster Bisque',
        description: 'Rich creamy soup with cognac, topped with fresh lobster medallions',
        price: '$38',
        ai: 'Chef\'s signature',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
      },
      {
        name: 'Seared Scallops',
        description: 'Hokkaido scallops with cauliflower purée, microgreens, and truffle oil',
        price: '$42',
        ai: 'Light and refined',
        image: '/images/menu/scallops.jpg',
      },
    ],
    mains: [
      {
        name: 'Wagyu Ribeye',
        description: 'A5 Japanese wagyu with truffle butter, seasonal vegetables',
        price: '$185',
        ai: 'Most popular dish',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
      },
      {
        name: 'Mediterranean Seabass',
        description: 'Pan-seared with lemon butter sauce, capers, and herb risotto',
        price: '$68',
        ai: 'Light and healthy option',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
      },
      {
        name: 'Duck à l\'Orange',
        description: 'Roasted duck breast with orange gastrique and dauphinoise potatoes',
        price: '$72',
        ai: 'Classic French excellence',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80',
      },
      {
        name: 'Truffle Carpaccio',
        description: 'Thinly sliced wagyu beef with black truffle shavings, aged parmesan, and arugula',
        price: '$48',
        ai: 'AI Recommended for meat lovers',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters with spinach, pernod, and breadcrumbs',
        price: '$42',
        ai: 'Pairs perfectly with Champagne',
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80',
      },
      {
        name: 'Foie Gras Special',
        description: 'Duck foie gras with fig compote and brioche toast',
        price: '$52',
        ai: 'Chef\'s special recommendation',
        image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=600&q=80',
      },
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate soufflé with vanilla bean ice cream',
        price: '$24',
        ai: 'Best paired with espresso',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar',
        price: '$22',
        ai: 'Traditional favorite',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80',
      },
      {
        name: 'Tarte Tatin',
        description: 'Caramelized apple tart with crème fraîche',
        price: '$26',
        ai: 'Perfect for sharing',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
      },
    ],
    beverages: [
      {
        name: 'Château Margaux 2015',
        description: 'Premier Grand Cru Classé, Bordeaux',
        price: '$850',
        ai: 'Pairs with Wagyu',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
      },
      {
        name: 'Dom Pérignon 2012',
        description: 'Vintage Champagne, France',
        price: '$425',
        ai: 'Celebration choice',
        image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80',
      },
      {
        name: 'Signature Cocktails',
        description: 'Handcrafted by our mixologists',
        price: '$22',
        ai: 'Try the Gold Rush',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
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
              className="glass-effect rounded-2xl overflow-hidden hover:border-gold-400 transition-all group"
            >
              {/* Image with Zoom Effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-gold-400 text-sm">
                  <Sparkles size={16} />
                  <span>{item.ai}</span>
                </div>
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
