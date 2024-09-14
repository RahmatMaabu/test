import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";

interface NavbarProps {
  onClick: () => void;
  isActive: boolean;
  name?: string;
}

const Navbar = ({ onClick, isActive, name }: NavbarProps) => {

  return (
    <div className={`fixed top-0  right-0 shadow bg-white w-full h-16 p-4 flex flex-row items-center justify-between px-4 py-2 z-50 ${!isActive ? "left-72" : "left-0"}`}>
    <div className="flex flex-row items-centera gap-2 font-medium">
      <button onClick={onClick}><BiMenu size={25} /></button>
    <h2>MOBILE ADMINISTRATOR</h2>
    </div>
    <div className="flex flex-row items-center gap-2">
            <h2 className="text-xs font-medium uppercase">{name}</h2>
            <BiChevronDown size={25}/>
          </div>
    </div>
  );
};

export default Navbar;
