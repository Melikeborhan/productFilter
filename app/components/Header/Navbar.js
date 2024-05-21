import React from 'react'
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
<nav className="bg-white items-center justify-between h-28 w-full gap-5 z-40 flex shadow-xl">  
  <div className='flex items-center justify-center flex-grow'>
    <input className=' outline-amber-500 bg-gray-200 rounded-lg w-96 h-12 lg:h-10 lg:w-96 sm:w-5 sm:h-8 flex items-center justify-center' />
  </div>
  <div className='flex items-center lg:mr-5'>
    <VscAccount className='size-10 sm:size-10 lg:size-10 bg-amber-500  rounded-xl ' />
  </div>
</nav>


  )
}

export default Navbar


