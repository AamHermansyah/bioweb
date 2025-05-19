import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi15() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Gangguan Tulang Belakang</Heading>
      <Paragraph>
        Gangguan pada tulang belakang terjadi karena adanya perubahan posisi ruas-ruas tulang belakang, sehingga kelengkungan tulang be- lakang juga mengalami perubahan. Gangguan ini disebabkan oleh ke- biasaan duduk yang salah, atau bisa juga karena kecelakaan. Di bawah ini termasuk gangguan pada tulang belakang.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Beberapa gangguan pada tulang belakang"
        imageUrl="/materi-15/image-1.png"
        title="Gambar beberapa gangguan tulang belakang"
        className="object-contain"
      />
      <ul>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">1</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Kifosis</h4>
            <p>
              Kifosis adalah gangguan ruas-ruas tulang belakang yang terlalu membengkok ke belakang. Akibatnya, badan terlihat bongkok
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">2</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Lordosis</h4>
            <p>
              Lordosis adalah gangguan tulang belakang yang mengakibatkan bagian pinggang membengkok ke arah depan.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">3</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Skoliosis</h4>
            <p>
              Skoliosis adalah gangguan yang menjadikan tulang belakang membengkok ke arah samping kanan atau kiri.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">4</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Subluksasi</h4>
            <p>
              Subluksasi adalah gangguan tulang belakang bagian atas tepatnya segmen/ruas leher tertarik ke kanan atau ke kiri. Akibatnya, po- sisi kepala tidak lurus melainkan tertarik ke kiri atau ke kanan. Kelainan ini dapat terjadi karena kecelakaan atau gerakan terlalu kencang mendadak.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Materi15