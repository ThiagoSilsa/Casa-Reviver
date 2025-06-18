import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sobre() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className={`text-3xl font-bold mb-4 `}>Página Atividades</h1>
      <Link href={"/"}>
        <Button className="hover:cursor-pointer">Voltar</Button>
      </Link>
    </section>
  );
}
