import { useState } from 'react';
import Link from 'next/link';

const galleryVideos = [
  { id: 1, title: 'Shehnai Performance - Wedding Ceremony', videoId: 'FvE3DfKt4R8' },
  { id: 2, title: 'Fusion Shehnai with Western Instruments', videoId: 'FvE3DfKt4R8' },
  { id: 3, title: 'Celebrity Event Performance', videoId: 'FvE3DfKt4R8' },
  { id: 4, title: 'Traditional Shehnai Solo', videoId: 'FvE3DfKt4R8' },
  { id: 5, title: 'Sitar Collaboration', videoId: 'FvE3DfKt4R8' },
  { id: 6, title: 'Ghazal Shehnai Performance', videoId: 'FvE3DfKt4R8' },
  { id: 7, title: 'Folk Music Medley', videoId: 'FvE3DfKt4R8' },
  { id: 8, title: 'Devotional Music Concert', videoId: 'FvE3DfKt4R8' },
];

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(galleryVideos[0]);

  return (
    <div className="w-full bg-white dark:bg-gray-900 min-h-screen py-8 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-orange bg-clip-text text-transparent mb-2">
            Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Explore our finest performances and musical moments</p>
        </div>

        {/* Main Grid - Video Player + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedVideo.title}
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Video {selectedVideo.id} of {galleryVideos.length}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      const currentIndex = galleryVideos.findIndex(v => v.id === selectedVideo.id);
                      if (currentIndex > 0) setSelectedVideo(galleryVideos[currentIndex - 1]);
                    }}
                    disabled={selectedVideo.id === 1}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = galleryVideos.findIndex(v => v.id === selectedVideo.id);
                      if (currentIndex < galleryVideos.length - 1) setSelectedVideo(galleryVideos[currentIndex + 1]);
                    }}
                    disabled={selectedVideo.id === galleryVideos.length}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-party-pink to-party-purple rounded-full mr-3"></span>
                Suggested Videos
              </h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {galleryVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full text-left p-3 rounded-lg transition group ${
                      selectedVideo.id === video.id
                        ? 'bg-gradient-to-r from-party-pink/20 to-party-purple/20 border-l-4 border-party-pink'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="relative mb-2 rounded overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`}
                        alt={video.title}
                        className="w-full h-auto rounded"
                      />
                      {selectedVideo.id === video.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 bg-party-pink rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white fill-current ml-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className={`text-sm font-medium ${
                      selectedVideo.id === video.id
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    } line-clamp-2 group-hover:text-party-pink transition`}>
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Video {video.id}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Videos Grid Below */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            All Videos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`group rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 cursor-pointer ${
                  selectedVideo.id === video.id
                    ? 'ring-4 ring-party-pink'
                    : ''
                }`}
              >
                <div className="relative bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="w-16 h-16 bg-party-pink rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white fill-current ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Video {video.id}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-party-pink hover:text-party-purple transition inline-flex items-center">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
