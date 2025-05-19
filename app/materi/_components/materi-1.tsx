import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import { Info } from 'lucide-react'
import React from 'react'

function Materi1() {
  return (
    <div className="space-y-4">
      <div>
        <Heading type="h1">Pengantar Sistem Gerak Pada Manusia</Heading>
        <Paragraph>
          Untuk menjaga kesehatan, kita perlu melakukan aktivitas yang memicu keluarnya keringat. Bentuknya beragam, mulai dari jalan santai, lari kecil, hingga olahraga berat. Saat berolahraga, tubuh biasanya akan berkeringat. Keringat yang keluar merupakan hasil dari proses pembakaran zat-zat berguna dalam otot.
        </Paragraph>
        <Paragraph>
          Gerakan tubuh terjadi karena otot berkontraksi. Kontraksi otot inilah yang memungkinkan anggota tubuh bergerak sesuai keinginan kita. Namun, tahukah kalian apa yang membuat tubuh bisa bergerak dengan leluasa? Adakah sistem dalam tubuh yang mengatur setiap gerakan kita?
        </Paragraph>
      </div>

      {/* Gambar ilustrasi */}
      <IllustrationCard
        caption="Gambar 1. Orang yang sedang bermain basket"
        imageUrl="/materi-1/image-1.png"
        title="Orang bermain basket"
      />

      <Paragraph>
        Pada pembahasan berikut, kita akan mempelajari sistem gerak pada tubuh manusia. Di dalamnya, kita akan mengenal struktur, fungsi, serta proses yang terjadi dalam sistem gerak, termasuk berbagai kelainan atau penyakit yang dapat memengaruhinya.
      </Paragraph>

      <Paragraph>
        Dengan mempelajari materi ini, kalian diharapkan mampu menjelaskan keterkaitan antara struktur, fungsi, dan proses dalam sistem gerak manusia. Selain itu, kalian juga diharapkan memahami berbagai kelainan atau penyakit yang berkaitan dengan sistem gerak dalam kehidupan sehari-hari, serta mengetahui teknologi yang dapat digunakan untuk mengatasinya.
      </Paragraph>

      <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2 text-teal-700" />
          Kata Kunci
        </h4>
        <ul className="space-y-3">
          {[
            'Sistem Gerak',
            'Tulang Rangka',
            'Otot',
            'Artikulasi (Persendian)',
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                <span className="text-teal-700 font-medium text-sm">{index + 1}</span>
              </div>
              <div className="ml-3">
                <p className="font-medium">{item}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Materi1