import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video6() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Jenis Jenis Sendi</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1Rwvcp8VWz7F1L6hvkwTEJCDXn4eEXhXm/preview"
        title="Video Jenis Jenis Sendi"
      />
    </div>
  )
}

export default Video6