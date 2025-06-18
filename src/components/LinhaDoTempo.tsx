"use client";
import React from "react";

const eventos = [
  {
    id: 1,
    texto: `No dicionário REVIVER significa "adquirir nova força". E isso aconteceu no Morro do Estado em 2006.`,
  },
  {
    id: 2,
    texto: `Karina e Vinícius, recém-casados, decidiram construir uma nova história. E assim nasce a Casa Reviver, o sonho de um menino morador da comunidade se transforma em realidade.`,
  },
  {
    id: 3,
    texto: `O sonho cresceu e foi tomando forma... Começamos em uma esquina apenas com a certeza de que valeria a pena construir esse SONHO.`,
  },
  {
    id: 4,
    texto: `Ao longo desses anos, parcerias nos ajudaram e a cada parede levantada, nosso coração se enche de alegria por saber que nossas crianças e famílias terão um ambiente acolhedor e confortável para descobrirem um novo mundo através da arte, cultura e leitura.`,
  },
  {
    id: 5,
    texto: `Já se passaram 17 anos... A Casa Reviver hoje é um oásis de esperança que não só garante um ambiente seguro para as crianças e jovens, como também potencializa o seu desenvolvimento cognitivo.`,
  },
  {
    id: 6,
    texto: `Nossas atividades são construídas a partir das necessidades das famílias da nossa comunidade, visando autonomia, valorização das identidades e território.`,
  },
];

export default function LinhaDoTempo() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="bg-white shadow-md rounded-xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-2xl font-bold mb-2">
                Etapa {evento.id}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{evento.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
