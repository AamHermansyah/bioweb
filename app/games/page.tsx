'use client'

import React from 'react';
import { Gamepad2, Bone, Dumbbell, Trophy, Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const GameHomePage: React.FC = () => {
  // Game data
  const games = [
    {
      id: 'movement-simulator',
      title: 'Simulator Gerakan',
      description: 'Identifikasi jenis gerakan dan otot yang digunakan dalam berbagai aktivitas tubuh.',
      icon: <Gamepad2 className="w-10 h-10 text-blue-200" />,
      difficulty: 'Sedang',
      timeEstimate: '3-5 menit',
      skills: ['Pengenalan Gerakan', 'Identifikasi Otot', 'Analisis Fungsi'],
      highlights: 'Pelajari bagaimana otot dan sendi bekerja sama untuk menciptakan gerakan tubuh.',
      path: '/games/simulator',
      color: 'from-blue-500 to-teal-600',
      bgClass: 'bg-gradient-to-br from-blue-50 to-teal-50'
    },
    {
      id: 'muscle-matching',
      title: 'Mencocokkan Otot',
      description: 'Cocokkan setiap jenis otot dengan fungsinya yang tepat dalam sistem gerak manusia.',
      icon: <Dumbbell className="w-10 h-10 text-emerald-200" />,
      difficulty: 'Mudah',
      timeEstimate: '2-4 menit',
      skills: ['Fungsi Otot', 'Jenis Otot', 'Anatomi Pada Otot'],
      highlights: 'Kenali berbagai jenis otot dan bagaimana fungsi mereka mendukung gerakan tubuh.',
      path: '/games/pasangan-otot',
      color: 'from-emerald-500 to-green-600',
      bgClass: 'bg-gradient-to-br from-emerald-50 to-green-50'
    },
    {
      id: 'bone-arrangement',
      title: 'Menyusun Tulang',
      description: 'Susun tulang pada posisi yang tepat untuk membentuk kerangka manusia yang lengkap.',
      icon: <Bone className="w-10 h-10 text-amber-200" />,
      difficulty: 'Sulit',
      timeEstimate: '3-6 menit',
      skills: ['Anatomi Tulang', 'Struktur Kerangka', 'Posisi Tulang'],
      highlights: 'Pelajari susunan tulang yang membentuk kerangka manusia dan posisinya yang tepat.',
      path: '/games/susun-tulang',
      color: 'from-amber-500 to-orange-600',
      bgClass: 'bg-gradient-to-br from-amber-50 to-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      <div className="relative bg-gradient-to-b from-white to-teal-50 overflow-hidden">
        <div className="bg-white pt-20">
          <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="text-center lg:text-left flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Belajar Sistem Gerak Jadi Lebih Seru 🎮
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Jelajahi dunia anatomi manusia dengan cara yang menyenangkan melalui game edukatif interaktif kami. Tantang dirimu, kumpulkan skor, dan jadilah ahli biologi mini!
              </p>

              {/* Feature Highlights */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border rounded-full shadow-sm">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-800">Skor Tertinggi</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border rounded-full shadow-sm">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-800">Tantangan Waktu</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium text-gray-800">Level Bertingkat</span>
                </div>
              </div>
            </div>

            {/* Kanan: Ilustrasi/Gambar */}
            <div className="flex-1">
              <img
                src="https://placehold.co/500x400.png?text=Ilustrasi+Game"
                alt="Ilustrasi Game Edukasi"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative SVG / Background */}
        <div className="absolute inset-x-0 top-0 -z-10">
          <svg
            className="w-full h-48 text-teal-100"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0V46.29c47.55,22,103.83,29,158,17C254.93,45.4,342,5.18,420,0c60.39-3.78,113.59,12.55,173,27.52C667.15,46,748.5,72.1,820,59c73.5-13.45,140.59-60.62,207-53.11V0Z" />
          </svg>
        </div>
      </div>

      {/* Game Cards */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Pilih Game untuk Dimainkan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <div key={game.id} className={`rounded-2xl overflow-hidden shadow-lg transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 ${game.bgClass}`}>
                <div className={`bg-gradient-to-r ${game.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 rounded-lg p-3">
                      {game.icon}
                    </div>
                    <div className="bg-white/20 text-xs rounded-full px-3 py-1">
                      {game.difficulty}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-5 mb-1">{game.title}</h3>
                  <p className="text-sm text-white/90">{game.description}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{game.timeEstimate}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Keterampilan yang Dilatih:</h4>
                    <div className="flex flex-wrap gap-2">
                      {game.skills.map((skill, index) => (
                        <span key={index} className="inline-block text-xs bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 italic mb-6">
                    &ldquo;{game.highlights}&rdquo;
                  </p>

                  <Link href={game.path}>
                    <div className={`w-full flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r ${game.color} text-white font-medium transition-all shadow-md hover:shadow-lg`}>
                      Mainkan Sekarang
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Tentang Game Edukatif Sistem Gerak</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Koleksi game interaktif ini dirancang untuk membantu Anda memahami sistem gerak manusia dengan cara yang menyenangkan dan menantang.
                Setiap game berfokus pada aspek yang berbeda dari sistem gerak manusia, mulai dari pengenalan tulang, otot, hingga gerakan tubuh yang kompleks.
              </p>
              <p>
                Semua game dilengkapi dengan sistem skor dan tingkat kesulitan yang bervariasi, sehingga cocok untuk berbagai tingkat pemahaman.
                Anda dapat memulai dari level yang sesuai dengan pengetahuan Anda dan secara bertahap meningkatkan tantangan.
              </p>
              <p>
                Pelajari sistem gerak sambil bermain dan uji pemahaman Anda tentang bagaimana tulang, otot, dan sendi bekerja sama untuk menghasilkan
                gerakan tubuh manusia yang kompleks dan terkoordinasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Tips */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Tips Bermain</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                <span className="font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Pilih Level yang Tepat</h3>
              <p className="text-gray-700">
                Mulai dari level mudah untuk memahami dasar-dasar permainan. Tingkatkan level seiring dengan peningkatan pemahaman Anda.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                <span className="font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Perhatikan Waktu</h3>
              <p className="text-gray-700">
                Skor bonus diberikan berdasarkan waktu yang tersisa. Cobalah untuk menyelesaikan tantangan secepat mungkin, namun tetap akurat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full mb-4 flex items-center justify-center">
                <span className="font-bold text-amber-700">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Baca Petunjuk</h3>
              <p className="text-gray-700">
                Setiap game memiliki mekanisme yang berbeda. Luangkan waktu untuk membaca petunjuk sebelum memulai permainan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Siap untuk Menguji Pengetahuan Anda?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Pilih salah satu game di atas dan mulai petualangan edukatif Anda dalam mempelajari sistem gerak manusia!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/games/movement-simulator">
              <div className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors">
                Simulator Gerakan
              </div>
            </Link>
            <Link href="/games/muscle-matching">
              <div className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
                Mencocokkan Otot
              </div>
            </Link>
            <Link href="/games/bone-arrangement">
              <div className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
                Menyusun Tulang
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameHomePage;