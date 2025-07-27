"use client";
import { Users, HeartHandshake, Stethoscope, Baby } from "lucide-react";

const dados = [
  {
    id: 1,
    valor: "+125",
    descricao: "Formados no curso de capacitação produtiva",
    icone: Users,
  },
  {
    id: 2,
    valor: "+120",
    descricao: "Famílias atendidas anualmente",
    icone: HeartHandshake,
  },
  {
    id: 3,
    valor: "+100",
    descricao: "Atendimentos nutricionais, sociais e médicos",
    icone: Stethoscope,
  },
  {
    id: 4,
    valor: "+30",
    descricao: "Grávidas assistidas",
    icone: Baby,
  },
];

export default function ImpactoIcones() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Nosso Impacto em 2023
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dados.map(({ id, valor, descricao, icone: Icone }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <Icone className="w-10 h-10 text-blue-600 mb-4" />
              <div className="text-2xl font-bold text-blue-700">{valor}</div>
              <p className="text-gray-600 text-sm mt-2">{descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
