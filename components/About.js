import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation({ animation: 'fade-in-up' })
  const imageRef = useScrollAnimation({ animation: 'slide-in-left' })
  const textRef = useScrollAnimation({ animation: 'slide-in-right' })

  return (
    <section id="about" className="py-16" ref={sectionRef}>
            <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-4">About Mangal Dhwani Events</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Mangal Dhwani Events is one of India's leading cultural and musical event companies, dedicated to promoting the soul of Indian classical, folk, and fusion music through mesmerizing live performances.
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          Founded with a vision to blend tradition, innovation, and excellence, our team of seasoned artists and event professionals has curated performances that leave audiences spellbound — from intimate gatherings to grand international summits.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div ref={imageRef}>
            <img src="https://images.unsplash.com/photo-1508973371-77a2bd4e1f73?auto=format&fit=crop&w=800&q=60" alt="Group performance" className="h-40 w-full object-cover rounded-lg" />
          </div>
          <div className="text-left" ref={textRef}>
            <p className="text-gray-600 dark:text-gray-400">We specialize in wedding rituals, cultural programs, state ceremonies, corporate events, and private concerts. Our repertoire covers traditional classical recitals to contemporary fusion arrangements tailored to each event.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
