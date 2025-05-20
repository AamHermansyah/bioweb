import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video5() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Jenis Jenis Otot</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1-t-x0-j6c6k-Eef2WLkFoLUB_5aQq-KR/preview"
        title="Video Jenis Jenis Otot"
      />
    </div>
  )
}

export default Video5