"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Eventos", href: "/eventos" },
  { label: "Doações", href: "/doacoes" },
  { label: "Fotos", href: "/fotos" },
  { label: "Seja Voluntário", href: "/seja-voluntario" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Casa Reviver
        </Link>
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600 font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 font-medium text-gray-800 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}