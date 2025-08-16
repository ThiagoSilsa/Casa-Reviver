import Link from "next/link";
import {
  Heart,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-casa-laranja rounded-full flex items-center justify-center">
                <Image
                  width={100}
                  height={60}
                  alt="Logo Casa Reviver Preta"
                  src="/logo/LogoPretaPura.png"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Casa Reviver</h3>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Desde 2006 transformando vidas na comunidade do Morro do Estado,
              oferecendo atividades socioeducativas, apoio psicológico e
              desenvolvimento social para mais de 200 famílias.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/casareviver/"
                target="_blank"
                className="p-2 bg-[var(--casa-laranja)] rounded-full hover:bg-[var(--casa-laranja)]/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/casareviveroficial/?locale=pt_BR"
                target="_blank"
                className="p-2 bg-[var(--casa-azul)] rounded-full hover:bg-[var(--casa-azul)]/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=nHkbwaDCeOg"
                target="_blank"
                className="p-2 bg-[var(--casa-roxo)] rounded-full hover:bg-[var(--casa-roxo)]/80 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Conecte-se */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--casa-amarelo)]">
              Conecte-se
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/projetos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nossos Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/atividades"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Atividades
                </Link>
              </li>
              <li>
                <Link
                  href="/seja-voluntario"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Seja Voluntário
                </Link>
              </li>
              <li>
                <Link
                  href="/doacoes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Como Doar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--casa-amarelo)]">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[var(--casa-laranja)]" />
                <span className="text-gray-300 text-sm">
                  Rua Padre Anchieta, 168 - Centro, Niterói
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[var(--casa-laranja)]" />
                <span className="text-gray-300 text-sm">(21) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[var(--casa-laranja)]" />
                <span className="text-gray-300 text-sm">
                  contato@casareviver.org
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e links legais */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Casa Reviver. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/termos"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
