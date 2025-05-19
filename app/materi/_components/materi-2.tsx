import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi2() {
  return (
    <div className="space-y-4">
      <div>
        <Heading type="h1">Sistem Gerak - Rangka</Heading>
        <Paragraph>
          Tanpa tulang dan otot, manusia tidak dapat bergerak. Sebab, tulang merupakan alat gerak pasif, dan otot merupakan alat gerak aktif. Kerja sama tulang dan otot menghasilkan gerakan tubuh. Untuk itu, sub-subbab ini terkhusus membahas tentang tulang rangka, sementara pada sub-subbab berikutnya akan dibahas mengenai otot.
        </Paragraph>
      </div>
      <Paragraph>
        Sebenarnya rangka tubuh kita merupakan endo- skeleton (rangka dalam). Ini terbukti dari tinggi tubuh kita yang tingginya hanya beberapa sentimeter saat lahir. Namun seiring bertambahnya umur, tinggi kita pun bertambah. Artinya, rangka dalam tubuh mengalami pertumbuhan. Perhatikan gambar dibawah!
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Rangka tubuh manusia"
        imageUrl="/materi-2/image-1.png"
        title="Gambar rangka"
        className="object-contain"
      />
      <Paragraph>
        Di dalam tubuh, rangka kita tersusun oleh banyak tulang dengan berbagai bentuk dan ukuran. Tulang-tulang itu tersusun sedemikian rupa sehingga satu sama lain membentuk sendi. Tentu saja, rangka tersebut memiliki beragam fungsi. Tanpa rangka, bentuk dan ukuran tubuh kita tidak beraturan. Tanpa rangka pula, tubuh kita tidak dapat berdiri tegak dan alat-alat tubuh yang lunak tidak terlindungi. Ada- nya rangka, menjadikan otot-otot rangka dapat melekat, sel-sel darah merah terbentuk (hemopoesis) dan limfosit B juga dapat terbentuk.
      </Paragraph>
      <Paragraph>
        Selain itu, rangka menjadi tempat penyimpanan kalsium terutama fosfat, sehingga sewaktu diperlukan dapat dilepaskan dari darah. Lalu, satu yang terpenting dari fungsi rangka bagi tubuh adalah sebagai alat gerak pasif.
      </Paragraph>
    </div>
  )
}

export default Materi2