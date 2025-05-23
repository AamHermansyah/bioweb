import { BookOpen } from 'lucide-react'
import React from 'react'

const learningGoals = [
  'Peserta didik mampu menjelaskan jenis-jenis rangka pada manusia melalui gambar, video, dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan proses pembentukan tulang (osifikasi) melalui video dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan hubungan antar tulang (persendian) melalui gambar, video, dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan macam-macam gerak pada manusia melalui gambar dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan jenis-jenis otot sistem gerak pada manusia melalui gambar, video, dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan mekanisme gerak otot pada manusia melalui gambar, video, dan kajian literatur dengan tepat.',
  'Peserta didik mampu menjelaskan gangguan/kelainan pada sistem gerak manusia melalui gambar dan kajian literatur dengan tepat.'
];

function LearningObjectives() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-green-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="sticky top-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold ml-4">Capaian Pembelajaran</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mt-3">
                Pada Fase F, Peserta didik mampu memahami keterkaitan struktur organ pada sistem organ dengan fungsinya dalam merespons stimulus internal dan eksternal.
              </p>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
              <h3 className="text-xl font-semibold mb-6">
                Tujuan Pembelajaran:
              </h3>

              <div className="space-y-6">
                {learningGoals.map((goal, index) => (
                  <div key={`lg-${index}`} className="flex">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 font-medium">{index + 1}</span>
                    </div>
                    <p className="ml-4 text-gray-700">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LearningObjectives