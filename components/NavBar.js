import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useBooking } from './BookingModalContext'
import { useTheme } from './ThemeContext'

export default function NavBar(){
  const [open, setOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const { openModal } = useBooking()
  const { theme, toggle } = useTheme()
  const router = useRouter()
  const isHome = router.pathname === '/'
  const overlay = isHome && isTop

  useEffect(()=>{
    function onScroll(){ setIsTop(window.scrollY < 80) }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
  <header className={`${overlay ? 'absolute top-0 left-0 right-0 z-40' : 'sticky top-0 z-40'}`}>
      {/* Compact topbar only visible at top */}
      {isTop && (
        <div className="w-full bg-white/40 backdrop-blur-sm dark:bg-black/30">
          <div className="max-w-7xl mx-auto px-[25px] py-1 text-sm text-gray-700 dark:text-gray-200 flex justify-end space-x-6">
            <div className="hidden sm:inline">Email: events@mangaldhwani.com</div>
            <div>Phone: +91-9999999999</div>
          </div>
        </div>
      )}

      <nav className={`w-full ${overlay ? 'bg-transparent backdrop-blur-sm' : 'bg-white dark:bg-gray-800 shadow-sm'} transition-all`}> 
        <div className="flex justify-between items-center h-16 px-[25px]">
          {/* Logo - Far Left */}
          <Link href="/" className={`${overlay ? 'text-white' : 'text-deep dark:text-gold'} text-xl font-bold whitespace-nowrap`}>Mangal Dhwani Events</Link>
          
          {/* Nav - Center */}
          <div className="hidden md:flex ml-8 space-x-6 flex-1 justify-center">
            <Link href="/" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Home</Link>
            <Link href="/gallery" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Gallery</Link>
            <Link href="/clients" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Clients</Link>
            <Link href="/artists" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Artists</Link>
            <Link href="/services" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Services</Link>
            <Link href="/about" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>About</Link>
            <Link href="/events" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Events</Link>
            <Link href="/contact" className={`${overlay ? 'text-white/90 hover:text-white' : 'text-gray-700 dark:text-gray-200 hover:text-deep'}`}>Contact</Link>
          </div>

          {/* Buttons - Far Right */}
          <div className="flex items-center space-x-3 ml-auto">
            <div className="hidden md:flex space-x-3">
              <button onClick={openModal} className={`${overlay ? 'bg-gradient-to-r from-party-pink to-party-orange text-white shadow-lg' : 'bg-gold text-white'} px-4 py-2 rounded text-sm transition`}>Book Now</button>
              <button onClick={openModal} className={`${overlay ? 'bg-transparent border border-white text-white' : 'border'} px-4 py-2 rounded text-sm transition`}>Contact</button>
              <button onClick={toggle} className={`${overlay ? 'text-white border border-white' : ''} px-3 py-2 border rounded flex items-center`} aria-label="Toggle dark mode">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 011.415 0l.708.707a1 1 0 11-1.414 1.414l-.708-.707a1 1 0 010-1.414zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4.22 4.03a1 1 0 010 1.414L3.515 6.15A1 1 0 012.1 4.736l.706-.707a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 9a1 1 0 100 2H2a1 1 0 100-2h1zM16.95 14.95a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM5.05 14.95a1 1 0 011.414 1.414l-.707.707A1 1 0 014.343 15.66l.707-.707z"/></svg>
                )}
              </button>
            </div>

            <button className="md:hidden p-2 rounded" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
      <div className="md:hidden bg-white dark:bg-gray-800 border-t">
        <div className="px-[25px] py-3 space-y-2">
              <Link href="/about" className="block">About</Link>
              <Link href="/artists" className="block">Artists</Link>
              <Link href="/services" className="block">Services</Link>
              <Link href="/gallery" className="block">Gallery</Link>
              <Link href="/events" className="block">Events</Link>
              <Link href="/clients" className="block">Clients</Link>
              <Link href="/contact" className="block">Contact</Link>
              <div className="pt-2">
                <button onClick={openModal} className="w-full block px-4 py-2 bg-gold text-white rounded">Book Now</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
