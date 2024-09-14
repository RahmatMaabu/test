import Dashboard from '@/components/Dashboard/Dashboard';
import { getServerSession } from 'next-auth';
import React from 'react';
import { Session } from 'next-auth';  // Import Session type from next-auth

const page = async () => {
  const session: Session | null = await getServerSession();

  if (!session) {
    // Handle case where session is null or undefined
    return <div>You need to sign in to access the dashboard.</div>;
  }

  return (
    <>
      <Dashboard session={session} />
    </>
  );
};

export default page;
