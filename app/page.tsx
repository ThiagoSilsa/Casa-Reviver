"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import {
  Heart,
  Users,
  Target,
  Eye,
  Award,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Counter from "@/components/Counter";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "/banner-principal/Foto1.jpg",
    "/banner-principal/Foto2.jpg",
    "/banner-principal/Foto3.jpg",
  ];

  useState(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:h-96 ">
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                className="w-full h-full object-cover"
                width={100}
                height={60}
                alt={`Voluntários em ação ${index + 1}`}
                src={image}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Container de conteúdo */}
        <div className="relative h-full flex items-center text-white animate-fadeInUp">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col py-8">
              {/* <-- Espaçamento vertical */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-left">
                Transformando vidas na
                <span className="block text-[var(--casa-amarelo)]">
                  comunidade
                </span>
              </h1>
              <p className="text-sm md:text-2xl mb-8 max-w-3xl text-left">
                Desde 2006, a Casa Reviver atende mais de 200 famílias no Morro
                do Estado com atividades socioeducativas, apoio psicológico e
                desenvolvimento social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-left">
                <Link href="/doacoes">
                  <Button
                    size="lg"
                    className="bg-white text-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)] shadow-md hover:text-white text-lg px-8 py-4"
                  >
                    Doar Agora
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/seja-voluntario">
                  <Button
                    size="lg"
                    className="bg-white text-[var(--casa-azul)] hover:bg-[var(--casa-azul)] shadow-md hover:text-white text-lg px-8 py-4"
                  >
                    Seja Voluntário
                    <Users className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-16 bg-gray-50 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso <span className="text-gradient">Impacto</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              19 anos transformando vidas e construindo um futuro melhor para
              nossa comunidade
            </p>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                <Counter end={200}
                />+
              </h3>
              <p className="text-gray-600">Famílias atendidas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-azul)] mb-2">
                <Counter end={19}/>
              </h3>
              <p className="text-gray-600">Anos de história</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-roxo)] mb-2">
                <Counter end={8}/>
              </h3>
              <p className="text-gray-600">Projetos ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                ∞
              </h3>
              <p className="text-gray-600">Vidas transformadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-gradient">Essência</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-[var(--casa-laranja)] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--casa-laranja)] mb-4">
                  Missão
                </h3>
                <p className="text-gray-600">
                  Transformar vidas através de atividades socioeducativas,
                  oferecendo um espaço seguro de desenvolvimento, acolhimento e
                  oportunidades para as famílias do Morro do Estado.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[var(--casa-azul)] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--casa-azul)] mb-4">
                  Visão
                </h3>
                <p className="text-gray-600">
                  Ser referência em desenvolvimento social, criando um futuro
                  onde cada família tenha acesso à dignidade, educação e
                  oportunidades de crescimento em nossa comunidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[var(--casa-roxo)] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--casa-roxo)] mb-4">
                  Valores
                </h3>
                <p className="text-gray-600">
                  Acolhimento, resistência, afeto, dignidade, inclusão e
                  transformação social. Construímos cada atividade com as mãos,
                  sonhos e força das famílias da nossa comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-16 bg-gray-50 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-gradient">parceiros</span>
            </h2>
            <p className="text-xl text-gray-600">
              Juntos, construímos uma rede de apoio e transformação social
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                width={100}
                height={60}
                alt="Logo Casa Reviver Preta"
                src="/parceiros/146xfavela.jpg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                width={100}
                height={60}
                alt="Logo Casa Reviver Preta"
                src="/parceiros/CRAC.png"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                width={100}
                height={60}
                alt="Logo Casa Reviver Preta"
                src="/parceiros/SempreCrianca.png"
              />
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
              src="/projetos/Foto1.jpg"
              alt="Pessoas participando dos projetos"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Seção de texto - cor de fundo */}
          <div className="bg-[var(--casa-roxo)] py-10 order-2 lg:order-1 px-4">
            <div className="h-full flex flex-col justify-center w-full lg:pl-24 md:pl-2">
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

      {/* Instagram */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siga no <span className="text-gradient">Instagram</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Acompanhe nossas atividades e conquistas diárias
            </p>
            <a
              href="https://www.instagram.com/casareviver/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @casareviver
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
