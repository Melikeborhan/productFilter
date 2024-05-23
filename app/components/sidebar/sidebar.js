import React from "react";
import Categories from "./categories";
import Price from "./Price";
import Color from "./Color";


const Sidebar = () => {
  return (
    <div className="font-sans  bg-white max-h-screen overflow-hidden overflow-y-auto custom-scrollbar hidden lg:block h-full">
      <div className="px-4 py-2">
        <h2 className="text-xl text-amber-600 font-bold mb-4">Filtreleme</h2>

       <Categories/>

        <Price/>

        <Color/>
   
      </div>
    </div>
  );
};

export default Sidebar;
