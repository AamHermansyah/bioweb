import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi18() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Gangguan atau Kelainan pada Otot </Heading>
      <Paragraph>
        Tubuh kita dapat bergerak karena adanya otot. Apa yang akan terjadi jika otot kita terganggu? Seperti rangka, otot juga dapat meng- alami gangguan dan kelainan. Gangguan dan kelainan yang dapat terjadi pada otot adalah sebagai berikut.
      </Paragraph>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">1</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Atrofi</h4>
            <p>
              Pada penderita atropi, otot terlihat makin mengecil, lemah, dan kemampuan kontraksinya menurun. Penyebab atrofi adalah penyakit poliomielitis, suatu penyakit disebabkan oleh virus. Penyakit ini dapat menyebabkan saraf yang mengoordinasi otot-otot pada anggota gerak menjadi rusak.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">2</span>
          </div>
          <div className="ml-3 space-y-4">
            <h4 className="font-semibold">Hipertrofi</h4>
            <IllustrationCard
              caption="Gambar 1. Hipertropi pada otot"
              imageUrl="/materi-18/image-1.png"
              className="object-contain"
            />
            <p>
              Hipertropi merupakan kebalikan dari atrofi. Cirinya, otot berkem- bang menjadi lebih besar. Kelainan ini terjadi karena otot dilatih dengan beban berat secara terus menerus dan berlebihan. Biasanya terjadi pada atlet binaraga, orang yang sering berolah raga, atau pekerja berat yang memerlukan otot kuat.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">3</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Hernia Abdominal</h4>
            <p>
              Hernia abdominal adalah sobeknya dinding otot perut sehingga menyebabkan usus masuk ke dalam sobekan tersebut
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">4</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Distrofi Otot</h4>
            <p>
              Penyakit otot kronis yang menyebabkan gangguan gerak disebut distrofi otot. Penyakit ini diduga merupakan penyakit bawaan.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">5</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Kaku Leher (Stiff )</h4>
            <p>
              Kaku leher merupakan penyakit radang pada otot leher yang ber- akibat leher sakit dan leher juga terasa kaku. Kelainan ini terjadi karena kesalahan gerak.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
            <span className="text-teal-700 font-medium text-sm">6</span>
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Tetanus</h4>
            <p>
              Tetanus adalah penyakit yang berciri otot terus menerus berkon- traksi, sehingga otot menjadi kejang. Akibatnya, otot tak dapat berkon- traksi lagi. Penyebab tetanus adalah adanya infeksi pada luka oleh bakteri Clostridium tetani.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Materi18