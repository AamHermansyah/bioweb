import Heading from '@/components/heading'
import IllustrationCard from '@/components/illustration-card'
import Paragraph from '@/components/paragraph'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Materi12() {
  return (
    <div className="space-y-4">
      <Heading type="h1">Mekanisme Gerak Otot</Heading>
      <Paragraph>
        Menurut para ahli, mekanisme gerak otot polos dan otot jantung sama dengan mekanisme otot rangka. Sel otot rangka mengandung filamen halus yang tipis dan filamen kasar yang tebal. Filamen adalah suatu protein otot. Filamen halus terdiri atas dua aktin dan satu pro- tein regulator (pengatur) yaitu berupa tropomiosin dan tropoponin kompleks. Protein regulator ini melilit aktin. Sementara, filamen kasar berupa miosin. Adanya filamen halus dan kasar, menyebabkan otot rangka terlihat gelap dan terang.
      </Paragraph>
      <Paragraph>
        Unit gelap terang pada otot rangka disebut sarkomer. Sarkomer yang satu dengan sarkomer yang lain dibatasi oleh garis Z (lihat Gambar 1). Garis Z melekat pada filamen halus/terang, sedangkan filamen kasar berada di bagian tengah sarkomer. Pada pita A, sebagian filamen kasar dan filamen halus saling tumpang tindih. Zona H adalah bagian dari pita A yang hanya mengandung pita kasar (miosin). Pita I berada pada ujung sarkomer dan dekat dengan garis Z. Pita I hanya terdiri atau filamen halus (aktin) saja. Agar kalian bisa memahaminya, coba kalian perhatikan kembali struktur otot rangka pada Gambar 1 berikut.
      </Paragraph>
      <IllustrationCard
        caption="Gambar 1. Mekanisme gerak otot pada lengan manusia"
        imageUrl="/materi-12/image-1.png"
        title="Gambar mekanisme gerak otot"
        className="object-contain"
      />
      <Paragraph>
        Saat otot berkontraksi, sarkomer lebih pendek (mereduksi), se- hingga jarak garis Z yang satu ke garis Z yang lain makin berdekatan. Kontraksi otot ini tidak membuat panjang pita A berubah, namun justru pita I yang menjadi pendek dan zona H menjadi hilang. Fila- men aktin dan miosin tidak mengalami perubahan panjang, namun bergabung membentuk aktomiosin. Kejadian ini dinamakan teori pergeseran (luncuran) filamen kontraksi otot.
      </Paragraph>
      <Paragraph>
        Sementara itu, saat sel-sel otot beristirahat (relaksasi), tempat pengikatan miosin pada filamen halus dihambat, sehingga tidak ber- gabung membentuk aktomiosin. Protein penghambat pengikatan mio- sin ini disebut protein regulator tropomiosin.
      </Paragraph>
      <Paragraph>
        Nah, supaya sel otot dapat berkontraksi, tentu dibutuhkan makan- an khusus. Makanan itu berupa energi dan ion Ca2+. Energi kontraksi otot berupa ATP (adenin trifosfat), yang diperoleh secara aerob dan anaerob. Saat anaerob, dalam sel otot terjadi dua proses yaitu pengu- raian fosfat kreatin dan fermentasi. Sedangkan saat aerob, dalam sel otot terjadi proses respirasi seluler.
      </Paragraph>
      <Paragraph>
        Saat otot berelaksasi/istirahat, kreatin mengikat fosfat sehingga terbentuklah fosfat kreatin yang banyak mengandung energi. Pelepasan fosfat disertai dengan pelepasan energi kerapkali terjadi pada pertenga- han pergeseran filamen. Karena itu, proses ini merupakan cara tercepat dalam pemenuhan kebutuhan energi untuk kontraksi otot. Energi yang diperoleh ini tidak bisa digunakan secara langsung, namun harus diubah terlebih dahulu.
      </Paragraph>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-4">
          <span>ADP</span>
          <MoveRight />
          <span>ATP</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Pospat kreatin</span>
          <MoveRight />
          <span>Kreatin</span>
        </div>
      </div>
      <Paragraph>
        Untuk proses fermentasi, energi dihasilkan dari glukosa yang diu- raikan menjadi asam laktat. Prosesnya sebagai berikut.
      </Paragraph>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-4">
          <span>ADP</span>
          <MoveRight />
          <span>ATP</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Glukosa</span>
          <MoveRight />
          <span>Asam laktat</span>
        </div>
      </div>
      <Paragraph>
        Apabila asam laktat hasil fermentasi banyak tertimbun dalam se- rabut-serabut otot, maka fungsi enzim yang bekerja dalam sitoplasma kemungkinan terganggu. Ini terjadi karena sitoplasma bersifat asam. Kemudian, jika kejadian ini dibiarkan berlangsung terus menerus, otot kita dapat mengalami kejang/kram dan kelelahan.
      </Paragraph>
      <Paragraph>
        Adapun untuk proses respirasi sel, energi yang dibentuk berlang- sung di dalam mitokondria. Di dalam sel otot, tersimpan glikogen dan lemak yang merupakan sumber ATP terbesar saat otot berkontraksi. Bahasan ini akan lebih lengkap dibahas, saat kita mempelajari bab me- tabolisme sel. Sementara reaksi yang terjadi saat terjadi respirasi sel, secara singkat dapat digambarkan dengan persamaan berikut.
      </Paragraph>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-4">
          <span>ADP</span>
          <MoveRight />
          <span>ATP</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Glukosa + O<sub>2</sub></span>
          <MoveRight />
          <span>CO<sub>2</sub> + H<sub>2</sub>O</span>
        </div>
      </div>
    </div>
  )
}

export default Materi12