import React from 'react'
import LaporanDashboard from './LaporanDashboard'
import MYCalender from './MYCalender'
import Informasi from './Informasi'

const DashboardContent = ({ isActive }) => {
  return (
    <div className={`relative  w-full h-screen bg-slate-100 ${!isActive ? 'pl-72' : 'pl-0'} z-minus`}>
      <div className="flex flex-col  gap-4 w-full h-full p-4">
        <h1 className="text-base uppercase font-medium">Dashboard</h1>
        <LaporanDashboard/>
      <div className="grid grid-cols-2 w-full h-auto gap-4 ">
        <Informasi/>
        <MYCalender/>
      </div>
      </div>
    </div>
  )
}

export default DashboardContent
