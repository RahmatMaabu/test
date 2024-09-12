import Image from "next/image";
import React from "react";
import DashboardMenu from "./SidebarMenu/DashboardMenu";
import KesiswaanMenu from "./SidebarMenu/KesiswaanMenu";
import KepegawaianMenu from "./SidebarMenu/KepegawaianMenu";
import AkademikMenu from "./SidebarMenu/AkademikMenu";
import LaporanMenu from "./SidebarMenu/LaporanMenu";
import PengaturanMenu from "./SidebarMenu/PengaturanMenu";
import LogoutMenu from "./SidebarMenu/LogoutMenu";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-72 h-screen bg-zinc-900 shadow-2xl ">
      <div className="bg-zinc-800 h-16 flex flex-row items-center  w-full gap-2  px-8">
        <Image src="/image/LogoUmum.png" alt="logo" width={40} height={40} />
        <h2 className="text-white  text-sm">ADMINISTRATOR</h2>
      </div>

      <div className="flex px-4 py-3 items-center text-gray-100">
        <h3 className="text-sm">MENU</h3>
      </div>

      <DashboardMenu />
      <KesiswaanMenu />
      <KepegawaianMenu />
      <AkademikMenu />
      <LaporanMenu />
      <PengaturanMenu />
      <LogoutMenu />
    </div>
  );
};

export default SideBar;
