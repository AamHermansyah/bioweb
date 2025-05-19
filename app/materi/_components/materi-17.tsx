import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi17() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Infeksi Sendi</Heading>
      <Paragraph>
        Infeksi sendi dapat terjadi karena adanya infeksi kuman yang menyerang sendi. Misalnya, infeksi gonorhe dan sifilis, kemudian juga layuh semu. Infeksi gonorhoe dan sifilis diakibatkan oleh kuman gonorhoe dan sifilis yang menyerang persendian sehingga persendian menjadi kaku.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Penderita layuh semu pada kaki"
        imageUrl="/materi-17/image-1.png"
        title="Gambar penderita layuh semu"
        className="object-contain"
      />
      <Paragraph>
        Sementara layuh semu disebabkan oleh kuman sifilis yang menyerang cakra epifisise. Cakra epifisise adalah daerah pemanjangan tulang. Infeksi sifilis ini terjadi pada seseorang sejak dalam kandungan. Akibatnya, bayi yang lahir memiliki tulang yang tak bertenaga (layuh).
      </Paragraph>
    </div>
  )
}

export default Materi17