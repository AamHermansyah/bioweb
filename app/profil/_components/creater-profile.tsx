import { MessageSquare, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CreatorProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold ml-4">Profil Pembuat</h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Mengenal lebih dekat sosok di balik pengembangan media pembelajaran BIOWEB
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8">
              <div className="md:col-span-4">
                {/* Placeholder untuk foto profil */}
                <div className="relative w-full h-full aspect-square md:aspect-auto max-w-xs mx-auto bg-gradient-to-br from-teal-200 to-emerald-200 flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center">
                    <User className="w-16 h-16 text-teal-700" />
                  </div>
                  <Image
                    src="/creator-profile.jpg"
                    alt=""
                    fill
                    className="object-cover p-2"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <h3 className="text-2xl font-bold mb-1">Elisa Nur Amanah</h3>
                <p className="text-teal-700 font-medium mb-4">Pengembang Media Pembelajaran BIOWEB</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">NIM</h4>
                      <p className="text-gray-800">222154088</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Program Studi</h4>
                      <p className="text-gray-800">Pendidikan Biologi</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Fakultas</h4>
                      <p className="text-gray-800">Fakultas Keguruan dan Ilmu Pendidikan</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Angkatan</h4>
                      <p className="text-gray-800">2022</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Universitas</h4>
                      <p className="text-gray-800">Universitas Siliwangi</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                      <p className="text-gray-800">222154088@student.unsil.ac.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-12">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Latar Belakang</h4>
                  <p className="text-gray-700">
                    Saya adalah mahasiswa Pendidikan Biologi yang tertarik pada pengembangan media
                    pembelajaran interaktif. BIOWEB merupakan proyek yang saya kembangkan untuk
                    memudahkan siswa dalam memahami konsep sistem gerak manusia dengan pendekatan
                    yang lebih menarik dan interaktif.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-teal-100 flex items-center gap-4">
                  <MessageSquare className="w-5 h-5 text-teal-600" />
                  <span className="flex-1 block text-gray-600">
                    Hubungi untuk kerjasama atau pertanyaan seputar media pembelajaran
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorProfile