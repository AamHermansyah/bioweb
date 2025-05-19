'use client'

import { Play } from 'lucide-react';
import React, { useState } from 'react'

function VideoPreview() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Visualisasi Interaktif</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari sistem gerak manusia melalui animasi dan visualisasi yang memudahkan pemahaman konsep biologis kompleks.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-video bg-black/5 rounded-xl overflow-hidden shadow-md">
          {/* Placeholder untuk video animasi kontraksi otot */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-emerald-500/10">
            {!videoPlaying && (
              <button
                className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors"
                onClick={() => setVideoPlaying(true)}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            )}
            {videoPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://drive.google.com/file/d/1JSDSEGG70RskR2IdlV_P0bzyN5ruQeTd/preview"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute bottom-6 left-6 text-white bg-black/50 px-4 py-2 rounded-lg text-sm z-0">
                Animasi Kontraksi Otot
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPreview