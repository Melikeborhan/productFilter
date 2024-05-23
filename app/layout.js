import React from "react";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import CardTemp from "./components/shoppingCard/CardTemp";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body class="bg-gray-100">

    <div class="fixed top-0 left-0 right-0 h-16 z-50 bg-white border-b border-gray-300">
      <Navbar className="w-full h-full" />
    </div>
    
    <div className="flex">
    
      <div className="fixed   top-28   left-0 h-[calc(100vh-4rem)] w-1/6 z-40 bg-white border-r border-gray-300">
        <Sidebar className="h-full" />
      </div>

      <div className="ml-56 mt-16 w-5/6 p-4">
        <div className="text-right">
          <CardTemp />
          {children}
        </div>
      </div>
    </div>

    <div class=" bottom-0  left-0 right-0 h-10 z-50 bg-white border-t border-gray-300">
      <Footer className="w-full h-full" />
    </div>
  </body>
</html>


  );
}
