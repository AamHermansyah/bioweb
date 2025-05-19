import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi4() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Rangka Apendikuler</Heading>
      <Paragraph>
        Berbeda dengan rangka aksial, rangka apendikuler terkait langsung dengan sistem gerak. Karenanya, rangka apendikuler tersusun atas tulang anggota gerak atas dan tulang anggota gerak bawah. Uraian di bawah ini dapat kalian pahami.
      </Paragraph>
      <Heading type="h2">1. Tulang Anggota Gerak Atas</Heading>
      <Paragraph>
        Tulang anggota gerak atas manusia terdiri atas tulang bahu (pectoralis), tulang lengan atas (humerus), dan tulang lengan bawah.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Tulang bahu dan tulang anggota gerak atas"
        imageUrl="/materi-4/image-1.png"
        title="Gambar tulang bahu dan tulang anggota gerak atas"
        className="object-contain"
      />
      <Paragraph>
        Lihat pada Gambar 1 sebelah kiri merupakan tulang bahu yang terletak pada bagian kanan dan kiri tubuh. Tulangnya tersusun atas tulang selangka (clavicula) dan tulang belikat (scapula). Perhatikan Gambar 1 sebelah kanan. Tulang lengan atas yang hanya memiliki satu buah tulang. Sementara, tulang lengan bawah terdiri atas dua jenis tulang yaitu tulang hasta (ulna) dan tulang pengumpil (radius). Kedua tulang ini akan berhubungan dengan delapan tulang pergelangan tangan (carpal), lima tulang telapak tangan (metacarpal) dan empat belas tulang jari tangan (falanges).
      </Paragraph>
      <Heading type="h2">2. Tulang Anggota Gerak Bawah</Heading>
      <Paragraph>
        Pada manusia, tulang anggota gerak bawah meliputi tulang pinggul yang terdiri atas tulang duduk (iscium), tulang usus (ilium), dan tulang kemaluan (pubis). Penyusun tulang pinggul ini, masing-masing berada pada bagian kanan dan kiri tubuh.
      </Paragraph>
      <Paragraph>
        Pada tulang pinggul terdapat lekukan sebagai tempat melekatnya tulang paha. Lekukan itu dinamakan asetabulum. Perhatikan Gambar 2.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. Tulang pinggul pria dan tulang pinggul wanita"
        imageUrl="/materi-4/image-2.png"
        title="Gambar tulang pinggul pria dan tulang pinggul wanita"
        className="object-contain"
      />
      <Paragraph>
        Dengan adanya asetabulum, tulang paha atau tulang anggota gerak bawah dapat melekat pada tulang pinggul. Tulang paha akan tersam- bung dengan dua jenis tulang yakni tulang betis (fibula) dan tulang kering (tibia). Persambungan antar tulang ini dilakukan oleh suatu tu- lang yang disebut tulang tempurung lutut (patela). Kemudian, tulang betis dan tulang kering berhubungan dengan tujuh tulang pergelangan kaki (tarsal), lima tulang telapak kaki (metatarsal), dan empat belas tulang jari-jari kaki (falanges).
      </Paragraph>
      <IllustrationCard
        caption="Gambar 3. Tulang anggota gerak bawah kanan"
        imageUrl="/materi-4/image-3.png"
        className="object-contain"
      />
    </div>
  )
}

export default Materi4