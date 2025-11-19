import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Artists from '../components/Artists'
import Services from '../components/Services'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Mangal Dhwani Events — Shehnai & Instrumental Music</title>
        <meta name="description" content="Mangal Dhwani Events - India's leading Shehnai and instrumental music company for weddings and events." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex-grow">
        <Hero />
        <div className="w-full px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <About />
            <Artists />
            <Services />
            <Events />
            <Gallery />
            <Clients />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
