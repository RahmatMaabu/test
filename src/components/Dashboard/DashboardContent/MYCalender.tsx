'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { id } from 'date-fns/locale'; 



const MYCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white gap-2 p-4 rounded shadow-md ">
      <div className="w-full"><h1 className="text-base font-medium">Kalendar</h1></div>
      <Calendar
        onChange={onChange}
        value={date}
        locale={id}
        className="w-full"
      />
    </div>
  );
};

export default MYCalendar;
