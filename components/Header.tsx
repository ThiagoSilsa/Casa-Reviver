'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/historia', label: 'História' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/atividades', label: 'Atividades' },
    { href: '/contato', label: 'Contato' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              <Image
              width={100}
              height={60}
              alt="Logo Casa Reviver Preta"
              src="/logo/LogoPretaPura.png"
            />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Casa Reviver</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--casa-laranja)]",
                  isActive(item.href) ? "text-[var(--casa-laranja)]" : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/seja-voluntario"
              className="px-4 py-2 text-sm font-medium text-[var(--casa-azul)] border border-[var(--casa-azul)] rounded-md hover:bg-[var(--casa-azul)] hover:text-white transition-colors"
            >
              Seja Voluntário
            </Link>
            <Link
              href="/doacoes"
              className="px-4 py-2 text-sm font-medium text-white bg-[var(--casa-laranja)] rounded-md hover:bg-[var(--casa-azul)] transition-colors "
            >
              Doar Agora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[var(--casa-laranja)]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-[var(--casa-laranja)] bg-orange-50"
                      : "text-gray-700 hover:text-[var(--casa-laranja)] hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/seja-voluntario"
                  className="block px-3 py-2 text-center text-sm font-medium text-[var(--casa-azul)] border border-[var(--casa-azul)] rounded-md hover:bg-[var(--casa-azul)] hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Seja Voluntário
                </Link>
                <Link
                  href="/doacoes"
                  className="block px-3 py-2 text-center text-sm font-medium text-white bg-[var(--casa-laranja)] rounded-md hover:bg-[var(--casa-azul)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Doar Agora
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;