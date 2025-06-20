"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";

// Da para usar arquivos svg, mas assim ficou bom também
export function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-sm text-gray-700">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Parte 1: Logo + slogan + redes sociais */}
        <div className="flex flex-col items-start gap-2">
          <Image
            width={60}
            height={60}
            alt="Logo Casa Reviver Preta"
            src="/logo/LogoTextoPreta.png"
          />
          <p>Sonho de um menino que se tornou realidade em 2006.</p>
          <div className="flex gap-4 mt-2 text-blue-700">
            <a
              href="https://www.instagram.com/casareviver"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com/@CasaReviver"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 hover:text-red-600" />
            </a>
            <a
              href="https://www.tiktok.com/@casareviver"
              target="_blank"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 hover:text-black" />
            </a>
            <a
              href="https://www.facebook.com/casareviver"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 hover:text-blue-800" />
            </a>
          </div>
        </div>

        {/* Parte 2: Contato */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-blue-700 mb-1">
            Conecte-se
          </h3>
          <p>📍 Rua da Esperança, 123 - Morro do Estado</p>
          <p>📞 (21) 99999-9999</p>
          <p>✉️ contato@casareviver.org</p>
          <p>🕐 Seg a Sex – 8h às 17h</p>
        </div>

        {/* Parte 3: Links úteis */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-blue-700 mb-1">Links</h3>
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de uso
          </Link>
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="w-full bg-gray-200 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Casa Reviver. Todos os direitos reservados.
      </div>
    </footer>
  );
}
