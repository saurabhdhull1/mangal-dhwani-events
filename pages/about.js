import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow">
        <div className="w-full px-3 sm:px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
