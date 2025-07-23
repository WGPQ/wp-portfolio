'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CubeIcon, UserIcon, Squares2X2Icon, DocumentTextIcon, SignalIcon } from '@heroicons/react/24/outline'
const pages = [
  { name: 'Home', href: '/', icon: UserIcon },
  { name: 'About', href: '/about', icon: DocumentTextIcon },
  { name: 'Work', href: '/work', icon: Squares2X2Icon },
]


const BottomNavBar = () => {
  const [currentPage, setcurrentPage] = useState('/');
  const handlePageChange = (page: string) => {
    setcurrentPage(page);
  };
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-md bg-[#121212] border border-gray-700 rounded-full px-4 py-2 shadow-lg flex justify-between items-center md:hidden">
      <Link href="/"
        onClick={() => handlePageChange('/')}
        className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <CubeIcon className="h-6 w-6 text-white" />
      </Link>
      {pages.map((page) => (
        <Link
          key={page.name}
          href={page.href}
          onClick={() => handlePageChange(page.href)}
          className={`flex items-center justify-center h-10 w-10 rounded-full ${currentPage === page.href ? 'bg-white/10' : 'hover:bg-white/10'}`}
        >
          <page.icon className="h-6 w-6 text-white" />
        </Link>
      ))}
      <Link href="/"
        onClick={() => handlePageChange('/')}
        className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <SignalIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  )
}

export default BottomNavBar
