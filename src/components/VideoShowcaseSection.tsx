import { useState } from 'react';
import { murimVideos } from '@/lib/media-data';
import { getOptimizedVideo } from '@/lib/cloudinary';

export function VideoShowcaseSection() {
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="videos" className="relative">
      {murimVideos.map((video, index) => (
        <div
          key={video.id}
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{ zIndex: 10 + index }}
        >
          {!videoErrors[video.id] ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={() => setVideoErrors(prev => ({ ...prev, [video.id]: true }))}
            >
              <source 
                src={getOptimizedVideo(video.assetId)} 
                type="video/mp4" 
              />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-champagne-mist to-gold/20 flex items-center justify-center">
              <div className="text-center text-imperial-blue">
                <h3 className="text-3xl font-bold mb-4">{video.title}</h3>
                <p className="text-xl mb-4">{video.description}</p>
                <p className="text-lg opacity-75">Vidéo en cours de chargement...</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
              <p className="text-lg">{video.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
