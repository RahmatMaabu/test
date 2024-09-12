import Link from 'next/link';
import React from 'react'
import { BiBriefcase, BiChevronDown, BiChevronLeft, BiGroup, BiPencil } from 'react-icons/bi';

const KepegawaianMenu = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const ShowMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <>
    <div className="flex flex-col items-center px-4 py-3">
      <button onClick={ShowMenu} className="flex flex-row items-center justify-between w-full text-gray-300  hover:text-zinc-700">
        <div className="flex  items-center justify-center gap-4">
          <BiBriefcase size={25} />
          <h2 className="text-sm">Kepegawaian</h2>
        </div>
        {!showMenu ? <BiChevronLeft size={25} /> : <BiChevronDown size={25} />}
      </button>
    </div>

   {showMenu && (
       <div className="flex flex-col items-center px-4 py-3 bg-zinc-800">
       <Link href="/admin/kesiswaan" className="flex flex-row items-center justify-between w-full text-gray-300  hover:text-zinc-700">
           <div className="flex  items-center justify-center gap-4">
             <BiPencil size={25} />
             <h2 className="text-sm">Input Data Guru</h2>
           </div>
         </Link>
       </div>
   )}

   {showMenu && (
       <div className="flex flex-col items-center px-4 py-3 bg-zinc-800">
       <Link href="/admin/kesiswaan" className="flex flex-row items-center justify-between w-full text-gray-300  hover:text-zinc-700">
           <div className="flex  items-center justify-center gap-4">
             <BiGroup size={25} />
             <h2 className="text-sm">Daftar Guru</h2>
           </div>
         </Link>
       </div>
   )}
    
    </>
  )
}

export default KepegawaianMenu
