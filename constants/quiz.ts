import { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Salah satu fungsi rangka adalah …. ",
    options: [
      "sebagai alat gerak aktif",
      "sebagai alat gerak pasif",
      "memperindah bentuk tubuh",
      "membantu tubuh bergerak",
      "sebagai tempat pertumbuhan"
    ],
    correctAnswer: 1,
    explanation: "Rangka berfungsi sebagai alat gerak pasif karena tidak dapat bergerak sendiri tanpa bantuan otot."
  },
  {
    id: 2,
    question: "Pada saat pengamatan rangka tubuh manusia, diperoleh data sebagai berikut (lihat Gambar). Yang termasuk tulang aksial adalah …. ",
    options: [
      "1, 3 dan 5",
      "2, 3 dan 6",
      "2, 4 dan 6",
      "3, 4 dan 5",
      "1, 2, dan 3"
    ],
    correctAnswer: 1,
    explanation: "Tulang aksial mencakup tulang yang berada di bagian sumbu tubuh, yaitu tulang dada, tulang rusuk, dan tulang dahi.",
    image: "/kuis/soal-2.png"
  },
  {
    id: 3,
    question: "Hubungan antara dua tulang dalam rangka tubuh disebut …. ",
    options: [
      "osifikasi",
      "abduksi",
      "adduksi",
      "artikulasi",
      "supinasi"
    ],
    correctAnswer: 3,
    explanation: "Artikulasi adalah nama lain dari persendian, yaitu tempat bertemunya dua tulang."
  },
  {
    id: 4,
    question: "Yang merupakan sendi pada lutut dan siku adalah nomor: ",
    options: ["1", "2", "3", "4", "5"],
    correctAnswer: 0, // disesuaikan jika gambar tersedia
    explanation: "Sendi lutut dan siku adalah sendi engsel. Nomor 1 diasumsikan sebagai gambar sendi engsel.",
    image: "/kuis/soal-4.png"
  },
  {
    id: 5,
    question: "Hubungan sinartrosis sinfibrosis pada tubuh terdapat pada …. ",
    options: [
      "tulang-tulang yang menyusun tulang tengkorak",
      "tulang dada dengan tulang rusuk",
      "tulang jari tangan dengan tapak tangan",
      "tulang panggul dengan tulang paha",
      "tulang lengan atas dengan lengan bawah"
    ],
    correctAnswer: 0,
    explanation: "Sinartrosis sinfibrosis adalah hubungan antartulang yang tidak bisa digerakkan, contohnya pada tulang tengkorak."
  },
  {
    id: 6,
    question: "Proses pembentukan tulang dari tulang rawan menjadi tulang keras dinamakan …. ",
    options: ["artikulasi", "osifikasi", "osilasi", "enversi", "abduksi"],
    correctAnswer: 1,
    explanation: "Osifikasi adalah proses pembentukan tulang keras dari tulang rawan."
  },
  {
    id: 7,
    question: "Sel-sel osteoblas terdapat pada bagian …. ",
    options: ["diafise", "rongga tulang", "epifise", "cakra epifise", "sumsum tulang"],
    correctAnswer: 3,
    explanation: "Osteoblas adalah sel pembentuk tulang yang berperan dalam proses osifikasi (pembentukan tulang baru)."
  },
  {
    id: 8,
    question: "Jaringan yang mengikat bagian luar ujung-ujung tulang yang membentuk persendian dan menjaga agar posisi tulang tidak berubah disebut …. ",
    options: ["tendon", "sarkomer", "kapsul sendi", "ligamen", "cairan sinovial"],
    correctAnswer: 3,
    explanation: "Ligamen menghubungkan tulang dengan tulang pada sendi dan membantu menjaga kestabilan sendi."
  },
  {
    id: 9,
    question: "Dari gambar di bawah yang diberi label X adalah bagian …. ",
    options: ["kapsul sendi", "tendon", "otot", "ligamen", "cairan sinovial"],
    correctAnswer: 4, // asumsi label X menunjuk ke cairan sinovial, ubah sesuai kebutuhan
    explanation: "Label X menunjuk cairan sinovial yang berfungsi melumasi sendi.",
    image: "/kuis/soal-9.png"
  },
  {
    id: 10,
    question: "Tendon otot yang melekat pada tulang dan berubah kedudukan saat digerakkan dinamakan …. ",
    options: ["fasia", "fasia propia", "origo", "insersio", "fleksor"],
    correctAnswer: 3,
    explanation: "Insersio adalah bagian ujung otot yang menempel pada tulang yang bergerak saat otot berkontraksi."
  }
];
