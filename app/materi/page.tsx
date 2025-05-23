'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Breadcrumb } from '@/components/breadcrumb';
import Materi1 from './_components/materi-1';
import Materi2 from './_components/materi-2';
import Materi3 from './_components/materi-3';
import Materi4 from './_components/materi-4';
import Materi5 from './_components/materi-5';
import Materi6 from './_components/materi-6';
import Materi7 from './_components/materi-7';
import Materi8 from './_components/materi-8';
import Materi9 from './_components/materi-9';
import Materi10 from './_components/materi-10';
import Materi11 from './_components/materi-11';
import Materi12 from './_components/materi-12';
import Materi13 from './_components/materi-13';
import Materi14 from './_components/materi-14';
import Materi15 from './_components/materi-15';
import Materi16 from './_components/materi-16';
import Materi17 from './_components/materi-17';
import Materi18 from './_components/materi-18';
import Link from 'next/link';
import Video1 from './_components/video-1';
import Video2 from './_components/video-2';
import Video3 from './_components/video-3';
import Video4 from './_components/video-4';
import Video5 from './_components/video-5';
import Video6 from './_components/video-6';

const materiList = [
  { id: 'materi-1', title: 'Pengantar Sistem Gerak' },
  { id: 'video-1', title: 'Video Pengantar' },
  { type: 'separator', title: 'Bab 1 - Rangka' },
  { id: 'materi-2', title: 'Pengantar' },
  { type: 'separator', title: 'Jenis Rangka' },
  { id: 'materi-3', title: 'Rangka Aksial' },
  { id: 'materi-4', title: 'Rangka Apendikuler' },
  { id: 'video-3', title: 'Video Jenis Rangka' },
  { type: 'separator', title: 'Tulang Penyusun Rangka' },
  { id: 'materi-5', title: 'Bentuk Tulang' },
  { id: 'materi-6', title: 'Jenis Tulang' },
  { type: 'separator', title: 'Pembahasan lain' },
  { id: 'materi-7', title: 'Pembentukan Tulang' },
  { id: 'video-4', title: 'Video Osifikasi' },
  { id: 'materi-8', title: 'Hubungan Antartulang' },
  { id: 'video-6', title: 'Video Jenis Sendi' },
  { id: 'materi-9', title: 'Macam Macam Gerak' },
  { type: 'separator', title: 'Bab 2 - Otot' },
  { id: 'materi-10', title: 'Pengantar' },
  { id: 'materi-11', title: 'Jenis Jenis Otot' },
  { id: 'video-5', title: 'Video Jenis Otot' },
  { id: 'materi-12', title: 'Mekanisme Gerak Otot' },
  { id: 'video-2', title: 'Video Kontraksi Otot' },
  { type: 'separator', title: 'Bab 3 - Gangguan & Kelainan Tulang' },
  { id: 'materi-13', title: 'Gangguan Mekanik' },
  { id: 'materi-14', title: 'Gangguan Fisiologis' },
  { id: 'materi-15', title: 'Gangguan Tulang Belakang' },
  { id: 'materi-16', title: 'Gangguan Persendian/Peradangan' },
  { id: 'materi-17', title: 'Infeksi Sendi' },
  { type: 'separator', title: 'Bab 4 - Gangguan & Kelainan Otot' },
  { id: 'materi-18', title: 'Gangguan & Kelainan' },
];

const MateriPage = () => {
  // State untuk active tab
  const [activeTab, setActiveTab] = useState(materiList[0].id!);

  // Materi berdasarkan tab yang aktif
  const getActiveContent = () => {
    switch (activeTab) {
      case 'materi-1':
        return <Materi1 />;
      case 'video-1':
        return <Video1 />;
      case 'materi-2':
        return <Materi2 />;
      case 'materi-3':
        return <Materi3 />;
      case 'materi-4':
        return <Materi4 />;
      case 'video-3':
        return <Video3 />;
      case 'materi-5':
        return <Materi5 />;
      case 'materi-6':
        return <Materi6 />;
      case 'materi-7':
        return <Materi7 />;
      case 'video-4':
        return <Video4 />;
      case 'materi-8':
        return <Materi8 />;
      case 'video-6':
        return <Video6 />;
      case 'materi-9':
        return <Materi9 />;
      case 'materi-10':
        return <Materi10 />;
      case 'materi-11':
        return <Materi11 />;
      case 'video-5':
        return <Video5 />;
      case 'materi-12':
        return <Materi12 />;
      case 'video-2':
        return <Video2 />;
      case 'materi-13':
        return <Materi13 />;
      case 'materi-14':
        return <Materi14 />;
      case 'materi-15':
        return <Materi15 />;
      case 'materi-16':
        return <Materi16 />;
      case 'materi-17':
        return <Materi17 />;
      case 'materi-18':
        return <Materi18 />;
      default:
        return <div>Materi tidak ditemukan</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">

      {/* Breadcrumb */}
      <Breadcrumb current="Materi" />

      {/* Materi Header */}
      <header className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Materi Pembelajaran</h1>
          <p className="text-gray-600">
            Pelajari materi sistem gerak manusia secara interaktif
          </p>
        </div>
      </header>

      {/* Materi Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-5 h-5 text-teal-700" />
                  <h3 className="text-lg font-semibold ml-2">Daftar Materi</h3>
                </div>

                <nav className="space-y-1 max-h-[300px] overflow-y-auto">
                  {materiList.map((item, index) => {
                    if ('type' in item && item.type === 'separator') {
                      return (
                        <div
                          key={`separator-${index}`}
                          className={cn(
                            'text-sm font-semibold text-gray-500 border-b border-gray-200',
                            !!item.title && 'px-4 py-2 mb-2'
                          )}
                        >
                          {item.title ?? ''}
                        </div>
                      );
                    }

                    return (
                      <button
                        key={item.id}
                        className={cn(
                          'w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between',
                          activeTab === item.id ? 'bg-teal-50 text-teal-800 font-medium' : 'hover:bg-gray-50'
                        )}
                        onClick={() => {
                          setActiveTab(item.id!);
                          setTimeout(() => {
                            const targetElement = document.querySelector(`.${item.id!}`);
                            if (targetElement) {
                              const yOffset = -100; // offset atas 100px (bisa positif/negatif)
                              const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                              window.scrollTo({
                                top: y,
                                behavior: 'smooth',
                              });
                            }
                          }, 100);
                        }}
                      >
                        <span>{item.title}</span>
                        {activeTab === item.id && (
                          <ChevronRight className="w-4 h-4 text-teal-700" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className={cn('bg-white rounded-xl p-6 shadow-sm', activeTab)}>
                {getActiveContent()}
              </div>

              {/* Navigasi antar halaman materi */}
              <div className="mt-8 flex justify-between">
                <button
                  className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled={activeTab === 'materi-1'}
                  onClick={() => setActiveTab((prev) => {
                    const [key, index] = prev.split('-');
                    return `${key}-${+index - 1}`
                  })}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  <span>Mundur</span>
                </button>

                {activeTab === 'materi-18' ? (
                  <Link href="/kuis">
                    <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                      <span>Mulai Kuis</span>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </Link>
                ) : (
                  <button
                    className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    disabled={activeTab === 'materi-18'}
                    onClick={() => setActiveTab((prev) => {
                      const [key, index] = prev.split('-');
                      return `${key}-${+index + 1}`
                    })}
                  >
                    <span>Lanjut</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MateriPage;