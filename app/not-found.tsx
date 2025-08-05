'use client';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--casa-amarelo)] via-[var(--casa-laranja)] to-[var(--casa-azul)] flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4 text-white/90">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Página Não Encontrada
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Parece que você se perdeu no caminho. Não se preocupe, isso acontece! 
            Vamos te levar de volta para casa.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-white text-[var(--casa-azul)] hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-[var(--casa-azul)] hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Página Anterior
          </Button>
        </div>
        
        <div className="mt-12">
          <p className="text-lg text-white/80">
            Quer conhecer nosso trabalho? Visite nossa página de 
            <Link href="/projetos" className="underline hover:no-underline ml-1">
              projetos
            </Link> ou 
            <Link href="/historia" className="underline hover:no-underline ml-1">
              nossa história
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}