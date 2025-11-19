import ServiceCard from './ServiceCard'
import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Services(){
  const titleRef = useScrollAnimation({ animation: 'fade-in-up' })
  const cardsRef = useScrollAnimation({ animation: 'scale-in' })

  return (
    <section id="services" className="py-16">
      <div className="mb-8" ref={titleRef}>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">Signature Services</h2>
        <p className="text-gray-600 dark:text-gray-400">Curated musical services for weddings, cultural programs, corporate events and state ceremonies.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={cardsRef}>
        <div className="stagger-child"><ServiceCard serviceId="shehnai" title="Shehnai & Classical Instrumental for Wedding Ceremonies" subtitle="Traditional shehnai & classical accompaniment for rituals." /></div>
        <div className="stagger-child"><ServiceCard serviceId="fusion" title="Fusion Bands for Receptions & Corporate Events" subtitle="Contemporary arrangements blending classical & modern sounds." /></div>
        <div className="stagger-child"><ServiceCard serviceId="celebrity" title="Celebrity Artists & Event Anchors" subtitle="Curated appearances by acclaimed artists and anchors." /></div>
        <div className="stagger-child"><ServiceCard serviceId="customizable" title="Customizable Musical Groups" subtitle="Programs for cultural, religious, government and corporate functions." /></div>
        <div className="stagger-child"><ServiceCard serviceId="sitar" title="Solo Sitar Recitals & Classical Performances" subtitle="Meditative and enchanting classical sitar performances." /></div>
        <div className="stagger-child"><ServiceCard serviceId="ghazals" title="Ghazal Nights & Sufi Music" subtitle="Soulful ghazal and sufi musical performances." /></div>
        <div className="stagger-child"><ServiceCard serviceId="folk" title="Regional Folk & Tribal Music Performances" subtitle="Authentic folk performances from across India." /></div>
        <div className="stagger-child"><ServiceCard serviceId="devotional" title="Devotional & Bhajan Performances" subtitle="Sacred devotional music for spiritual occasions." /></div>
      </div>
    </section>
  )
}
