import React from 'react'
import { CiSearch } from "react-icons/ci";


const Price = () => {
  return (
    <div className="">
          <details className="bg-white p-2 items-center justify-between" open>
            <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2">
              Fiyat
            </summary>
            <div className="flex items-center space-x-2 ml-1 mt-2 mb-4">
              <input name="marka-radio" placeholder="En Az" className="rounded-md w-14 h-6 bg-gray-200" />
              <span>-</span>
              <input name="marka-radio" placeholder="En Çok" className="rounded-md w-16 h-6 bg-gray-200" />
              <button>
                <CiSearch type="button" className="bg-amber-500 rounded-md size-6" />
              </button>
            </div>
            <ul className="pl-2">
              {["0 TL-70 TL", "70 TL-125 TL", "125 TL-250 TL", "250 TL-500 TL", "500 TL-1750 TL", "1750 TL-40000 TL"].map((price) => (
                <li className="flex items-center" key={price}>
                  <input type="radio" name="fiyat-radio" className="mr-1" />
                  <label className="ml-1">{price}</label>
                </li>
              ))}
            </ul>
          </details>
        </div>
  )
}

export default Price