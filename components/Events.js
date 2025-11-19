import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Events(){
  const titleRef = useScrollAnimation({ animation: 'fade-in-up' })
  const cardsRef = useScrollAnimation({ animation: 'scale-in' })

  const milestones = [
    "Performed at Anant Ambani's wedding",
    "Saif Ali Khan & Kareena Kapoor's wedding",
    "Vidya Balan's wedding",
    "Suresh Raina's wedding",
    'Indian Army ceremonies (Sena Bhawan)',
    'Ayodhya Ram Mandir inauguration',
    'Republic Day Parade for Sangeet Natak Akademi',
    'Visits of Presidents Trump & Biden to India',
    'G20 & Indo-Japan Summit'
  ]

  return (
    <section id="events" className="py-16">
      <div ref={titleRef}>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">Featured Events & Achievements</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Selected milestones and prestigious performances:</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" ref={cardsRef}>
        {milestones.map((m, idx)=> (
          <div key={m} className="p-4 border rounded-lg flex items-start stagger-child">
            <img
              src={idx % 2 === 0 ? 'https://images.unsplash.com/photo-1506152983158-68f4a7b88d82?auto=format&fit=crop&w=600&q=60' : 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=60'}
              alt="Event"
              className="w-20 h-20 object-cover rounded mr-4 flex-shrink-0"
            />
            <div>
              <div className="font-medium">{m}</div>
              <div className="text-xs text-gray-500">Live performance photo</div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-600 dark:text-gray-400">Gallery & videos: space reserved for future media.</p>
    </section>
  )
}
