import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function Footer(){
  const footerRef = useScrollAnimation({ animation: 'fade-in-up' })

  return (
    <footer className="bg-gray-900 text-gray-100 mt-12" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-[25px] py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-extrabold mb-2">Mangal Dhwani Events</h4>
          <p className="mt-2 text-sm text-gray-300">Bringing vibrant live melodies to weddings, celebrations & premium events across India. Let our music set your moments on fire.</p>
          <div className="mt-4 text-sm text-gray-400">© Mangal Dhwani Events 2025. All rights reserved.</div>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Contact</h5>
          <div className="mt-2 text-sm text-gray-300">
            <div>Address: India</div>
            <div>Phone: +91-9999999999</div>
            <div>Email: events@mangaldhwani.com</div>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold text-lg">Follow Us</h5>
            <div className="mt-2 flex items-center space-x-3">
              <a className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center" href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-100" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.9h-2.3V22c4.78-.76 8.44-4.91 8.44-9.93z"/></svg>
              </a>
              <a className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center" href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-100" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 10.5A1.5 1.5 0 1 1 10.5 12 1.5 1.5 0 0 1 12 10.5z"/></svg>
              </a>
              <a className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center" href="#" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-100" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6zm11-6.5s-.11-1.77-.45-2.55C20.1 4.66 18.94 4.55 18.24 4.5 15.73 4 12 4 12 4s-3.73 0-6.24.5c-.7.05-1.86.16-2.31.45C2.11 6.73 2 8.5 2 8.5S1.89 10.27 2.25 11.05c.45.29 1.61.4 2.31.45C8.27 12 12 12 12 12s3.73 0 6.24-.5c.7-.05 1.86-.16 2.31-.45.36-.78.45-2.55.45-2.55z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-lg">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-300 space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/artists" className="hover:underline">Artists</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/contact" className="hover:underline">Contact & Booking</a></li>
          </ul>

          <div className="mt-6">
            <h5 className="font-semibold text-lg">Newsletter</h5>
            <div className="mt-2 flex">
              <input aria-label="email" placeholder="Your email" className="p-2 rounded-l w-full text-gray-900" />
              <button className="px-4 bg-gray-100 text-gray-900 rounded-r">Subscribe</button>
            </div>
            <div className="text-xs text-gray-400 mt-2">Stay in the loop — demo only.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
