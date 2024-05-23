import React from "react";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  return (
     
 <div className=" font-sans mb-40  max-h-screen overflow-hidden overflow-y-auto custom-scrollbar  hidden lg:block">Filtreleme
      <ul className="">
        <li  className="">
        <div class=" max-h-screen w-60 ml-4">
        <details className="bg-white  flex items-center justify-between" open>
              <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2 select-none">
                Tüm Kategoriler
              </summary>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Elbise
                </button>
              </li>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Gömlek
                </button>
              </li>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  T-shirt
                </button>
              </li>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Sneaker
                </button>
              </li>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Güneş Gözlüğü
                </button>
              </li>
              <li className="">
                <button className="text-left w-full hover:text-amber-600 p-2">
                  Pantolon
                </button>
              </li>
            </details>
          </div>
        </li>
      </ul>

 {/* marka */}
<div className="  ">
        <ul className=" ">
        <li  className="">
        <div class=" mx-auto  w-52 ml-4   ">
          <details class=" bg-white  p-1 items-center justify-between" open>
          <summary class="mb-2 text-lg group/item hover:bg-slate-100 border-bg  font-bold leading-6  text-amber-600 pb-auto">
           Marka
           </summary>
        <li className="flex items-center" >
          <input type="radio" name="marka-radio" className=" size-5 mr-1 "/>
          <label classname="ml-1">KVK PRİVACY</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio"   className=" size-5 mr-1"/>
          <label classname="ml-1">Avva</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio"  className=" size-5 mr-1"/>
          <label classname="ml-1">Kinetix</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">Polaris</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio"  className=" size-5 mr-1"/>
          <label classname="ml-1">Zara</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">FullaModa</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">Koton</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="category-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">Bambi</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">Nevfix</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="marka-radio" className=" size-5 mr-1"/>
          <label classname="ml-1">Penti</label>
          </li>
           </details>
          </div>
          </li>
        </ul>
        </div>
      {/* Beden */}

        <ul className="">
        <li  className="">
        <div class=" mx-auto w-52 ml-4   ">
          <details class=" bg-white  p-1 items-center justify-between" open>
          <summary class="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2">
           Beden
           </summary>
          
        <li className="flex items-center" >
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">2XS</label>
          </li>
          <li className="flex items-center" >
          <input type="radio" name="beden-radio"   className="size-5 mr-1"/>
          <label classname="ml-1">XXS</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio"  className="size-5 mr-1"/>
          <label classname="ml-1">XS</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">S</label>
          </li>
          <input type="radio" name="beden-radio"  className="size-5 mr-1"/>
          <label classname="ml-1">S/M</label>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">M</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">M/L</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">XL</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">2XL</label>
          </li>
          <li className="flex items-center">
          <input type="radio" name="beden-radio" className="size-5 mr-1"/>
          <label classname="ml-1">3XL</label>
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
          <summary class="group/item hover:bg-slate-100 border-bg text-lg font-bold leading-6 text-amber-600 pb-2">
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




          <div className="   ">
        <ul className="">
        <li  className="">
        <div class=" mx-auto   w-52 ml-4   ">
          <details class=" bg-white  p-1 items-center justify-between" open>
          <summary class="group/item hover:bg-slate-100 border-bg text-lg font-bold leading-6  text-amber-600 pb-auto">
           Renk
           </summary>
           <div class="mt-5 grid grid-cols-4 gap-2 mr-3">
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
          </li>
        </ul>
        </div>


       


        
        </div>
    

  );
};

export default Sidebar;
