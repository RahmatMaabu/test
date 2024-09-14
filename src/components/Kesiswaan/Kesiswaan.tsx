'use client';
import React, { useState } from 'react'
import SideBar from '../Navigation/SideBar';
import KesiswaanContent from './KesiswaanContent/KesiswaanContent';
import Navbar from '../Navigation/Navbar';
import { Session } from 'next-auth';

interface KesiswaanProps {
  session?: Session;
}
const Kesiswaan = ({ session }: KesiswaanProps) => {
    const [isActive , setIsActive] = useState(false);

    const handleSideNav = () => {
      setIsActive(!isActive);
    }
      return (
        <>
          <div className="relative z-plus top-0 h-16 ">
          <Navbar onClick={handleSideNav} isActive={isActive} name={session?.user?.name || 'Guest'}/>
          {!isActive ? <SideBar/> : null}
          </div>
          <KesiswaanContent isActive={isActive}/>
        </>
  )
}

export default Kesiswaan
