"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import fotos from "@/data/fotos-voluntariado.json";

export function CarrosselFotos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 3000); // muda a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-xl">
      <Image
        src={fotos[index].src}
        alt={fotos[index].alt}
        fill
        className="object-cover transition-all duration-500"
      />
    </div>
  );
}
