import { useState } from 'react'

const videos = [
  { id: 1, title: 'Shehnai Performance at Wedding', videoId: 'FvE3DfKt4R8' },
  { id: 2, title: 'Fusion Band Corporate Event', videoId: 'FvE3DfKt4R8' },
  { id: 3, title: 'Sitar Recital - Classical Music', videoId: 'FvE3DfKt4R8' },
  { id: 4, title: 'Ghazal Night Performance', videoId: 'FvE3DfKt4R8' },
  { id: 5, title: 'Folk Music & Dance', videoId: 'FvE3DfKt4R8' },
  { id: 6, title: 'Devotional Bhajan Performance', videoId: 'FvE3DfKt4R8' },
  { id: 7, title: 'Wedding Ceremony Shehnai', videoId: 'FvE3DfKt4R8' },
  { id: 8, title: 'Celebrity Artist Performance', videoId: 'FvE3DfKt4R8' }
]

export default function Gallery(){
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section className="py-16">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">Our Performances</h2>
        <p className="text-gray-600 dark:text-gray-400">Watch our artists in action at various events and ceremonies</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map(video => (
          <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-black/30 aspect-video flex items-center justify-center hover:scale-105 transition duration-300">
              <img src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:opacity-70 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition">
                  <svg className="w-6 h-6 text-party-pink ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-3 font-semibold text-sm line-clamp-2">{video.title}</h3>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-white text-3xl z-10">×</button>
            <div className="aspect-video">
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <p className="mt-4 text-white text-center font-semibold">{selectedVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
