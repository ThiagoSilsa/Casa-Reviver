"use client";
import { useState } from "react";
import depoimentos from "@/data/depoimentos-voluntarios.json";
import Image from "next/image";

export function CarrosselDepoimentos() {
  const [index, setIndex] = useState(0);
  const total = depoimentos.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const { nome, texto, foto } = depoimentos[index];

  return (
    <div className="bg-white shadow rounded-xl p-6 text-center max-w-xl mx-auto">
      <Image
        src={foto}
        alt={`Foto de ${nome}`}
        width={80}
        height={80}
        className="rounded-full mx-auto mb-4"
      />
      <p className="italic text-gray-600 mb-2">{texto}</p>
      <h4 className="font-bold text-blue-600">{nome}</h4>
      <div className="flex justify-center mt-4 gap-4">
        <button onClick={prev} className="text-sm text-gray-500 hover:text-blue-600">◀</button>
        <button onClick={next} className="text-sm text-gray-500 hover:text-blue-600">▶</button>
      </div>
    </div>
  );
}
