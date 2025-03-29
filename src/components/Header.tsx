"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY + 10 >= window.innerHeight);
      };

      window.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={`fixed top-0 left-0 w-full bg-gray-200/30 py-4 z-50 transition-all duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
         }`}
      >
         <div className="w-full flex justify-center items-center">
            <ul className="flex justify-center items-center gap-8 text-lg font-bold">
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Home
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Casal
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Cerimônia
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Recepção
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Lista de Presentes
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Galeria de Fotos
               </li>
               <li className="hover:scale-105 transition-all duration-300 cursor-pointer">
                  Confirme a Presença
               </li>
            </ul>
         </div>
      </header>
   );
};

export default Header;
