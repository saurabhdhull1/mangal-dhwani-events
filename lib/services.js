export const serviceDetails = {
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
    fullContent: 'Blend tradition with modernity. Our fusion bands combine classical Indian instruments with contemporary sounds, creating an unforgettable entertainment experience. Ideal for receptions, cocktail hours, and corporate gatherings.',
    price: 'Starting from ₹25,000',
    duration: '3-4 hours',
    includes: ['Band of 4-6 musicians', 'Mix of classical & modern', 'Sound system', 'MC services (optional)'],
    image: 'Fusion Band Performance'
  },
  celebrity: {
    id: 'celebrity',
    title: 'Celebrity Artists & Event Anchors',
    description: 'Curated appearances by acclaimed artists and anchors.',
    fullContent: 'Bring renowned artists and professional anchors to your event. Our network includes award-winning musicians and celebrated performers who can customize their performance for your event requirements.',
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
    fullContent: 'Immerse your guests in the mesmerizing world of classical sitar. Our master sitar players perform Hindustani classical ragas that create a profound spiritual ambiance, perfect for cultural evenings and high-profile events.',
    price: 'Starting from ₹12,000',
    duration: '1-3 hours',
    includes: ['Master Sitar player', 'Tabla accompanist', 'Classical raga selection', 'Sound system setup'],
    image: 'Sitar Performance'
  },
  ghazals: {
    id: 'ghazals',
    title: 'Ghazal Nights & Sufi Music',
    description: 'Soulful ghazal and sufi musical performances.',
    fullContent: 'Experience the elegance and emotional depth of classical ghazals. Our accomplished ghazal singers and musicians transport audiences through romantic verses and spiritual melodies, creating an intimate atmosphere.',
    price: 'Starting from ₹18,000',
    duration: '2-3 hours',
    includes: ['Ghazal vocalist', 'Harmonium & percussion', 'Curated song selection', 'Professional sound setup'],
    image: 'Ghazal Performance'
  },
  folk: {
    id: 'folk',
    title: 'Regional Folk & Tribal Music Performances',
    description: 'Authentic folk performances from across India.',
    fullContent: 'Celebrate regional heritage with authentic folk music and dance performances. From Rajasthani folk to Bhangra, our artists bring vibrant regional traditions to your event, creating an energetic and culturally immersive experience.',
    price: 'Starting from ₹14,000',
    duration: '2-4 hours',
    includes: ['Folk performers (dancers & musicians)', 'Authentic costumes & props', 'Regional music ensemble', 'Audience engagement'],
    image: 'Folk Performance'
  },
  devotional: {
    id: 'devotional',
    title: 'Devotional & Bhajan Performances',
    description: 'Sacred devotional music for spiritual occasions.',
    fullContent: 'Enhance your religious ceremonies and spiritual gatherings with devotional bhajans and kirtans. Our trained vocalists and musicians perform traditional devotional music, creating a sacred atmosphere for weddings and spiritual events.',
    price: 'Starting from ₹8,000',
    duration: '1-2 hours',
    includes: ['Devotional vocalist', 'Traditional instruments', 'Bhajan & kirtan repertoire', 'Audience participation'],
    image: 'Devotional Performance'
  }
}

export function getServiceById(id){
  return serviceDetails[id]
}

export function getRelatedServices(currentId){
  return Object.values(serviceDetails).filter(s => s.id !== currentId)
}
