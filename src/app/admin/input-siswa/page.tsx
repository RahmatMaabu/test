import Kesiswaan from '@/components/Kesiswaan/Kesiswaan'
import { getServerSession, Session } from 'next-auth'
import React from 'react'

const page = async () => {
  const session: Session | null = await getServerSession();

  if (!session) {
    // Handle case where session is null or undefined
    return <div>You need to sign in to access the dashboard.</div>;
  }
  return (
    <>
      <Kesiswaan session={session}/>
    </>
  )
}

export default page
