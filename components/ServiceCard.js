import Link from 'next/link'

export default function ServiceCard({title, subtitle, serviceId}){
  return (
    <Link href={`/services/${serviceId}`}>
      <div className="border border-party-pink/30 rounded-lg p-4 shadow-sm flex flex-col h-full cursor-pointer hover:shadow-lg hover:border-party-pink/60 transition bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <img
          src="https://images.unsplash.com/photo-1506152983158-68f4a7b88d82?auto=format&fit=crop&w=1200&q=60"
          alt={`Image for ${title}`}
          className="h-40 w-full rounded-md object-cover"
        />
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-grow">{subtitle}</p>
        <button className="mt-auto px-3 py-2 text-sm bg-gradient-to-r from-party-pink to-party-purple text-white rounded w-full hover:opacity-90 transition">View Details</button>
      </div>
    </Link>
  )
}
