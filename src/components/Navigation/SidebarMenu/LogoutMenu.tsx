import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiExit } from 'react-icons/bi';

const LogoutMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    alert("Yakin, anda ingin logout")
    try {
      await signOut({ redirect: false });
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
  return (
    <div className="flex items-center px-4 py-3 bg-zinc-900">
    <button onClick={handleLogout} className="flex items-center justify-center gap-4 text-gray-300  hover:text-zinc-700">
    <BiExit size={25} />
    <h2 className="text-sm">Logout</h2>
    </button>
  </div>
  )
}

export default LogoutMenu
