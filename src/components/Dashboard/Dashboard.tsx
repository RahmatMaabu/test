'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/Navbar.tsx';
import SideBar from '../Navigation/SideBar';
import DashboardContent from './DashboardContent/DashboardContent';

const Dashboard = ({ session }:any) => {
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
      <DashboardContent isActive={isActive}/>
    </>
  );
};

export default Dashboard;
