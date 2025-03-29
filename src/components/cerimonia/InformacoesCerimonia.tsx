import React from "react";

const InformacoesCerimonia = () => {
   return (
      <div className="h-screen flex flex-col justify-center items-center px-4">
         <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Libre_Baskerville'] font-bold text-gray-900 mb-4">
               Nossa Cerimônia
            </h2>

            <div className="relative">
               <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gray-300"></div>
               <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gray-300"></div>

               <div className="text-xl md:text-2xl leading-relaxed font-['Libre_Baskerville'] text-gray-700 py-6 px-4 space-y-8">
                  <p className="italic">
                     "Nossos votos serão trocados na Igreja Matriz de São
                     Sebastião, onde nossas famílias se unem em fé há gerações."
                  </p>

                  <div className="space-y-2 text-lg font-normal">
                     <p className="font-semibold">
                        06 de Junho de 2026
                     </p>
                     <p>Às 16:30 horas</p>
                     <p>Igreja Matriz de São Sebastião</p>
                     <p>Rua das Flores, 123 - Centro</p>
                     <p>Jaraguá do Sul, SC</p>
                  </div>

                  <p className="font-light">
                     A cerimônia terá duração de aproximadamente 1 hora, seguida
                     por saída dos noivos sob chuva de pétalas.
                  </p>
               </div>
            </div>

            <p className="text-lg font-['Libre_Baskerville'] text-gray-600 mt-6">
               Traje: Social completo
            </p>
         </div>
      </div>
   );
};

export default InformacoesCerimonia;
