import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-teal-700">BIO</span><span className="text-emerald-500">WEB</span>:
              <span className="block mt-2">Sistem Gerak Manusia dalam Media Belajar Masa Kini</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Selamat datang di media pembelajaran Biologi Sistem Gerak! Mari kita pelajari bersama struktur dan fungsi sistem gerak manusia secara interaktif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
                Mulai Belajar
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>

              <button className="w-full sm:w-auto border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
                Tentang Kami
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder untuk gambar ilustrasi anatomi */}
              <div className="relative aspect-[4/3] rounded-lg bg-gradient-to-br from-teal-100 to-green-200 flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Sistem Gerak"
                  fill
                  priority
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero