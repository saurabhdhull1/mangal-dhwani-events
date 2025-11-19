import Head from 'next/head'
import Link from 'next/link'
import { getServiceById, getRelatedServices } from '../../lib/services'
import { useBooking } from '../../components/BookingModalContext'
import Footer from '../../components/Footer'

export default function ServiceDetailPage({ service, relatedServices }) {
  const { openModal } = useBooking()

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>Service Not Found</title>
        </Head>
        <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl font-bold">Service Not Found</h1>
            <Link href="/services" className="mt-4 inline-block px-4 py-2 bg-deep text-white rounded">Back to Services</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{service.title} — Mangal Dhwani Events</title>
      </Head>

      <main className="flex-grow w-full px-3 sm:px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="text-deep hover:underline mb-4 inline-block">← Back to Services</Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="h-80 placeholder-image rounded-lg mb-6">{service.image}</div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">{service.title}</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">{service.description}</p>

              <div className="mt-8 text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>{service.fullContent}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-party-pink/10 to-party-purple/10 dark:from-party-pink/20 dark:to-party-purple/20 rounded-lg border border-party-pink/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Price</div>
                  <div className="text-2xl font-bold text-party-pink mt-2">{service.price}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-party-purple/10 to-party-orange/10 dark:from-party-purple/20 dark:to-party-orange/20 rounded-lg border border-party-purple/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Duration</div>
                  <div className="text-2xl font-bold text-party-purple mt-2">{service.duration}</div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">What is Included</h2>
                <ul className="space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold text-lg mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-4">
                <button onClick={openModal} className="px-6 py-3 bg-gradient-to-r from-party-pink to-party-orange text-white font-semibold rounded hover:opacity-90 transition">Book This Service</button>
                <a href="https://wa.me/919999999999?text=I%20am%20interested%20in%20booking%20Mangal%20Dhwani%20Events" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-opacity-90 transition">WhatsApp Inquiry</a>
              </div>
            </div>

            {/* Related Services Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-party-pink/5 to-party-purple/5 dark:from-party-pink/20 dark:to-party-purple/20 p-6 rounded-lg border border-party-pink/20">
                <h3 className="text-lg font-bold bg-gradient-to-r from-party-pink to-party-purple bg-clip-text text-transparent mb-4">Related Services</h3>
                <div className="space-y-3">
                  {relatedServices.map(s => (
                    <Link key={s.id} href={`/services/${s.id}`}>
                      <div className="p-3 border border-party-pink/30 rounded-lg hover:bg-party-pink/10 dark:hover:bg-party-pink/20 transition cursor-pointer">
                        <div className="font-semibold text-sm">{s.title}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{s.description}</div>
                        <div className="text-xs text-party-pink font-semibold mt-2">{s.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export function getStaticProps({ params }) {
  const service = getServiceById(params.id)
  const relatedServices = getRelatedServices(params.id)

  if (!service) {
    return { notFound: true }
  }

  return {
    props: { service, relatedServices },
    revalidate: 3600
  }
}

export function getStaticPaths() {
  const { serviceDetails } = require('../../lib/services')
  const paths = Object.keys(serviceDetails).map(id => ({
    params: { id }
  }))

  return {
    paths,
    fallback: false
  }
}
