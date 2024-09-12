import Navbar from '@/components/Navigation/Navbar'
import { getServerSession } from 'next-auth'
import React from 'react'

export default function layout ({ children }:any)  {
  const session = getServerSession()
  return (
    <body className="fixed w-full h-screen bg-transparent overflow-hidden">
    <Navbar session={session?.user?.name}/>
      {children}
    </body>
  )
}

