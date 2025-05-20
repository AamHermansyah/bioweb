import Heading from '@/components/heading'
import VideoPlayerCard from '@/components/video-player-card'
import React from 'react'

function Video3() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Video Jenis Rangka</Heading>
      <VideoPlayerCard
        videoUrl="https://drive.google.com/file/d/1sTznRPw8lTiv11GpVnLeKlEJMloi7L3Z/preview"
        title="Video Jenis Rangka"
      />
    </div>
  )
}

export default Video3