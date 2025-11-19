import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Connect with Mangal Dhwani Events</h1>
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
