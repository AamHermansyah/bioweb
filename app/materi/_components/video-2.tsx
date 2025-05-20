import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video2() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Kontraksi Otot</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1vw37AibEl-q8ZTbfNYNM782_oN_35t4x/preview"
        title="Video Kontraksi Otot"
      />
    </div>
  )
}

export default Video2