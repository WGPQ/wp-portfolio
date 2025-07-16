'use client'

import Link from 'next/link'
import { CubeIcon, UserIcon, Squares2X2Icon, DocumentTextIcon, SignalIcon } from '@heroicons/react/24/outline'

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-md bg-[#121212] border border-gray-700 rounded-full px-4 py-2 shadow-lg flex justify-between items-center md:hidden">
      <Link href="/" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <CubeIcon className="h-6 w-6 text-white" />
      </Link>
      <Link href="/" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <UserIcon className="h-6 w-6 text-white" />
      </Link>
      <Link href="/about" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <DocumentTextIcon className="h-6 w-6 text-white" />
      </Link>
      <Link href="/work" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10">
        <Squares2X2Icon className="h-6 w-6 text-white" />
      </Link>
      <Link href="/" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10">
        <SignalIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  )
}

export default BottomNavBar
