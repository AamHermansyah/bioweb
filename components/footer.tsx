import React from 'react'

const footerLinks = [
  { label: 'Profil', href: '/profil' },
  { label: 'Materi', href: '/materi' },
  { label: 'Kuis', href: '/kuis' },
  { label: 'Permainan', href: '/games' },
  { label: 'Kontak', href: '/kontak' },
]

function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">BIO<span className="text-emerald-400">WEB</span></span>
            <p className="mt-2 text-teal-300 text-sm">Media Pembelajaran Sistem Gerak Manusia</p>
          </div>

          <div className="flex space-x-8">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-teal-200 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-teal-800 text-center text-teal-400 text-sm">
          © {new Date().getFullYear()} BIOWEB - Dikembangkan untuk Media Pembelajaran Biologi
        </div>
      </div>
    </footer>
  )
}

export default Footer
