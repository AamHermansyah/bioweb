import React from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import LearningObjectives from './_components/learning-objectives';
import CompetenciesIndicators from './_components/competencies-indicators';
import Benefit from './_components/benefit';
import CreatorProfile from './_components/creater-profile';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      {/* Breadcrumb */}
      <Breadcrumb current="Profil" />

      {/* Header */}
      <header className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Profil Media Pembelajaran</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Selamat datang di BIOWEB, media pembelajaran interaktif tentang Sistem Gerak Manusia.
            Berikut adalah informasi tentang tujuan dan manfaat media pembelajaran ini.
          </p>
        </div>
      </header>

      {/* Tujuan Pembelajaran */}
      <LearningObjectives />

      {/* Kompetensi Dasar */}
      <CompetenciesIndicators />

      {/* Manfaat Pembelajaran */}
      <Benefit />

      {/* Profil Pembuat */}
      <CreatorProfile />
    </div>
  );
};

export default ProfilePage;