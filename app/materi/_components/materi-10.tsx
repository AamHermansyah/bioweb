import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import React from 'react'

function Materi10() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Otot</Heading>
      <Paragraph>
        Tanpa otot, tubuh kita hanya seperti kerangka yang tersusun atas tulang saja. Oleh karena itu, hampir setengah berat tubuh kita berasal dari otot, dan ada lebih dari 640 otot menyusun tubuh kita. Bebeber- apa otot penyusun tubuh manusia seperti diperlihatkan pada Gambar 1. Adanya kontraksi otot, membuat tulang tubuh kita bisa bergerak. Karena itulah, otot disebut dengan alat gerak aktif. Dalam kehidupan sehari-hari, seringkali kita mendengar istilah daging. Sebenarnya, yang dimaksud daging adalah otot.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Beberapa otot manusia"
        imageUrl="/materi-10/image-1.png"
        title="Gambar beberapa otot manusia"
        className="object-contain"
      />
      <Paragraph>
        Pergerakan tubuh kita sangat ditentukan oleh sistem rangka tubuh dan otot. Otot sebagai alat gerak aktif memiliki tiga kemampuan, yaitu kontraksibilitas, ekstenbilitas, dan elastisitas. Kontrakbilitas adalah kemampuan memendek hingga memiliki ukuran yang lebih pendek dari ukuran awal. Ini terjadi pada saat otot sedang kontraksi. Kemam- puan ekstenbilitas adalah kemampuan memanjangkan diri melebihi ukuran panjang awal. Sedangkan, elastisitas yaitu kemampuan otot untuk kembali pada ukuran semula.
      </Paragraph>
      <Paragraph>
        Selain memiliki kemampuan tersebut, otot juga tersusun atas berbagai struktur, gerakan, dan berbagai tipe. Simak dan pahami uraian berikut.
      </Paragraph>
      <Heading type="h2">1. Struktur Otot</Heading>
      <Paragraph>
        Otot tersusun atas beberapa lapisan. Tepat di bawah kulit kita terdapat otot yang disebut lapisan luar atau superfisial. Di bawahnya terdapat lapisan tengah, dan di bawahnya lagi terdapat lapisan bagian dalam.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 2. Struktur otot"
        imageUrl="/materi-10/image-2.png"
        title="Gambar struktur otot"
        className="object-contain"
      />
      <Paragraph>
        Sebuah otot memiliki berkas-berkas serat yang panjang dan tipis (miofiber) dengan ketebalan seperti rambut manusia. Setiap serat mengandung bagian-bagian tertentu yang lebih tipis disebut miofibril (fibril otot). Setiap fibril mempunyai bagian lebih sempit lagi, yang dinamakan miofilamen. Ada dua jenis filamen, yakni aktin yang tipis dan miosin yang tebal. Berbagai filamen ini saling bergeseran satu sama lain sehingga fibril memendek dan menyebabkan seluruh otot berkontraksi. Untuk mencermati struktur otot, lihat Gambar 2.
      </Paragraph>
      <Paragraph>
        Pada bagian ujung-ujung otot terdapat simpul keras berwarna putih yang disebut tendon. Tendon seperti tali, yang menghubungkan antara tulang dan otot. Di dalam otot juga terdapat pembuluh darah dan saraf. Fungsi saraf yakni membawa pesan dari otak untuk mengendalikan otot.
      </Paragraph>
      <Heading type="h2">2. Sifat Gerak Otot</Heading>
      <Paragraph>
        Sebuah otot mampu menarik atau berkontraksi dengan kuat, namun tidak dapat memanjang dan mendorong dengan kuat. Karena itu, otot bekerja secara berpasangan, yaitu pasangan berlawanan atau gerak antagonis. Satu otot menarik tulang menjauh, sementara pasangan otot lainnya menarik otot ke arah yang berlawanan. Pasangan otot ini akan bekerja sama dengan berbagai pasangan otot yang lain sebagai kelompok besar otot atau sistem gerak pasif. Sebagai contoh, otot bisep dan otot trisep. Saat otot bisep berkontraksi memendek, maka otot trisep berelaksasi/memanjang (disebut juga gerak ekstensi). Sebaliknya, saat otot trisep berkontraksi, otot bisep berelaksasi. Dengan demikian, otot bisep dapat kita sebut sebagai fleksor dan otot trisep sebagai ekstensor. Cermati sifat gerak otot bisep dan trisep pada Gambar 3.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 3. Gerak berlawanan pada otot bisep dan trisep"
        imageUrl="/materi-10/image-2.png"
        className="object-contain"
      />
      <Paragraph>
        Selain bekerja secara berlawanan, otot dapat bekerja secara sinergis sehingga saling menunjang. Misalnya, otot-otot tulang rusuk yang bekerja sama saat kita melakukan pernapasan.
      </Paragraph>
    </div>
  )
}

export default Materi10