const instruments = [
  'Sitar','Sarangi','Santoor','Shehnai','Sarod','Saxophone','Flute','Violin','Israj','Guitar','Accordion','Mandolin','Tasha','Dhol','Nagada','Tabla','Dholak','Pakhawaj','Mridangam','Keyboard'
]

export default function InstrumentGrid(){
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {instruments.map((inst)=> (
        <div key={inst} className="flex items-center space-x-3 p-3 border rounded-lg">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18V5l12-2v13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="18" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div className="font-medium">{inst}</div>
            <div className="text-xs text-gray-500">Instrument</div>
          </div>
        </div>
      ))}
    </div>
  )
}
