"use client";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Mic,
  Shield,
  Sparkles,
  Calendar,
  Gift,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import projetos from "@/data/projetos";
import Counter from "@/components/Counter";

export default function Projetos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:h-96 py-5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 transition-opacity duration-1000">
            <Image
              className="w-full h-full object-cover object-[center_40%]"
              width={100}
              height={60}
              alt="Voluntários em ação"
              src="/banner-projetos/Foto1.jpg"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white lg:justify-start animate-fadeInUp px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div id="Textos" className="flex-col">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-left">
                Nossos{" "}
                <span className="text-[var(--casa-amarelo)]"> projetos</span>
              </h1>
              <p className="text-sm md:text-2xl mb-8 max-w-3xl text-left">
                8 projetos transformando vidas e construindo um futuro melhor
                para nossa comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-16 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projetos.map((projeto, index) => {
              const IconComponent = projeto.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={projeto.imagem}
                      alt={projeto.nome}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-[var(--${projeto.cor})] rounded-full flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[var(--casa-laranja)] transition-colors">
                      {projeto.nome}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {projeto.descricao}
                    </p>

                    <Link href={`/projetos/${projeto.id}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-[var(--casa-laranja)] group-hover:text-white group-hover:border-[var(--casa-laranja)] transition-colors"
                      >
                        Saiba Mais
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estatísticas dos Projetos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto dos <span className="text-gradient">Projetos</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                <Counter end={200} />+
              </h3>
              <p className="text-gray-600">Pessoas Atendidas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <BookOpen className="w-8 h-8 text-white " />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-azul)] mb-2">
                <Counter end={8} />+
              </h3>
              <p className="text-gray-600">Projetos Ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-roxo)] mb-2">
                <Counter end={365} />+
              </h3>
              <p className="text-gray-600">Dias por Ano</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                ∞
              </h3>
              <p className="text-gray-600">Vidas Transformadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action com imagem */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Seção de imagem - agora com altura fixa em todas as telas */}
          <div className="order-1 lg:order-2 relative h-64 md:h-80 lg:h-auto">
            <Image
              src="/projetos/as-marias/Foto2.jpg"
              alt="Pessoas participando dos projetos"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Seção de texto - cor de fundo */}
          <div className="bg-[var(--casa-roxo)] p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Quer conhecer nossos projetos de perto?
              </h2>
              <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white">
                Venha nos visitar ou seja voluntário em um dos nossos projetos.
                Sua participação faz toda a diferença!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/doacoes" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-white text-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)] hover:text-white text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4"
                  >
                    Doar agora
                    <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link href="/seja-voluntario" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-white text-[var(--casa-azul)] hover:bg-[var(--casa-azul)] hover:text-white text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4"
                  >
                    Seja voluntário
                    <Users className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
