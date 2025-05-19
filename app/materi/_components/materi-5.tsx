import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi5() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Pengantar</Heading>
      <Paragraph>
        Setelah kalian memahami uraian tentang rangka, kemungkinan kalian bisa menghitung jumlah tulang penyusun rangka tersebut. Dari kepala sampai jari kaki, orang dewasa mempunyai 206 tulang. Namun, rangka bayi justru memiliki jumlah lebih dari 340 tulang. Penyebabnya adalah saat tubuh bagi tumbuh, beberapa tulang yang terpisah menyatu membentuk satu tulang.
      </Paragraph>
      <Paragraph>
        Tulang-tulang tersebut merupakan jaringan ikat yang tersusun dari matriks tulang. Matriks ini mengandung garam-garam organik yang mengalami mineralisasi.
      </Paragraph>
      <Paragraph>
        Menurut para ahli, komponen tulang terdiri atas air sebanyak 25%, zat organik berupa serabut sebanyak 30%, dan 45% meliputi zat mineral kalsium fosfat dan garam magnesium. Saat terjadi infeksi atau cidera, tulang akan segera mengalami pemulihan. Ini terjadi karena tu- lang memiliki daya regenerasi (pemulihan diri) yang sangat besar.
      </Paragraph>
      <Heading type="h1">Bentuk Tulang</Heading>
      <Paragraph>
        Berdasarkan bentuknya, tulang dibedakan menjadi empat jenis meliputi tulang pipa, tulang pipih, tulang pendek, dan tulang tak beraturan. Penjelasan berbagai bentuk tulang tersebut dapat kalian simak pada uraian berikut.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Tulang berdasarkan bentuknya"
        imageUrl="/materi-5/image-1.png"
        title="Gambar tulang berdasarkan bentuk"
        className="object-contain"
      />
      <Heading type="h2">1. Tulang Pipa (Tulang Panjang)</Heading>
      <Paragraph>
        Disebut tulang pipa karena tulang tersebut ber- bentuk seperti pipa dengan kedua ujungnya yang bulat. Ujung tulangnya yang berbentuk bulat dan tersusun atas tulang rawan disebut epifise. Sedangkan bagian tengah tulang pipa yang berbentuk silindris dan berongga disebut diafise. Di antara epifise dan diafise terdapat bagian yang disebut metafise. Metafise tersusun atas tulang rawan. Bagian metafise ini terdapat cakra epifise, yang memiliki ke- mampuan memanjang.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. Tulang pipa"
        imageUrl="/materi-5/image-2.png"
        title="Gambar tulang pipa"
        className="object-contain"
      />
      <Paragraph>
        Di dalam rongga tulang pipa, terdapat bagian yang disebut sumsum tulang. Sumsum tulang tersusun dari pem- buluh darah dan pembuluh saraf. Tulang pipa memiliki dua sumsum tulang yakni sumsum tulang merah dan kuning. Tempat sel-sel darah dibentuk berada di dalam sumsum tulang merah. Adapun tempat pembentukan sel-sel lemak terdapat pada sumsum tulang kuning. Saat kita masih bayi, hampir seluruh tulang mengandung sumsum merah. Namun, saat mulai tumbuh, beberapa di antaranya berubah menjadi sumsum tulang kuning.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 3. Struktur tulang pipa"
        imageUrl="/materi-5/image-3.png"
        title="Gambar struktur tulang pipa"
        className="object-contain"
      />
      <Paragraph>
        Selain sumsum, pada tulang pipa juga terdapat bagian lainnya, misalnya bagian luar yang keras disebut cangkang. Kemudian tulang pipa juga memiliki lapisan periostum yang menyelimuti seluruh tulang. Bagian tubuh yang memiliki tu- lang pipa meliputi tulang paha, tulang hasta, tulang lengan atas, tulang pengumpil, tulang betis, dan tulang kering.
      </Paragraph>
      <Heading type="h2">2. Tulang Pendek</Heading>
      <Paragraph>
        Tulang pendek memiliki bentuk mirip kubus, pendek tak beraturan, atau bulat. Adanya tulang ini dimungkinkan goncangan yang keras dapat diredam dan gerakan tulang yang bebas dapat dilakukan. Sebagai contoh, tulang telapak kaki dan telapak tangan.
      </Paragraph>
      <Heading type="h2">3. Tulang Pipih</Heading>
      <Paragraph>
        Tulang pipih bentuk gepeng dan berupa lempengan- lempengan lebar. Tulang pipih ini tersusun atas dua lapisan tulang kompak yaitu lamina eksterna dan interna ossis karnii. Di antara dua lapisan ini terdapat lapisan spongiosa yang dina- makan diploe. Peran tulang pipih adalah melindungi struktur tubuh yang berada di bawahnya. Contoh tulang pipih adalah tulang tengkorak, tulang rusuk, dan tulang belikat.
      </Paragraph>
      <Heading type="h2">4. Tulang Tak Beraturan</Heading>
      <Paragraph>
        Dari namanya saja kita tentu tahu, bila tulang ini memi- liki bentuk tidak beraturan. Contohnya dapat kita temukan pada tulang rahang dan ruas tulang belakang.
      </Paragraph>
    </div>
  )
}

export default Materi5