import React from 'react'
import FormInputKesiswaan from './FormInputKesiswaan'

const KesiswaanContent = ({ isActive }) => {
  return (
    <div className={`relative  w-full h-screen bg-slate-100 ${!isActive ? 'pl-72' : 'pl-0'} z-minus`}>
      <div className="flex flex-col  gap-4 w-full h-full p-4">
        <h1 className="text-base uppercase font-medium">INPUT DATA KESISWAAN</h1>
        <p className="text-sm text-neutral-500">Masukkan Data Siswa </p>
        <FormInputKesiswaan />
      </div>
    </div> 
  )
}

export default KesiswaanContent
