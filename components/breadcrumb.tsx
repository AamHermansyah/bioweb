'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface BreadcrumbProps {
  backHref?: string
  backLabel?: string
  current: string
}

export function Breadcrumb({ backHref = '/', backLabel = 'Home', current }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-green-100">
      <div className="container mx-auto max-w-6xl px-4 py-3 pt-24">
        <div className="flex items-center text-sm text-gray-600">
          <Link href={backHref} className="hover:text-teal-700 transition-colors flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" />
            {backLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-teal-700 font-medium">{current}</span>
        </div>
      </div>
    </div>
  )
}
