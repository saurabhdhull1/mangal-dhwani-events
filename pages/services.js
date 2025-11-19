import Head from 'next/head'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Services — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
