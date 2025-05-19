import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi13() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Gangguan Mekanik</Heading>
      <Paragraph>
        Gangguan mekanik pada tulang merupakan jenis gangguan yang banyak kita jumpai. Gangguan ini kebanyakan disebabkan adanya benturan atau tekanan dari luar tubuh, misalnya tekanan atau benturan saat terjadi kecelakaan dan pukulan. Gangguan ini bisa berbentuk fraktura (patah tulang) atau retak.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Jenis-jenis fraktura"
        imageUrl="/materi-13/image-1.png"
        title="Gambar jenis-jenis fraktura"
        className="object-contain"
      />
      <Paragraph>
        Fraktura dapat dibedakan menjadi fraktura sederhana, fraktura sebagian, fraktura kompleks, dan fraktura berganda. Kalian dapat memahami keempat macam fraktura ini dengan mencermati Gambar 1 di atas.
      </Paragraph>
      <Heading type="h2">1.	Fraktura Sederhana</Heading>
      <Paragraph>
        Pada gangguan jenis ini, tulang mengalami retak atau patah. Namun posisi patahan belum bergeser dari posisi awal dan tidak melukai otot yang ada di sekitarnya.
      </Paragraph>
      <Heading type="h2">2.	Fraktura Sebagian</Heading>
      <Paragraph>
        Fraktura sebagian atau greenstick adalah retak tulang yang tidak terjadi pada keseluruhan tulang, hanya sebagian saja. Apabila keretakan terjadi pada tulang pipa, hanya sebagian diameternya saja yang mengalaminya dan tulang tidak terpisah.
      </Paragraph>
      <Heading type="h2">3.	Fraktura Kompleks</Heading>
      <Paragraph>
        Posisi tulang telah benar-benar terpisah saat terjadi gangguan ini. Otot di sekitar tulang yang patah terlukai. Pada kondisi yang berat, terkadang tulang dapat menembus otot di sekitarnya dan muncul di permukaan kulit. Hal ini terjadi jika ujung tulang yang patah bentuknya runcing. Gangguan ini disebut juga fraktura terbuka.
      </Paragraph>
      <Heading type="h2">4.	Fraktura Berganda</Heading>
      <Paragraph>
        Pada patah tulang jenis ini, tulang terbagi menjadi beberapa bagian, namun masih terlindungi oleh otot. Fraktura berganda disebut juga dengan comminuted.
      </Paragraph>
      <Paragraph>
        Berdasarkan uraian tersebut, sangat wajar bila penderita gangguan tulang akibat berbagai jenis fraktura itu bisa mengalami rasa sakit yang sangat perih.
      </Paragraph>
    </div>
  )
}

export default Materi13