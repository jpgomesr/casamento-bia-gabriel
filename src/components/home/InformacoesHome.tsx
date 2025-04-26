"use client";

import { ArrowDown } from "lucide-react";
import React from "react";
import { animateScroll } from "react-scroll";

const InformacoesHome = () => {
   return (
      <div className="w-full h-screen" id="home">
         <div className="w-full h-full flex justify-center items-center flex-col gap-16 sm:gap-24 md:gap-32">
            <div className="px-4">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
                  Casamento de Bia e Gabriel
               </h1>
               <p className="text-lg sm:text-xl md:text-2xl text-center mt-4">
                  06 de junho de 2026
               </p>
            </div>
            <div className="w-full flex justify-center items-center">
               <button
                  className="bg-gray-200/50 p-1.5 sm:p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                     animateScroll.scrollTo(window.innerHeight, {
                        duration: 1500,
                        smooth: "easeInOutQuint",
                     });
                  }}
               >
                  <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-700" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default InformacoesHome;
