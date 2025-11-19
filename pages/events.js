import Head from 'next/head'
import Events from '../components/Events'
import Footer from '../components/Footer'

export default function EventsPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Events — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Featured Events & Achievements</h1>
            <Events />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
