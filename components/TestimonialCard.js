export default function TestimonialCard({quote, who}){
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <div className="text-gray-700 italic">“{quote}”</div>
      <div className="mt-3 text-sm font-semibold">{who}</div>
    </div>
  )
}
