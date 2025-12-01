'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react'

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend/API
    alert('Reservation request submitted! Our AI concierge will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="reservations" className="py-24 bg-gradient-to-b from-black via-gold-950/5 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-gradient">Reserve Your Table</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of fine dining. Let our AI help you plan the perfect evening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-effect rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <User size={18} className="text-gold-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-gold-400" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-gold-400" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-gold-400" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <Clock size={18} className="text-gold-400" />
                  Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                >
                  <option value="">Select time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <Users size={18} className="text-gold-400" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">
                Special Requests or Dietary Restrictions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold-400 focus:outline-none text-white resize-none"
                placeholder="Let our AI help customize your experience..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/50 transition-all"
            >
              Confirm Reservation
            </motion.button>

            <p className="text-center text-white/60 text-sm">
              💫 Our AI concierge will optimize your seating and recommend the perfect menu
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
