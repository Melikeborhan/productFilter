import React from 'react'

const Color = () => {
  return (
    <div className="">
    <details className="bg-white p-2 items-center justify-between" open>
      <summary className="group/item hover:bg-slate-100 text-lg font-bold leading-6 text-amber-600 pb-auto">
        Renk
      </summary>
      <div className="mt-5 grid grid-cols-4 gap-2 mr-3">
        {["black", "red-500", "green-500", "yellow-500", "white", "sky-500", "blue-500", "gray-500", "orange-500", "amber-500", "pink-500"].map((color) => (
          <button key={color} className={`w-8 h-8 rounded-full border-large bg-${color}`} />
        ))}
      </div>
    </details>
  </div>
  )
}

export default Color