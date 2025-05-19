'use client'

import React from 'react';
import Hero from './_components/hero';
import VideoPreview from './_components/video-preview';
import Features from './_components/features';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Video Preview Section */}
      <VideoPreview />

      {/* Feature Cards */}
      <Features />
    </div>
  );
};

export default HomePage;