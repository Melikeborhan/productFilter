import React from 'react'

const Categories = () => {
  return (
    <div>
         <div className="">
    <details className="bg-white p-2 items-center justify-between" open>
      <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2 select-none">
        Tüm Kategoriler
      </summary>
      <ul className="pl-2">
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">Elbise</button>
        </li>
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">Gömlek</button>
        </li>
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">T-shirt</button>
        </li>
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">Sneaker</button>
        </li>
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">Güneş Gözlüğü</button>
        </li>
        <li>
          <button className="text-left w-full hover:text-amber-600 p-2">Pantolon</button>
        </li>
      </ul>
    </details>
  </div>

  <div className="">
    <details className="bg-white p-2 items-center justify-between" open>
      <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2">
        Marka
      </summary>
      <ul className="pl-2">
        {["KVK PRİVACY", "Avva", "Kinetix", "Polaris", "Zara", "FullaModa", "Koton", "Bambi", "Nevfix", "Penti"].map((brand) => (
          <li className="flex items-center" key={brand}>
            <input type="radio" name="marka-radio" className="mr-1" />
            <label className="ml-1">{brand}</label>
          </li>
        ))}
      </ul>
    </details>
  </div>

  <div className="">
    <details className="bg-white p-2 items-center justify-between" open>
      <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-2">
        Beden
      </summary>
      <ul className="pl-2">
        {["2XS", "XXS", "XS", "S", "S/M", "M", "M/L", "L", "XL", "2XL", "3XL"].map((size) => (
          <li className="flex items-center" key={size}>
            <input type="radio" name="beden-radio" className="mr-1" />
            <label className="ml-1">{size}</label>
          </li>
        ))}
      </ul>
    </details>
  </div>
  </div>
  )
}

export default Categories