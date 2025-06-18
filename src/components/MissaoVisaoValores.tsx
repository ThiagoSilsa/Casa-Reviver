"use client";
import { Target, Eye, Heart } from "lucide-react";

const textomissao = [
  {
    texto:
      "Promover o desenvolvimento familiar por meio de atividades educativas que incentivem o protagonismo, com base em uma abordagem sociopedagógica.",
  },
  {
    texto:
      "Ser um agente de transformação integral a partir dos valores sociais e culturais da nossa comunidade com seus talentos e potencialidades.",
  },
  {
    texto:
      "Amor ao próximo, cidadania,direitos sociais, empreendedorismo, desenvolvimento comunitário e social, educação e cultura.",
  },
];

export default function MissaoVisaoValores() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Missão</h3>
            <p className="text-gray-600">{textomissao[0].texto}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
            <Eye className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visão</h3>
            <p className="text-gray-600">{textomissao[1].texto}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
            <Heart className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-gray-600">{textomissao[2].texto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
