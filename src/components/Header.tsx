"use client";

import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY + 10 >= window.innerHeight);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const menuItems = [
      { label: "Home", scrollTo: "home" },
      { label: "Casal", scrollTo: "casal" },
      { label: "Cerimônia", scrollTo: "cerimonia" },
      { label: "Recepção", scrollTo: "recepcao" },
      { label: "Lista de Presentes", scrollTo: null },
      { label: "Galeria de Fotos", scrollTo: null },
      { label: "Confirme a Presença", scrollTo: null },
   ];

   const handleScroll = (scrollTo: string | null) => {
      if (scrollTo !== null) {
         const element = document.getElementById(scrollTo);
         if (element) {
            animateScroll.scrollTo(element.offsetTop, {
               duration: 1500,
               smooth: "easeInOutQuint",
            });
         }
      }
      setIsMenuOpen(false);
   };

   return (
      <header
         className={`fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 py-4 z-50 transition-all duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
         }`}
      >
         <div className="w-full flex justify-between lg:justify-center items-center px-4">
            <button
               className="lg:hidden z-50"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {isMenuOpen ? (
                  <X className="w-6 h-6" />
               ) : (
                  <Menu className="w-6 h-6" />
               )}
            </button>

            <ul className="hidden lg:flex justify-center items-center gap-8 text-lg font-['Libre_Baskerville']">
               {menuItems.map((item, index) => (
                  <li
                     key={index}
                     className="hover:scale-105 transition-all duration-300 cursor-pointer"
                     onClick={() => handleScroll(item.scrollTo)}
                  >
                     {item.label}
                  </li>
               ))}
            </ul>
         </div>

         {/* Menu Mobile */}
         <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-md bg-white/80 transition-all duration-300 ${
               isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
            }`}
         >
            <ul className="flex flex-col items-center gap-4 py-4 text-lg font-['Libre_Baskerville'] mt-16">
               {menuItems.map((item, index) => (
                  <li
                     key={index}
                     className="hover:scale-105 transition-all duration-300 cursor-pointer"
                     onClick={() => handleScroll(item.scrollTo)}
                  >
                     {item.label}
                  </li>
               ))}
            </ul>
         </div>
      </header>
   );
};

export default Header;
