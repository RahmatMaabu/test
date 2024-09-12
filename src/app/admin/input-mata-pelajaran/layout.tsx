import Navbar from '@/components/Navigation/Navbar'
import React from 'react'

export default function layout ({ children })  {
  return (
    <body className="fixed w-full h-screen bg-transparent overflow-hidden">
    <Navbar/>
      {children}
    </body>
  )
}

