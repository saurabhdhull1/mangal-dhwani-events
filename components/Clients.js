import TestimonialCard from './TestimonialCard'
import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Clients(){
  const titleRef = useScrollAnimation({ animation: 'fade-in-up' })
  const logosRef = useScrollAnimation({ animation: 'scale-in' })
  const testimonialsRef = useScrollAnimation({ animation: 'fade-in-up' })

  const logos = [
    'Ministry of Culture, Government of India',
    'IAS / IPS officers & Army Chiefs',
    'Nobel Peace Prize Laureate Kailash Satyarthi Ji',
    'Various ministers & dignitaries'
  ]

  return (
    <section id="clients" className="py-16">
      <div ref={titleRef}>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">Our Esteemed Clients</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Trusted by government institutions, dignitaries and eminent personalities.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center" ref={logosRef}>
        {logos.map((l, idx)=> (
          <div key={l} className="p-4 text-center text-sm stagger-child">
            <img
              src={idx % 2 === 0 ? 'https://images.unsplash.com/photo-1633356713697-6c2b9efb3c50?auto=format&fit=crop&w=300&q=60' : 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=300&q=60'}
              alt={l}
              className="mx-auto h-16 object-contain"
            />
            <div className="mt-2 text-xs text-gray-500">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" ref={testimonialsRef}>
        <div className="stagger-child"><TestimonialCard quote="The soul of every wedding" who="— Client Name" /></div>
        <div className="stagger-child"><TestimonialCard quote="Exquisite musicianship and professionalism" who="— Event Organizer" /></div>
      </div>
    </section>
  )
}
