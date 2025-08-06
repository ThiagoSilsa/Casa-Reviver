"use client";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Shield,
  Users,
  Sparkles,
  Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import atividades from "@/data/atividades";

export default function Atividades() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:h-96 py-5">
        <div className="absolute inset-0">
          <div
            key=""
            className={`absolute inset-0 transition-opacity duration-1000 "
                          }`}
          >
            <Image
              className="w-full h-full object-cover object-[center_45%]"
              width={100}
              height={60}
              alt={`Voluntários em ação`}
              src={"/banner-atividades/Foto1.jpg"}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white lg:justify-start animate-fadeInUp">
          <div className="max-w-4xl px-4">
            <div id="Textos" className="flex-col">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-left">
                Nossas{" "}
                <span className="text-[var(--casa-amarelo)]"> atividades</span>
              </h1>
              <p className="text-sm md:text-2xl mb-8 max-w-2xl mx-auto text-left">
                4 atividades fixas anuais abertas para toda comunidade e cidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Atividades */}
      <section className="py-16 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {atividades.map((atividade, index) => {
              const IconComponent = atividade.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={atividade.imagem}
                      alt={atividade.nome}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 object-[center_58%]"
                    />
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 bg-[var(--${atividade.cor})] rounded-full flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {atividade.periodo}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[var(--casa-laranja)] transition-colors">
                      {atividade.nome}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {atividade.descricao}
                    </p>

                    <Link href={`/atividades/${atividade.id}`}>
                      <Button className="w-full bg-[var(--casa-laranja)] hover:bg-[var-(--casa-laranja)] text-white">
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

      {/* Impacto das Atividades */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto das <span className="text-gradient">Atividades</span>
            </h2>
            <p className="text-xl text-gray-600">
              Números que mostram nossa dedicação à comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                500+
              </h3>
              <p className="text-gray-600">Crianças no Dia das Crianças</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-azul)] mb-2">
                6
              </h3>
              <p className="text-gray-600">Edições Caminhada Laranja</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-roxo)] mb-2">
                2x
              </h3>
              <p className="text-gray-600">Colônias por Ano</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                10
              </h3>
              <p className="text-gray-600">Anos de Festa de Natal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Participar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como <span className="text-gradient">Participar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossas atividades são abertas para toda a comunidade e sempre
              precisamos de voluntários para tornar cada evento ainda mais
              especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Participe
                </h3>
                <p className="text-gray-600">
                  Todas as atividades são abertas para a comunidade. Venha com
                  sua família e participe dos nossos eventos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Seja Voluntário
                </h3>
                <p className="text-gray-600">
                  Ajude na organização, estrutura, recepção e cobertura
                  fotográfica. Sempre avisamos nas redes sociais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Acompanhe
                </h3>
                <p className="text-gray-600">
                  Siga nossas redes sociais para ficar por dentro das datas,
                  inscrições e como participar de cada atividade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action com imagem */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Seção de imagem - agora com altura fixa em todas as telas */}
          <div className="order-1 lg:order-2 relative h-64 md:h-80 lg:h-auto">
            <Image
              src="/projetos/Foto3.jpg"
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
