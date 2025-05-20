import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video4() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Pembentukan Tulang (Osifikasi)</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1njhPmEPi7-2PlSIMuzcvSKTkIT3yyOSN/preview"
        title="Video Osifikasi"
      />
    </div>
  )
}

export default Video4