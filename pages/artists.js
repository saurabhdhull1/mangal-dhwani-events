import Head from 'next/head'
import Artists from '../components/Artists'
import Footer from '../components/Footer'

export default function ArtistsPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Artists — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Our Musicians</h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Masters of Indian instruments and seasoned professionals for ceremonies and concerts.</p>
            <Artists />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
