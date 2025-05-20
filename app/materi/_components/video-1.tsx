import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video1() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Pengantar</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1CVwP5Z78ObVtdAJ3pympLZ6sarDUOG67/preview"
        title="Video Pengantar Sistem Gerak"
      />
    </div>
  )
}

export default Video1