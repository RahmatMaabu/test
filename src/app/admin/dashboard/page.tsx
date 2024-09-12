import Dashboard from '@/components/Dashboard/Dashboard'
import Navbar from '@/components/Navigation/Navbar'
import { getServerSession } from 'next-auth'
import React from 'react'


const page = async () => {
  const session = await getServerSession();


  return (
    <>
      <Dashboard session={session?.user?.name} />
    </>
  )
}

export default page
