import { Award } from 'lucide-react'
import React from 'react'

function CompetenciesIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold ml-4">Kompetensi Dasar dan Indikator</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl border border-green-100">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Kompetensi Dasar</h3>
            <ul className="space-y-4">
              {[
                'Menganalisis hubungan antara struktur jaringan penyusun organ pada sistem gerak dan mengaitkannya dengan bioprosesnya sehingga dapat menjelaskan mekanisme gerak manusia',
                'Menyajikan hasil analisis tentang kelainan pada struktur dan fungsi sistem gerak yang menyebabkan gangguan sistem gerak manusia'
              ].map((competency, index) => (
                <li key={index} className="flex">
                  <span className="font-semibold text-teal-700 mr-2">{index + 1}.</span>
                  <span className="text-gray-700">{competency}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl border border-green-100">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Indikator Pencapaian</h3>
            <ul className="space-y-3">
              {[
                'Mengidentifikasi struktur dan fungsi rangka sebagai alat gerak pasif',
                'Menganalisis jenis-jenis tulang berdasarkan bentuk dan struktur',
                'Menjelaskan proses osifikasi (pembentukan tulang)',
                'Mengklasifikasikan jenis-jenis sendi pada rangka manusia',
                'Menganalisis struktur dan fungsi otot sebagai alat gerak aktif',
                'Menjelaskan mekanisme kontraksi otot',
                'Mengidentifikasi gangguan pada sistem gerak manusia'
              ].map((indicator, index) => (
                <li key={index} className="flex">
                  <span className="font-semibold text-teal-700 mr-2">{index + 1}.</span>
                  <span className="text-gray-700">{indicator}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetenciesIndicators