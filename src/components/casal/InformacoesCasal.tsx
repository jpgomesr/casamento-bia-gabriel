import React from "react";

const InformacoesCasal = () => {
   return (
      <div className="h-screen flex flex-col justify-center items-center px-4">
         <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-medium text-gray-900 mb-4">
               Bia & Gabriel
            </h2>

            <div className="relative">
               <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gray-300"></div>
               <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gray-300"></div>

               <p className="text-xl md:text-2xl leading-normal font-['Cormorant_Garamond'] font-light text-gray-600 py-6 px-4">
                  <span className="block text-3xl text-gray-400 mb-3">"</span>
                  Bem-vindos ao nosso mundo de amor! Estamos felizes em
                  compartilhar este momento especial com vocês. Aqui encontrarão
                  todos os detalhes para celebrar conosco no dia mais importante
                  de nossas vidas.
                  <span className="block text-3xl text-gray-400 mt-3 text-right">
                     "
                  </span>
               </p>
            </div>

            <p className="text-lg font-['Cormorant_Garamond'] text-gray-500 mt-6">
               06 de Junho de 2026 • Jaraguá do Sul, Santa Catarina
            </p>
         </div>
      </div>
   );
};

export default InformacoesCasal;
