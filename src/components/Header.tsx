// Como será utilizado o useState que é do lado do cliente, usa-se o use client
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import routes from "@/data/routes.json";
import styles from "@/styles/Header.module.css";
import Image from "next/image";


export function Header() {
  // definindo o método para abri o menu hamburguer
  // open começará em false!
  const [open, setOpen] = useState(false);


  return (
    <header className={`w-full border-b-2 ${styles.header} pr-4 pl-10`}>
      <div
        className={`container mx-auto flex justify-between items-center px-4 py-3`}
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              width={80}
              height={60}
              alt="Logo Casa Reviver Preta"
              src="/logo/LogoTextoPreta.png"
            />
          </Link>
        </div>

        {/* o nav estará escondido até que a tela seja maior que 768px, quando o display será flex */}
        <nav className="hidden md:flex gap-2">
          {routes.map((rota) => (
            <Link
              key={rota.href}
              href={rota.href}
              className="block py-2 font-medium text-gray-800 hover:text-amber-600"
            >
              {rota.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="md:hidden hover:cursor-pointer"
          // Ao clicar irá fazer o oposto da definição, logo, de false para true e vice-versa
          onClick={() => setOpen(!open)}
        >
          {
            // Se open == true, o X será exibido, se não, será o menu hamburguer
            open ? <X /> : <Menu />
          }
        </Button>

        {
          // Função para aparecer as opções
          open && (
            <nav className={`md:hidden flex px-4 ${styles.menu}`}>
              {routes.map((rota) => (
                <Link
                  key={rota.href}
                  href={rota.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-gray-800 hover:text-amber-600"
                >
                  {rota.label}
                </Link>
              ))}
            </nav>
          )
        }
      </div>
    </header>
  );
}
