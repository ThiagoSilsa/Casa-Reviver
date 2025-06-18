
import Link from "next/link";
import NossaHistoria from "@/components/NossaHistoria"
import MissaoVisaoValores from "@/components/MissaoVisaoValores"
import LinhaDoTempo from "@/components/LinhaDoTempo"
import ImpactoSobre from "@/components/ImpactoSobre"


// Cada página deve ter a metadata correspondente para melhorar o SEO
export const metadata = {
  title: "Sobre | Casa Reviver",
  description: "Conheça a missão, visão e valores da ONG Casa Reviver.",
};


export default function Sobre() {
  return (
    <>
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-2">
      <h1 className={`text-3xl font-bold mb-4 pt-[60px] `}>Sobre Nós</h1>
      <NossaHistoria/>
      <LinhaDoTempo/>
      <MissaoVisaoValores/>
      <ImpactoSobre/>


    </section>    
    </>
  );
}
