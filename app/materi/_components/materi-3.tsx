import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi3() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Rangka Aksial</Heading>
      <Paragraph>
        Rangka aksial merupakan jenis rangka yang tidak lang- sung terkait dengan sistem gerak. Karena itu, tugasnya adalah melindungi organ-organ yang berada dalam tubuh, semisal otak, jantung, paru-paru, dan organ dalam lainnya. Rangka aksial manusia terdiri atas tengkorak, tulang dada, dan tulang rusuk. Penjelasannya dapat kalian simak pada uraian berikut.
      </Paragraph>
      <Heading type="h2">1. Tengkorak</Heading>
      <Paragraph>
        Keberadaan tulang tengkorak begitu penting bagi ke- pala kita. Sebab, adanya tengkorak menjadikan isi kepala terlindungi. Tidak salah bila tengkorak tersusun oleh banyak tulang. Tulang pe- nyusun tengkorak tersebut adalah tulang tempurung kepala (cranium) dan tulang muka.
      </Paragraph>
      <Paragraph>
        Tulang tempurung kepala terdiri atas tulang kepala belakang (osipital), tulang baji (shenoid), tulang tapis (ethmoid), tulang pelipis (temporal), tulang ubun- ubun (parietal), dan tulang dahi (frontal). Perhatikan gambar dibawah!
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Tulang tengkorak dan bagian bagiannya"
        imageUrl="/materi-3/image-1.png"
        title="Gambar tengkorak"
        className="object-contain"
      />
      <Paragraph>
        Sementara itu, tulang muka tersusun oleh tulang rahang atas (maksila), tulang rahang bawah (mandibula), tulang hidung (nasal), tulang air mata (lakrimal), tulang pipi (zigomatik) dan tulang langit-langit (palatum). Dari tulang muka ini akan terbentuk rongga mata, rongga hidung, dan wajah.
      </Paragraph>
      <Heading type="h2">2. Ruas Ruas Tulang Belakang</Heading>
      <Paragraph>
        Ruas-ruas tulang belakang (vertebrae) manusia terdiri atas 34 ruas. Setiap ruas tulang belakang ini memiliki kemung- kinan bergerak walaupun sedikit. Sehingga, adanya gerakan tersebut menjadikan tubuh kita tidak kaku.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. Tulang belakang"
        imageUrl="/materi-3/image-2.png"
        title="Gambar tulang belakang"
        className="object-contain"
      />
      <Paragraph>
        Berdasarkan letaknya, tulang belakang tersusun atas beberapa bagian, meliputi 7 ruas tulang leher (cer- vijalis); 12 ruas tulang punggung (thoraxalis); 5 ruas tulang pinggang (lumbalis); tulang kelangkang yang merupakan gabungan tulang kemudi terdiri atas 5 ruas tulang kelangkang (sacrum) dan 4 ruas tulang ekor (cocsigeus).
      </Paragraph>
      <Heading type="h2">3. Tulang Dada (Sternum)</Heading>
      <Paragraph>
        Tulang dada manusia meliputi bagian kepala (manubrium), badan (corpus) dan ekor (processus xiphoideus = taju pedang) yang berupa tulang rawan. Bagian kepala adalah tempat melekatnya tulang selangka (clavicula) dan tulang rusuk nomer satu. Sementara, tulang rusuk yang lain melekat pada bagian badan. Lihat Gambar 3.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 3. Tulang data dan tulang rusuk"
        imageUrl="/materi-3/image-3.png"
        title="Gambar tulang data dan tulang rusuk"
        className="object-contain"
      />
      <Heading type="h2">4. Tulang Rusuk</Heading>
      <Paragraph>
        Tulang rusuk berjumlah 12 pasang. Tulang rusuk pertama bagian depan melekat pada bagian kepala tulang dada dan bagian belakangnya melekat pada tulang belakang. Perhatikan Gambar 3.
      </Paragraph>
      <Paragraph>
        Tulang rusuk dikelompokkan menjadi tiga macam yaitu tu- lang rusuk sejati (costa vera), tulang rusuk palsu (costa spuria), dan tulang rusuk melayang (costa fluktuantes). Masing- masing tulang ini terdiri atas 7 pasang tulang rusuk sejati yang ujung depannya melekat pada tulang dada, sedangkan ujung belakang melekat pada tulang belakang. Kemudian, tulang rusuk palsu 3 pasang yang ujung belakangnya me- lekat pada tulang belakang dan ujung depannya melekat pada tulang rusuk di atasnya. Terakhir, 2 pasang tulang rusuk melayang yang ujung belakangnya melekat pada tulang belakang, adapun ujung depannya tidak melekat atau bebas.
      </Paragraph>
    </div>
  )
}

export default Materi3