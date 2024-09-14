'use client';
import React, { useState } from 'react';
import SideBar from '../Navigation/SideBar';
import DashboardContent from './DashboardContent/DashboardContent';
import Navbar from '../Navigation/Navbar';
import { Session } from 'next-auth';  

interface DashboardProps {
  session?: Session;  // Expect full session object from NextAuth
}

const Dashboard = ({ session }: DashboardProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleSideNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="relative z-plus top-0 h-16">
        <Navbar onClick={handleSideNav} isActive={isActive} name={session?.user?.name || 'Guest'} /> {/* Access session.user */}
        {!isActive ? <SideBar /> : null}
      </div>
      <DashboardContent isActive={isActive} />
    </>
  );
};

export default Dashboard;
