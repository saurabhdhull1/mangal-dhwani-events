import React from 'react'
import Carousel from './Carousel'
import { useBooking } from './BookingModalContext'
import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Hero() {
  const { openModal } = useBooking()
  const heroRef = useScrollAnimation({ animation: 'fade-in-up' })
  
  return (
    <section id="home" className="relative" ref={heroRef}>
      <div className="h-96 md:h-[520px] w-full overflow-hidden relative rounded-b-lg">
        <Carousel className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 flex flex-col items-start justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Mangal Dhwani Events</h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-100">India’s Leading Shehnai & Instrumental Music Company</p>
          <p className="mt-6 text-sm sm:text-base text-gray-200 italic">Experience Divine Melodies at Life’s Celebrations</p>
          <div className="mt-6 flex space-x-3">
            <button onClick={openModal} className="px-5 py-2 bg-gold text-white font-semibold rounded shadow">Book Now</button>
            <button onClick={openModal} className="px-5 py-2 bg-white/10 text-white border border-white/20 rounded">Contact Us</button>
          </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-end p-4">
          <div className="bg-black/40 text-xs text-white/80 rounded px-2 py-1">Live music • Authentic</div>
        </div>
      </div>
    </section>
  )
}

