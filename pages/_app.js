import '../styles/globals.css'
import { BookingProvider } from '../components/BookingModalContext'
import { ThemeProvider } from '../components/ThemeContext'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BookingProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <NavBar />
          <Component {...pageProps} />
          <ScrollToTop />
          <WhatsAppButton />
        </div>
      </BookingProvider>
    </ThemeProvider>
  )
}
