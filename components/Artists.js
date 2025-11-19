import InstrumentGrid from './InstrumentGrid'

export default function Artists(){
  return (
    <section id="artists" className="py-16">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">Our Musicians – Masters of Indian Instruments</h2>
      <p className="mt-3 text-gray-600 dark:text-gray-400">Our artists include musically trained and "A" Grade musicians from All India Radio and Doordarshan — experts in:</p>
      <InstrumentGrid />
      <p className="mt-6 text-gray-600 dark:text-gray-400">Performances range from solo, ensembles, event bands, and accompanists for weddings and grand events.</p>
    </section>
  )
}
