import { useEffect, useState } from 'react'

export default function Carousel({className}){
  const slides = [
    'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10=',
    'https://media.istockphoto.com/id/497317250/photo/new-year-party.jpg?s=612x612&w=0&k=20&c=ssF8Nl4srRSnNhToYI0GlUznz3xVVJunOnaIe1ukllA=',
    'https://media.istockphoto.com/id/1300874587/vector/group-of-young-people-characters-holding-wine-glasses-with-beverages-and-sparklers.jpg?s=612x612&w=0&k=20&c=KjmXL9g6fHmuk-VGPI2rD4ReS33RsGu2axyx57mPS8w='
  ]
  const [idx, setIdx] = useState(0)

  useEffect(()=>{
    const t = setInterval(()=> setIdx(i=> (i+1) % slides.length), 4000)
    return ()=> clearInterval(t)
  },[])

  return (
    <div className={`${className} absolute inset-0 overflow-hidden rounded-lg`} aria-hidden>
      {slides.map((s,i)=> (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i===idx? 'opacity-100':'opacity-0'}`}>
          <img 
            src={s} 
            alt={`Carousel slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute left-4 bottom-4 flex space-x-2">
        {slides.map((_,i)=> (
          <div key={i} className={`w-2 h-2 rounded-full ${i===idx? 'bg-white':'bg-white/40'}`}></div>
        ))}
      </div>
    </div>
  )
}
