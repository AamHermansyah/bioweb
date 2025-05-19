import React from 'react'

function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-green-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fitur Pembelajaran</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BIOWEB menyediakan berbagai fitur interaktif untuk memudahkan pembelajaran sistem gerak manusia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Materi Lengkap', desc: 'Pelajari struktur tulang, otot, dan mekanisme gerak manusia secara detail' },
            { title: 'Kuis Interaktif', desc: 'Uji pemahaman dengan kuis pilihan ganda yang memberikan feedback langsung' },
            { title: 'Game Edukatif', desc: 'Bermain sambil belajar dengan game menyusun tulang dan mencocokkan fungsi otot' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center mb-4 text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features