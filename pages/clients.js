import Head from 'next/head'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

export default function ClientsPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Clients — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Our Esteemed Clients</h1>
            <Clients />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
