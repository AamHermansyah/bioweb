import React from 'react'

const movementSystemBenefits = [
  {
    title: 'Pemahaman Gerakan Tubuh',
    desc: 'Mempelajari sistem gerak membantu memahami bagaimana tubuh melakukan berbagai gerakan, dari berjalan hingga aktivitas olahraga yang kompleks.',
  },
  {
    title: 'Menjaga Postur & Keseimbangan',
    desc: 'Mempelajari sistem gerak membantu memahami pentingnya menjaga keseimbangan tubuh dan meningkatkan postur yang baik.',
  },
  {
    title: 'Mengenal Struktur Pendukung Gerak',
    desc: 'Sistem gerak terdiri dari tulang, otot, dan sendi. Memahami struktur ini membantu kita mengetahui perannya dalam mendukung pergerakan tubuh.',
  },
  {
    title: 'Pencegahan Cedera',
    desc: 'Pemahaman tentang sistem gerak dapat membantu mencegah cedera saat berolahraga atau melakukan aktivitas fisik lainnya.',
  },
  {
    title: 'Kesadaran Menjaga Kesehatan Gerak',
    desc: 'Dengan memahami sistem gerak, kita dapat lebih sadar pentingnya menjaga kesehatan tulang, otot, dan sendi melalui olahraga dan postur tubuh yang benar.',
  },
  {
    title: 'Meningkatkan Kualitas Hidup',
    desc: 'Menjaga sistem gerak yang sehat dapat meningkatkan kualitas hidup secara keseluruhan dengan mendukung aktivitas harian secara optimal.',
  },
];


function Benefit() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-teal-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Manfaat Mempelajari Sistem Gerak</h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            Mungkin kita sering berpikir, &quot;Ah, sistem gerak itu kan cuma tulang dan otot.&quot; Tapi, tahukah anda, ada banyak sekali rahasia dan manfaat yang tersembunyi di balik kemampuan tubuh kita untuk bergerak!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movementSystemBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-700 font-semibold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefit