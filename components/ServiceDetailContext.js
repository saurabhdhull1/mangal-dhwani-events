import { createContext, useContext, useState } from 'react'

const ServiceDetailContext = createContext(null)

export function useServiceDetail(){
  return useContext(ServiceDetailContext)
}

const serviceDetails = {
  shehnai: {
    id: 'shehnai',
    title: 'Shehnai & Classical Instrumental for Wedding Ceremonies',
    description: 'Traditional shehnai & classical accompaniment for rituals.',
    fullContent: 'Experience the divine sound of shehnai, the most auspicious instrument in Indian weddings. Our expert shehnai players bring centuries-old traditions to your special moments, creating an atmosphere of spiritual and cultural richness. Perfect for wedding ceremonies, processions, and ritual moments.',
    price: 'Starting from ₹15,000',
    duration: '2-4 hours',
    includes: ['Expert Shehnai player', 'Tabla accompanist', 'Personalized music selection', 'Sound setup'],
    image: 'Shehnai Performance'
  },
  fusion: {
    id: 'fusion',
    title: 'Fusion Bands for Receptions & Corporate Events',
    description: 'Contemporary arrangements blending classical & modern sounds.',
    fullContent: 'Blend tradition with modernity. Our fusion bands combine classical Indian instruments with contemporary sounds, creating an unforgettable entertainment experience. Ideal for receptions, cocktail hours, and corporate gatherings where you want to celebrate Indian heritage with modern flair.',
    price: 'Starting from ₹25,000',
    duration: '3-4 hours',
    includes: ['Band of 4-6 musicians', 'Mix of classical & modern', 'Sound system', 'MC services (optional)'],
    image: 'Fusion Band Performance'
  },
  celebrity: {
    id: 'celebrity',
    title: 'Celebrity Artists & Event Anchors',
    description: 'Curated appearances by acclaimed artists and anchors.',
    fullContent: 'Bring renowned artists and professional anchors to your event. Our network includes award-winning musicians and celebrated performers who can customize their performance for your specific event requirements and audience preferences.',
    price: 'Custom pricing',
    duration: 'Flexible',
    includes: ['Celebrity artist of your choice', 'Professional MC/Anchor', 'Sound & lighting setup', 'Customized performance'],
    image: 'Celebrity Performance'
  },
  customizable: {
    id: 'customizable',
    title: 'Customizable Musical Groups',
    description: 'Programs for cultural, religious, government and corporate functions.',
    fullContent: 'We specialize in creating bespoke musical arrangements for any event type. From intimate cultural programs to large government functions, our team designs the perfect musical experience tailored to your venue, audience, and objectives.',
    price: 'Starting from ₹10,000',
    duration: 'Customizable',
    includes: ['Personalized music selection', 'Flexible group size', 'Multiple genres available', 'Event coordination'],
    image: 'Customized Performance'
  },
  sitar: {
    id: 'sitar',
    title: 'Solo Sitar Recitals & Classical Performances',
    description: 'Meditative and enchanting classical sitar performances.',
    fullContent: 'Immerse your guests in the mesmerizing world of classical sitar. Our master sitar players perform Hindustani classical ragas that create a profound spiritual ambiance, perfect for cultural evenings, intimate gatherings, and high-profile events seeking authentic Indian classical music.',
    price: 'Starting from ₹12,000',
    duration: '1-3 hours',
    includes: ['Master Sitar player', 'Tabla accompanist', 'Classical raga selection', 'Sound system setup'],
    image: 'Sitar Performance'
  },
  ghazals: {
    id: 'ghazals',
    title: 'Ghazal Nights & Sufi Music',
    description: 'Soulful ghazal and sufi musical performances.',
    fullContent: 'Experience the elegance and emotional depth of classical ghazals. Our accomplished ghazal singers and musicians transport audiences through romantic verses and spiritual melodies, creating an intimate and culturally rich atmosphere perfect for cultural events and evening soirees.',
    price: 'Starting from ₹18,000',
    duration: '2-3 hours',
    includes: ['Ghazal vocalist', 'Harmonium & percussion', 'Curated song selection', 'Professional sound setup'],
    image: 'Ghazal Performance'
  },
  folk: {
    id: 'folk',
    title: 'Regional Folk & Tribal Music Performances',
    description: 'Authentic folk performances from across India.',
    fullContent: 'Celebrate India's rich regional heritage with authentic folk music and dance performances. From Rajasthani folk to Bhangra, our artists bring vibrant regional traditions to your event, creating an energetic and culturally immersive experience for your guests.',
    price: 'Starting from ₹14,000',
    duration: '2-4 hours',
    includes: ['Folk performers (dancers & musicians)', 'Authentic costumes & props', 'Regional music ensemble', 'Audience engagement'],
    image: 'Folk Performance'
  },
  devotional: {
    id: 'devotional',
    title: 'Devotional & Bhajan Performances',
    description: 'Sacred devotional music for spiritual occasions.',
    fullContent: 'Enhance your religious ceremonies and spiritual gatherings with devotional bhajans and kirtans. Our trained vocalists and musicians perform traditional devotional music, creating a sacred and peaceful atmosphere for weddings, pujas, and spiritual events.',
    price: 'Starting from ₹8,000',
    duration: '1-2 hours',
    includes: ['Devotional vocalist', 'Traditional instruments', 'Bhajan & kirtan repertoire', 'Audience participation'],
    image: 'Devotional Performance'
  }
}

export function ServiceDetailProvider({children}){
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  function openDetail(serviceId){
    setCurrent(serviceDetails[serviceId] || null)
    setOpen(true)
  }

  function closeDetail(){
    setOpen(false)
  }

  return (
    <ServiceDetailContext.Provider value={{open, current, openDetail, closeDetail}}>
      {children}
      {open && current && <ServiceDetailModal service={current} onClose={closeDetail} />}
    </ServiceDetailContext.Provider>
  )
}

function ServiceDetailModal({service, onClose}){
  const { openDetail } = useServiceDetail()
  
  const relatedServices = Object.values(serviceDetails).filter(s => s.id !== service.id)
  const serviceImageMap = {
    shehnai: 'https://images.unsplash.com/photo-1506152983158-68f4a7b88d82?auto=format&fit=crop&w=1200&q=60',
    fusion: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=60',
    celebrity: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60',
    customizable: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=60',
    sitar: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1200&q=60',
    ghazals: 'https://images.unsplash.com/photo-1529516549735-5f6770b5a7b1?auto=format&fit=crop&w=1200&q=60',
    folk: 'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1200&q=60',
    devotional: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1200&q=60'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full m-4 shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">&times;</button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2">
            <img
              src={serviceImageMap[service.id] || 'https://images.unsplash.com/photo-1506152983158-68f4a7b88d82?auto=format&fit=crop&w=1200&q=60'}
              alt={service.title}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{service.fullContent}</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-600 dark:text-gray-400">Price</div>
                <div className="font-semibold">{service.price}</div>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-600 dark:text-gray-400">Duration</div>
                <div className="font-semibold">{service.duration}</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">Includes:</h3>
              <ul className="mt-2 space-y-2">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={onClose} className="mt-6 px-6 py-2 bg-deep text-white rounded">Close</button>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-6 text-party-pink">Related Services</h3>
            <div className="space-y-5">
              {relatedServices.map(s => (
                <div key={s.id} onClick={() => openDetail(s.id)} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-pink-50 dark:hover:bg-gray-700 transition bg-gray-50 dark:bg-gray-800 mb-2">
                  <div className="font-medium text-sm">{s.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">{s.description}</div>
                  <div className="text-xs text-party-pink font-semibold mt-3">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
