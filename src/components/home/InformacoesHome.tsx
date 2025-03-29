"use client";

import { ArrowDown } from "lucide-react";
import React from "react";
import { animateScroll } from "react-scroll";

const InformacoesHome = () => {
   return (
      <div className="w-full h-screen">
         <div className="w-full h-full flex justify-center items-center flex-col gap-32">
            <div>
               <h1 className="text-7xl font-bold text-center">
                  Casamento de Bia e Gabriel
               </h1>
               <p className="text-2xl text-center">06 de junho de 2026</p>
            </div>
            <div className="w-full flex justify-center items-center">
               <button
                  className="bg-gray-200/50 p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                     animateScroll.scrollTo(window.innerHeight, {
                        duration: 1500,
                        smooth: "easeInOutQuint", // Tipos: linear, easeIn, easeOut, easeInOut
                     });
                  }}
               >
                  <ArrowDown className="w-10 h-10 transition-transform duration-700" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default InformacoesHome;
