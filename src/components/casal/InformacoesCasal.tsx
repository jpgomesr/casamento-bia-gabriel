import React from "react";

const InformacoesCasal = () => {
   return (
      <div
         className="min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:py-12"
         id="casal"
      >
         <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display'] font-medium text-gray-900 mb-2 sm:mb-4">
               Bia & Gabriel
            </h2>

            <div className="relative mx-4 sm:mx-8">
               <div className="absolute -top-3 -left-3 w-8 sm:w-12 h-8 sm:h-12 border-t border-l border-gray-300"></div>
               <div className="absolute -bottom-3 -right-3 w-8 sm:w-12 h-8 sm:h-12 border-b border-r border-gray-300"></div>

               <p className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-normal font-['Cormorant_Garamond'] font-light text-gray-600 py-4 sm:py-6 px-4">
                  <span className="block text-2xl sm:text-3xl text-gray-400 mb-2 sm:mb-3">
                     "
                  </span>
                  Bem-vindos ao nosso mundo de amor! Estamos felizes em
                  compartilhar este momento especial com vocês. Aqui encontrarão
                  todos os detalhes para celebrar conosco no dia mais importante
                  de nossas vidas.
                  <span className="block text-2xl sm:text-3xl text-gray-400 mt-2 sm:mt-3 text-right">
                     "
                  </span>
               </p>
            </div>

            <p className="text-base sm:text-lg font-['Cormorant_Garamond'] text-gray-500 mt-4 sm:mt-6">
               06 de Junho de 2026 • Jaraguá do Sul, Santa Catarina
            </p>
         </div>
      </div>
   );
};

export default InformacoesCasal;
