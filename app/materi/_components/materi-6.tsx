import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi6() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Jenis Tulang</Heading>
      <Paragraph>
        Menurut zat penyusunnya, tulang dapat dibedakan menjadi tulang rawan (kartilago) dan tulang keras (osteon). Secara fisik, kedua tulang ini memiliki ciri yang berbeda. Tulang rawan bersifat lentur dan warnanya terang, sementara tulang keras atau tulang sejati tidak lentur dan warnanya lebih keruh.
      </Paragraph>
      <Heading type="h2">1. Tulang Rawan (Kartilago)</Heading>
      <Paragraph>
        Tanpa tulang rawan, tentu tubuh kita akan terasa sakit bila melakukan kegiatan-kegiatan tertentu. Saat kita sedang tidur miring misalnya, bila tulang telinga kaku, kemungkinan besar bisa patah dan kenyamanan saat tidur tidak bisa kita rasakan.
      </Paragraph>
      <Paragraph>
        Selain pada telinga, tulang rawan juga terdapat pada daerah antar tulang belakang dan ujung hidung. Tulang rawan ini merupakan kumpulan jaringan tulang rawan yang disusun oleh sel-sel tulang. Sel tulang yang dimaksud yakni kondrosit. Kondrosit dibentuk oleh sel-sel tulang rawan yang masih muda dan disebut dengan kondroblas. Kemudian, tulang tersebut dibungkus oleh sebuah lapisan yang dinamakan perikondrium.
      </Paragraph>
      <Paragraph>
        Sel kondrosit penyusun tulang rawan berbentuk bulat besar dengan inti satu buah atau dua buah. Sel kondrosit ini berada dalam ruang-ruang yang disebut lakuna. Di dalam satu lakuna biasanya terdapat dua sel kondrosit.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Perbedaan tulang rawan pada anak dan pada orang dewasa"
        imageUrl="/materi-6/image-1.png"
        title="Gambar Perbedaan tulang rawan"
        className="object-contain"
      />
      <Paragraph>
        Khusus pada anak, tulang rawan mengandung banyak sel tulang yang berasal dari mesenkim. Sedangkan pada orang dewasa tulang rawan berasal dari perikondrium.
      </Paragraph>
      <Paragraph>
        Tulang rawan memiliki beberapa jenis tulang, meliputi tulang rawan hialin, tulang rawan serat (fibrosa), dan tulang rawan elastis. Tulang rawan hialin berwarna putih kebiruan dan bening. Tulang hialin dapat ditemukan pada semua rangka janin sebelum menjadi tulang keras, tulang rawan iga, dan saluran pernafasan.
      </Paragraph>
      <Paragraph>
        Adapun tulang rawan fibrosa, merupakan jenis tulang rawan yang berwarna buram keputihan dan strukturnya keras. Kita dapat menjumpai jenis tulang ini pada ruas-ruas tulang belakang. Semen- tara itu, tulang rawan elastin memiliki warna buram kekuningan dan strukturnya elastis. Tulang rawan elastin ini bisa kita temukan pada telinga luar, dan epiglotis.
      </Paragraph>
      <Heading type="h2">2. Tulang Sejati (Tulang Keras atau Osteon)</Heading>
      <Paragraph>
        Tidak seperti tulang rawan, tulang sejati (selanjutnya disebut tulang saja) memiliki sifat lebih keras, kuat, dan kaku, walaupun mampu sedikit tertekuk bila ada tekanan. Ini terjadi, sebab struk- turnya tersusun dari jaringan tulang yang mengandung sel tulang (osteosit) dan matriks.
      </Paragraph>
      <Paragraph>
        Osteosit dibentuk oleh osteoblas (sel pembentuk tulang). Se- lain osteoblas, pada jaringan tulang terdapat osteoklas yaitu sel-sel tulang yang berukuran besar dan intinya banyak. Fungsi osteoklas adalah memindahkan matriks dari tulang lama, dan selanjutnya menyediakan ruang untuk tulang baru.
      </Paragraph>
      <Paragraph>
        Matriks yang menyusun tulang tersusun atas beberapa zat, seperti semen, kolagen dan mineral. Semen merupakan zat pe- nyusun tulang yang mengandung karbohidrat. Sementara serabut kolagen merupakan zat yang menjadikan tulang tidak mudah rapuh. Adapun kerasnya tulang karena berisi mineral keras seperti kalsium fosfat (Ca(PO4)2) dan kalsium karbonat (CaCo3).
      </Paragraph>
      <Paragraph>
        Apabila matriks tulang tersusun padat dan rapat, maka ter- bentuklah tulang kompak. Namun, apabila susunan matriks membentuk rongga, maka terbentuklah tulang spons. Karena itu, tulang keras dibedakan menjadi dua, yaitu tulang kompak dan tulang spons (tulang berongga). Perhatikan Gambar 2.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Tulang spons dan tulang kompak"
        imageUrl="/materi-6/image-2.png"
        title="Gambar tulang spons dan tulang kompak"
        className="object-contain"
      />
      <Paragraph>
        Saat masih anak-anak, tulang yang kita miliki banyak mengan- dung zat perekat. Sedangkan beranjak dewasa, tulang tersebut memi- liki kandungan zat kapur yang sangat tinggi. Sehingga sangat wajar bila patah tulang yang dialami anak-anak lebih cepat pulih dibandingkan patang tulang yang dialami orang dewasa.
      </Paragraph>
    </div>
  )
}

export default Materi6