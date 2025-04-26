import InformacoesCasal from "@/components/casal/InformacoesCasal";
import InformacoesCerimonia from "@/components/cerimonia/InformacoesCerimonia";
import InformacoesHome from "@/components/home/InformacoesHome";
import InformacoesRecepcao from "@/components/recepcao/InformacoesRecepcao";
import React from "react";

const page = () => {
   return (
      <div className="w-full mx-auto bg-textura">
         <InformacoesHome />
         <InformacoesCasal />
         <InformacoesCerimonia />
         <InformacoesRecepcao />
      </div>
   );
};

export default page;
