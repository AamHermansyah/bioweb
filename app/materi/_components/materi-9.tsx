import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi9() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Macam-Macam Gerak Karena Adanya Persendian</Heading>
      <Paragraph>
        Ingatkah kalian bahwa otot merupakan alat gerak aktif? Otot dapat menggerakkan tulang bukan? Otot yang dapat menggerakkan tulang adalah otot rangka. Otot rangka melekat pada rangka atau tulang. Tentunya, gerakan-gerakan tubuh ini juga didukung adanya persendian dalam tubuh. Beberapa tipe gerak otot karena peranan otot, rangka dan persendian meliputi: fleksi dan ekstensi, abduksi dan adduksi, elevasi dan depresi, supinasi dan pronasi, inversi dan eversi. Simak uraian berikut.
      </Paragraph>
      <Heading type="h2">1. Fleksi dan Ekstensi</Heading>
      <Paragraph>
        Fleksi adalah gerak anggota tubuh yang menekuk atau membeng- kok. Sebaliknya, ekstensi adalah gerak meluruskan anggota tubuh. Contoh gerak ini terjadi pada siku, lutut, dan ruas-ruas jari. Gerak ekstensi yang melebihi anatomi tubuh disebut hiperekstensi.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. (a) hiperekstensi, (b) ekstensi dan, (c) fleksi"
        imageUrl="/materi-9/image-1.png"
        className="object-contain"
      />
      <Heading type="h2">2.	Adduksi dan Abduksi</Heading>
      <Paragraph>
        Adduksi adalah gerak mendekati tubuh. Abduksi merupakan lawan dari adduksi yaitu menjauhi tubuh. Otot yang berperan adalah otot abduktor dan adduktor.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. (a) adduksi dan (b) abduksi pada gerak lengan"
        imageUrl="/materi-9/image-2.png"
        className="object-contain"
      />
      <Heading type="h2">3.	Elevasi dan Depresi</Heading>
      <IllustrationCard
        caption="Gambar 3. (a) Elevasi dan (b)	depresi"
        imageUrl="/materi-9/image-3.png"
        className="object-contain"
      />
      <Paragraph>
        Elevasi merupakan gerakan mengangkat, sebaliknya depresi meru- pakan gerak menurunkan. Contohnya, gerak membuka dan me- nutup mulut. Otot yang berperan pada gerak ini adalah elevator dan depressor. Untuk lebih jelasnya, perhatikan Gambar 3.
      </Paragraph>
      <Heading type="h2">4.	Supinasi dan Pronasi</Heading>
      <IllustrationCard
        caption="Gambar 4. (a) supinasi dan (b)	pronasi"
        imageUrl="/materi-9/image-4.png"
        className="object-contain"
      />
      <Paragraph>
        Supinasi adalah gerak menengadahkan atau membuka telapak tangan. Sebaliknya, pronasi merupakan gerak menelungkupkan atau membalik telapak tangan. Otot yang berperan pada gerak ini adalah supinator dan pronator. Cermati Gambar 4.
      </Paragraph>
      <Heading type="h2">5. Inversi dan Eversi</Heading>
      <IllustrationCard
        caption="Gambar 5. Gerak (a) inversi dan (b) eversi"
        imageUrl="/materi-9/image-5.png"
        className="object-contain"
      />
      <Paragraph>
        Inversi yaitu gerak memiringkan atau membuka telapak kaki ke arah dalam tubuh. Sedangkan eversi ialah gerak memiringkan atau membuka telapak kaki ke arah luar tubuh. Simak Gambar 5.
      </Paragraph>
    </div>
  )
}

export default Materi9