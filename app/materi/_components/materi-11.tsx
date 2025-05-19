import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi11() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Jenis Jenis Otot</Heading>
      <Paragraph>
        Saat kita memakan masakan rendang daging sapi yang lezat, maka seiris daging itulah yang dinamakan otot. Ingatkah kalian bahwa jaring- an otot tersusun oleh sel-sel otot? Berdasarkan letaknya, otot manusia dibedakan menjadi tiga jenis yaitu otot rangka (otot lurik), otot polos, dan otot jantung. Simak uraiannya sebagai berikut.
      </Paragraph>
      <Heading type="h2">1. Otot Rangka (Otot Lurik)</Heading>
      <Paragraph>
        Menurut para ahli, otot rangka merupakan komponen utama penyusun tubuh kita. Otot ini melekat pada rangka (tulang). Oleh karena itu, dinamakan otot rangka. Adanya kemampuan otot un- tuk berkontraksi dan berelaksasi menjadikan rangka tubuh kita bergerak. Perhatikan Gambar 1.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Perlekatan otot rangka dan bagian-bagian otot rangka"
        imageUrl="/materi-11/image-1.png"
        className="object-contain"
      />
      <Paragraph>
        Otot rangka yang terdapat pada lengan atas memiliki jenis otot bisep dan otot trisep. Otot bisep memiliki dua buah tendon, satu melekat pada tulang pengumpil, dan satu lainnya melekat pada tulang belikat. Perlekatan ujung tendon otot bisep pada tu- lang belikat yakni tulang yang tak berubah posisinya pada saat otot berkontraksi, yang disebut origo. Adapun ujung tendon yang lainnya melekat pada tulang pengumpil yakni tulang yang berubah posisinya saat otot berkontraksi yang disebut insersio.
      </Paragraph>
      <Paragraph>
        Gerakan kita sehari-hari seperti menulis, makan, menekuk jari, menekuk tangan, berjalan adalah contoh gerakan otot rangka. Gerakan ini semua diatur oleh pusat saraf (otak) dan terjadi menu- rut kehendak kita atau sadar. Karena itu, otot yang melakukannya disebut otot sadar.
      </Paragraph>
      <Heading type="h2">2. Otot Polos</Heading>
      <Paragraph>
        Otot polos tersusun atas jaringan yang berasal dari kumpulan sel-sel otot polos. Sel otot polos berbentuk gelendong, intinya satu di tengah, dan tidak memiliki garis-garis gelap terang seperti otot lurik. Cermati Gambar 2. Gerak otot polos tidak disadari atau tidak menurut kehendak kita sehingga disebut otot tidak sadar/otot tak sadar.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. Otot polos pada saluran pencernaan"
        imageUrl="/materi-11/image-2.png"
        title="Gambar otot polos pada saluran pencernaan"
        className="object-contain"
      />
      <Paragraph>
        Otot polos terdapat pada dinding alat-alat dalam, seperti pada saluran pernafasan, saluran pencernaan, saluran reproduksi, pembuluh darah dan getah bening, dan juga saluran air seni.
      </Paragraph>
      <Heading type="h2">3. Otot Jantung</Heading>
      <Paragraph>
        Pada otot jantung dinamakan juga miokardium. Sesuai namanya, otot ini hanya terdapat jantung, tepat- nya dinding jantung. Sel-sel otot jantung memiliki satu inti sel dan mirip otot rangka. Satu sel otot jantung membentuk anyaman yang disebut sinsitium.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 3. Otot polos pada saluran pencernaan"
        imageUrl="/materi-11/image-3.png"
        title="Gambar otot polos pada saluran pencernaan"
        className="object-contain"
      />
      <Paragraph>
        Pada setiap percabangan terdapat jaringan ikat yang disebut diskus interkalaris. Simak Gambar 4.28. Gerak otot jantung tidak menurut kehendak kita atau tidak kita sadari, namun dikendalikan oleh saraf otonom, sehingga disebut gerak tak sadar.
      </Paragraph>
    </div>
  )
}

export default Materi11