"use client";
import Image from "next/image";

const dados = [
  {
    id: 1,
    valor: "+125",
    descricao: "Formados no curso de capacitação produtiva",
    imagem: "/images/impacto1.jpg", // substitua pelos caminhos reais
  },
  {
    id: 2,
    valor: "+120",
    descricao: "Famílias atendidas anualmente",
    imagem: "/images/impacto2.jpg",
  },
  {
    id: 3,
    valor: "+100",
    descricao: "Atendimentos nutricionais, sociais e médicos",
    imagem: "/images/impacto3.jpg",
  },
  {
    id: 4,
    valor: "+30",
    descricao: "Grávidas assistidas",
    imagem: "/images/impacto4.jpg",
  },
];

export default function ImpactoSobre() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Impacto em 2023
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dados.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.imagem}
                  alt={`Imagem impacto ${item.id}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{item.valor}</div>
                <p className="text-sm text-gray-700 mt-2">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
