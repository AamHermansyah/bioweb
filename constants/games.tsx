import { Gamepad2, Bone, Dumbbell } from 'lucide-react';

export const games = [
  {
    id: 'movement-simulator',
    title: 'Simulator Gerakan',
    description: 'Identifikasi jenis gerakan dan otot yang digunakan dalam berbagai aktivitas tubuh.',
    icon: <Gamepad2 className="w-10 h-10 text-blue-200" />,
    difficulty: 'Sedang',
    timeEstimate: '3-5 menit',
    skills: ['Pengenalan Gerakan', 'Identifikasi Otot', 'Analisis Fungsi'],
    highlights: 'Pelajari bagaimana otot dan sendi bekerja sama untuk menciptakan gerakan tubuh.',
    path: '/games/simulator',
    color: 'from-blue-500 to-teal-600',
    bgClass: 'bg-gradient-to-br from-blue-50 to-teal-50'
  },
  {
    id: 'muscle-matching',
    title: 'Mencocokkan Otot',
    description: 'Cocokkan setiap jenis otot dengan fungsinya yang tepat dalam sistem gerak manusia.',
    icon: <Dumbbell className="w-10 h-10 text-emerald-200" />,
    difficulty: 'Mudah',
    timeEstimate: '2-4 menit',
    skills: ['Fungsi Otot', 'Jenis Otot', 'Anatomi Pada Otot'],
    highlights: 'Kenali berbagai jenis otot dan bagaimana fungsi mereka mendukung gerakan tubuh.',
    path: '/games/pasangkan-otot',
    color: 'from-emerald-500 to-green-600',
    bgClass: 'bg-gradient-to-br from-emerald-50 to-green-50'
  },
  {
    id: 'bone-flip-match',
    title: 'Cocokkan Tulang',
    description: 'Balik dan cocokkan pasangan gambar tulang yang sesuai. Temukan semua pasangan dan pelajari fungsi tiap tulang!',
    icon: <Bone className="w-10 h-10 text-amber-200" />,
    difficulty: 'Sedang',
    timeEstimate: '2-5 menit',
    skills: ['Memori Visual', 'Anatomi Tulang', 'Pengenalan Bentuk'],
    highlights: 'Balik kartu untuk menemukan pasangan gambar tulang yang cocok. Setelah cocok, pelajari fungsi dan posisinya dalam tubuh manusia.',
    path: '/games/cari-tulang',
    color: 'from-amber-500 to-orange-600',
    bgClass: 'bg-gradient-to-br from-amber-50 to-orange-50'
  }
];