'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // sesuaikan path jika berbeda

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil', href: '/profil' },
  { name: 'Materi', href: '/materi' },
  { name: 'Kuis', href: '/kuis' },
  { name: 'Game', href: '/game' },
  { name: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-green-100">
      <div className="text-gray-800 container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-teal-700">
            BIO<span className="text-emerald-500">WEB</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button
                className={cn(
                  'px-4 py-2 rounded-md hover:bg-green-100 transition-colors font-medium',
                  pathname === item.href && 'bg-green-100 text-teal-700'
                )}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 border-t border-green-100 shadow-sm">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <button
                  className={cn(
                    'w-full text-left block px-4 py-2 rounded-md hover:bg-green-100 transition-colors font-medium',
                    pathname === item.href && 'bg-green-100 text-teal-700'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
