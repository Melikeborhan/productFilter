"use client"
import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { RxDropdownMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
  <nav className="bg-white items-center justify-between h-28 w-full gap-5  flex shadow-xl relative  "    > 
<button onClick={toggleDropdown} className="block lg:hidden">
<RxDropdownMenu className='ml-5 size-10 hover:bg-amber-500 rounded-lg '/>
</button> 
  <div className='flex sm:items-center sm:justify-between    lg:items-end  lg:justify-end flex-grow'>
    <input className='ring-2 ring-amber-500 bg-gray-200 rounded-lg md:w-96 md:h-12 lg:h-10 lg:w-96   lg:ml-4  sm:w-52 sm:h-8  h-8 ' />
  </div>
  <CiSearch  type="button"  className=" lg:mr-10 size-8" />
    <div className='flex items-center mr-5'>
    <button className=''>
    <VscAccount className=' size-8 sm:size-8 lg:size-10 hover:bg-amber-500  rounded-xl ' />
    </button>
  </div>
  {isDropdownOpen && (
 <div className='fixed top-0 left-0  bg-white w-96 h-full  z-50 p-4 overflow-auto'>
 
 <button onClick={toggleDropdown} className="absolute top-auto right-4 p-2  bg-amber-600 text-white rounded-lg">
              Kapat
            </button>
    <ul className="">
         <li  className="">
         <div class=" mx-auto  w-52 ml-4 pt-5 text-xl ">
         <details className=" p-1 flex items-center justify-between" open>
              <summary className="group/item hover:bg-slate-100  font-bold leading-6 text-amber-600 pb-2 select-none">
                Tüm Kategoriler
              </summary>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Elbise
                </button>
              </li>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Gömlek
                </button>
              </li>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  T-shirt
                </button>
              </li>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Sneaker
                </button>
              </li>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Güneş Gözlüğü
                </button>
              </li>
              <li className="py-1">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Pantolon
                </button>
              </li>
            </details>
          </div>
        </li>
      </ul>

 
 
 <div className="overflow-auto max-h-52 overflow-x-hidden custom-scrollbar  h">
         <ul className="">
         <li  className="">
         <div class=" mx-auto  w-52 ml-4 text-xl  ">
           <details class="   p-1 items-center justify-between" open>
           <summary class=" border-t-large  group/item hover:bg-slate-100  border-bg font-bold leading-6 text-amber-600 pb-2">
            Marka
            </summary>
         <li >
           <input type="radio" name="marka-radio" className=" "/>
           <label classname="">KVK PRİVACY</label>
           </li>
           <li>
           <input type="radio" name="marka-radio"   className=""/>
           <label classname="">Avva</label>
           </li>
           <li>
           <input type="radio" name="marka-radio"  className=""/>
           <label classname="">Kinetix</label>
           </li>
           <li>
           <input type="radio" name="marka-radio" className=""/>
           <label classname="">Polaris</label>
           </li>
           <input type="radio" name="marka-radio"  className=""/>
           <label classname="">Zara</label>
           <li>
           <input type="radio" name="marka-radio" className=""/>
           <label classname="">FullaModa</label>
           </li>
           <li>
           <input type="radio" name="marka-radio" className=""/>
           <label classname="">Koton</label>
           </li>
           <li>
           <input type="radio" name="category-radio" className=""/>
           <label classname="">Bambi</label>
           </li>
           <li>
           <input type="radio" name="marka-radio" className=""/>
           <label classname="">Nevfix</label>
           </li>
           <li>
           <input type="radio" name="marka-radio" className=""/>
           <label classname="">Penti</label>
           </li>
            </details>
           </div>
           </li>
         </ul>
         </div>
       {/* Beden */}
 
         <ul className="">
         <li  className="">
         <div class=" mx-auto  w-52 ml-4 text-xl  ">
           <details class="   p-1 items-center justify-between" open>
           <summary class=" border-t-large group/item hover:bg-slate-100   font-bold leading-6 text-amber-600 pb-2">
            Beden
            </summary>
           
         <li >
           <input type="radio" name="beden-radio" className=" "/>
           <label classname="">2XS</label>
           </li>
           <li>
           <input type="radio" name="beden-radio"   className=""/>
           <label classname="">XXS</label>
           </li>
           <li>
           <input type="radio" name="beden-radio"  className=""/>
           <label classname="">XS</label>
           </li>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">S</label>
           </li>
           <input type="radio" name="beden-radio"  className=""/>
           <label classname="">S/M</label>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">M</label>
           </li>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">M/L</label>
           </li>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">XL</label>
           </li>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">2XL</label>
           </li>
           <li>
           <input type="radio" name="beden-radio" className=""/>
           <label classname="">3XL</label>
           </li>
            </details>
            
           </div>
           </li>
         </ul>
 
       {/* Fiyat */}
       <ul className="">
        <li  className="">
        <div class=" mx-auto  w-52 ml-4   ">
          <details class=" bg-white  p-1 items-center justify-between" open>
          <summary class=" border-t-large group/item hover:bg-slate-100 border-bg text-lg font-bold leading-6 text-amber-600 pb-2">
           Fiyat
           </summary>
       
           <div className="flex items-center space-x-2 ml-1 mt-2 mb-4">
          <input name="marka-radio" placeholder="En Az" className="rounded-md  w-14 h-6 bg-gray-200 "/>
          <span>-</span>
          <input name="marka-radio" placeholder="En Çok" className=" rounded-md w-16 h-6 bg-gray-200 "/>
          <button>
          <CiSearch  type="button"  className="bg-amber-500 rounded-md size-6" />
          </button>
        </div>
          <li>
          <input type="radio" name="fiyat-radio"   className=""/>
          <label classname="">0 TL-70 TL</label>
          </li>
          <li>
          <input type="radio" name="fiyat-radio"  className=""/>
          <label classname="">70 TL-125 TL</label>
          </li>
          <li>
          <input type="radio" name="fiyat-radio" className=""/>
          <label classname="">125 TL-250 TL</label>
          </li>
          <input type="radio" name="fiyat-radio"  className=""/>
          <label classname="">250 TL-500 TL</label>
          <li>
          <input type="radio" name="fiyat-radio" className=""/>
          <label classname="">500 TL-1750 TL</label>
          </li>
          <li>
          <input type="radio" name="fiyat-radio" className=""/>
          <label classname="">1750 TL-40000 TL</label>
          </li>
           </details>
          </div>
          </li>
          </ul>



         <div class=" mx-auto   w-52 ml-4    ">
          <details class=" bg-white  p-1 items-center justify-between" open>
          <summary class="border-t-large group/item hover:bg-slate-100 border-bg text-lg font-bold leading-6  text-amber-600 pb-auto">
           Renk
           </summary>
           <div class="mt-5 grid grid-cols-4 gap-2 mr-5">
          <button className="w-8 h-8 rounded-full border-large bg-black" />
          <button className="w-8 h-8 rounded-full border-large bg-red-500" />
          <button className="w-8 h-8 rounded-full border-large bg-green-500" />
          <button className="w-8 h-8 rounded-full border-large bg-yellow-500" />
          <button className="w-8 h-8 rounded-full border-large bg-white" />
          <button className="w-8 h-8 rounded-full border-large bg-sky-500" />
          <button className="w-8 h-8 rounded-full border-large bg-blue-500" />
          <button className="w-8 h-8 rounded-full border-large bg-gray-500" />
          <button className="w-8 h-8 rounded-full border-large bg-orange-500" />
          <button className="w-8 h-8 rounded-full border-large bg-amber-500" />
          <button className="w-8 h-8 rounded-full border-large bg-pink-500" />
        </div>
           </details>
       
         
           </div>
           </div>

         
     
      )}
      
  </nav>


  )
}

export default Navbar


