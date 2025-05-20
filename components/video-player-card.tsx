'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerCardProps {
  title: string;
  description?: string;
  duration?: string;
  videoUrl: string; // Harus berupa URL embed (misalnya dari Google Drive atau YouTube embed)
}

const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  title,
  description,
  duration,
  videoUrl,
}) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div>
      <div className="relative aspect-video bg-black/5 rounded-xl overflow-hidden shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-emerald-500/10">
          {!videoPlaying && (
            <button
              className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors"
              onClick={() => setVideoPlaying(true)}
            >
              <Play className="w-7 h-7 text-white ml-1" />
            </button>
          )}

          {videoPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoUrl}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="absolute bottom-6 left-6 text-white bg-black/50 px-4 py-2 rounded-lg text-sm">
              {title} {duration ? `(${duration})` : ''}
            </div>
          )}
        </div>
      </div>

      {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
    </div>
  );
};

export default VideoPlayerCard;
