import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi14() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Gangguan Fisiologis</Heading>
      <Paragraph>
        Penyebab tulang mengalami gangguan fisiologis adalah adanya keabnormalan fungsi hormon atau tulang kekurangan mineral dan vitamin. Gangguan fisiologis pada tulang di antaranya berikut ini.
      </Paragraph>
      <Heading type="h2">1. Rakhitis</Heading>
      <IllustrationCard
        caption="Gambar 1. Penderita rakhitis"
        imageUrl="/materi-14/image-1.png"
        title="Gambar penderita rakhitis"
        className="object-contain"
      />
      <Paragraph>
        Penyakit tulang ini dapat terjadi pada seseorang karena kekurangan vitamin D. Tulang yang kekurangan vitamin D memiliki kandungan zat kapur yang kurang, sehingga mengakibatkan struktur tulang menjadi tidak keras. Kerapkali penderita rakhitis memiliki tulang betis dan tulang kering (kaki bagian bawah) melengkung membentuk huruf X atau O.
      </Paragraph>
      <Heading type="h2">2.	Osteoporosis</Heading>
      <IllustrationCard
        caption="Gambar 2. (a) Tulang normal dan (b) tulang terkena osteoporosis"
        imageUrl="/materi-14/image-2.png"
        className="object-contain"
      />
      <Paragraph>
        Gejala yang dapat diamati pada osteoporosis adalah berkurangnya massa tulang. Hal ini terjadi karena seseorang kekurangan hormon kelamin. Dengan berkurangnya hormon tersebut, maka penyerapan bahan-bahan tulang dan oksifikasi berjalan lambat tulang menjadi rapuh dan mudah patah.
      </Paragraph>
      <Heading type="h2">3. Mikrosefalus</Heading>
      <Paragraph>
        Mikrosefalus merupakan gangguan pertumbuhan pada tulang tengkorak, sehingga kepala memiliki ukuran kecil. Pertumbuhan abnormal ini disebabkan kekurangan kalsium saat masih bayi. Kelainan ini diikuti adanya gangguan perkembangan mental.
      </Paragraph>
      <Heading type="h2">4. Penyakit Tulang</Heading>
      <Paragraph>
        Berbagai penyakit yang menyerang tulang dapat memicu terjadinya kelainan tulang. Penyakit tuberkulosis tulang dan penyakit tumor pada tulang, misalnya, dapat menyebabkan tekanan fisik dan fisiologis terhadap gerakan tubuh.
      </Paragraph>
    </div>
  )
}

export default Materi14