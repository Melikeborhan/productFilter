import React from "react";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import CardTemp from "./components/shoppingCard/CardTemp";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/sidebar/sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="bg-gray-100">
      <div className="fixed top-0 left-0  right-0 h-16 z-50 bg-white border-b border-gray-300">
        <Navbar className="w-full h-full" />
      </div>
      <div className="flex pt-16 lg:pt-14  lg:mb-20">
        <div className="fixed lg:top-16 mt-12 bottom-16 left-0 max-h-screen lg:w-1/6 w-full bg-white border-r border-gray-300">
          <Sidebar className="h-full" />
        </div>
        <div className="lg:ml-60 mt-16 lg:mt-0 lg:w-5/6 lg:p-4 w-full px-8">
          <CardTemp />
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-300">
        <Footer className="w-full h-full" />
      </div>
    </body>
</html>


  );
}
