'use client';
import React, { useState } from 'react'
import SideBar from '../Navigation/SideBar';
import Navbar from '../Navigation/Navbar.tsx';
import KesiswaanContent from './KesiswaanContent/KesiswaanContent';

const Kesiswaan = ({ session }:any) => {
    const [isActive , setIsActive] = useState(false);

    const handleSideNav = () => {
      setIsActive(!isActive);
    }
      return (
        <>
          <div className="relative z-plus top-0 h-16 ">
          <Navbar onClick={handleSideNav} isActive={isActive} name={session}/>
          {!isActive ? <SideBar/> : null}
          </div>
          <KesiswaanContent isActive={isActive}/>
        </>
  )
}

export default Kesiswaan
