import React from "react";
import { BiDollar, BiGroup, BiMoney, BiSolidBank } from "react-icons/bi";

const LaporanDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-row gap-2 bg-white shadow-sm rounded-lg ">
        <div className="p-8 bg-blue-500 rounded-l-lg text-white">
          <BiDollar size={40} />
        </div>
        <div className="flex flex-col pt-2 text-sm font-medium">
          <h2>Saldo</h2>
          <h3>Rp. 500.000</h3>
        </div>
      </div>

      <div className="flex flex-row gap-2 bg-white shadow-sm rounded-lg ">
        <div className="p-8 bg-red-500 rounded-l-lg text-white">
          <BiMoney size={40} />
        </div>
        <div className="flex flex-col pt-2 text-sm font-medium">
          <h2>Pengeluaran Hari Ini</h2>
          <h3>Rp. 200.000</h3>
        </div>
      </div>

      <div className="flex flex-row gap-2 bg-white shadow-sm rounded-lg ">
        <div className="p-8 bg-green-500 rounded-l-lg text-white">
          <BiSolidBank size={40} />
        </div>
        <div className="flex flex-col pt-2 text-sm font-medium">
          <h2>Penerimaan Hari ini</h2>
          <h3>Rp. 250.000</h3>
        </div>
      </div>

      <div className="flex flex-row gap-2 bg-white shadow-sm rounded-lg ">
        <div className="p-8 bg-orange-500 rounded-l-lg text-white">
          <BiGroup size={40} />
        </div>
        <div className="flex flex-col pt-2 text-sm font-medium">
          <h2>Siswa Aktif</h2>
          <h3>500</h3>
        </div>
      </div>
    </div>
  );
};

export default LaporanDashboard;
