import Link from 'next/link'
import React from 'react'
import { BiSolidGrid } from 'react-icons/bi'

const DashboardMenu = () => {
  return (
    <div className="flex items-center px-4 py-3 bg-zinc-800">
    <Link href="/admin/dashboard" className="flex items-center justify-center gap-4 text-gray-300  hover:text-zinc-700">
    <BiSolidGrid size={25} />
    <h2 className="text-sm">Dashboard</h2>
    </Link>
  </div>
  )
}

export default DashboardMenu
