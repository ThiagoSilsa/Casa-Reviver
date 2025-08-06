"use client";
import { Play, ArrowRight, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Historia() {
  const etapasHistoria = [
    {
      ano: "2006",
      titulo: "O Sonho Começa",
      descricao:
        "Um menino da comunidade sonha com um espaço seguro para todas as famílias do Morro do Estado.",
      imagem: "/linha-do-tempo/Foto1.jpg",
    },
    {
      ano: "2008",
      titulo: "Primeiros Passos",
      descricao:
        "Subindo as escadarias com um saco de balas e histórias infantis para contar às crianças.",
      imagem: "/linha-do-tempo/Foto2.jpg",
    },
    {
      ano: "2015",
      titulo: "Crescimento",
      descricao:
        "Expansão das atividades e construção da sede própria com ajuda da comunidade.",
      imagem: "/linha-do-tempo/Foto3.jpg",
    },
    {
      ano: "2020",
      titulo: "Adaptação",
      descricao:
        "Reinvenção durante a pandemia, mantendo o apoio às famílias de forma criativa.",
      imagem: "/linha-do-tempo/Foto4.jpg",
    },
    {
      ano: "2024",
      titulo: "Hoje",
      descricao:
        "19 anos de história, mais de 200 famílias atendidas e uma referência na comunidade.",
      imagem: "/linha-do-tempo/Foto5.jpg",
    },
  ];

  const fotosCarrossel = [
    "/atividades/Foto1.jpg",
    "/banner-voluntario/Foto1.jpg",
    "/projetos/Foto2.jpg",
    "/projetos/Foto8.jpg",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden md:h-96 py-5 ">
        <div className="absolute inset-0">
          <div
            key=""
            className={`absolute inset-0 transition-opacity duration-1000 "
              }`}
          >
            <Image
              className="w-full h-full object-cover object-[center_70%]"
              width={100}
              height={60}
              alt={`Voluntários em ação`}
              src={"/banner-historia/Foto1.jpg"}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white lg:justify-start animate-fadeInUp">
          <div className="max-w-4xl px-4">
            <div id="Textos" className="flex-col">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp text-left">
                Nossa{" "}
                <span className="text-[var(--casa-amarelo)]"> história</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-left">
                19 anos de transformação, resistência e amor pela comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós / Vídeo */}
      <section className="py-16 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Como o projeto <span className="text-gradient">surgiu?</span>
              </h2>
              <div className="text-lg text-gray-700 space-y-4 text-justify">
                <p>
                  A Casa Reviver nasceu em 2006, a partir do sonho puro e
                  corajoso de um menino da comunidade. Desde pequeno, ele
                  desejava um lugar seguro, não apenas para si, mas para todas
                  as famílias do Morro do Estado, um espaço onde pudessem
                  crescer com dignidade, acolhimento e oportunidades por meio de
                  atividades socioeducativas.
                </p>
                <p>
                  Esse menino cresceu, mas nunca esqueceu o sonho que carregava
                  no peito. Ao lado de sua esposa, decidiu transformá-lo em
                  realidade. Subiu as escadarias da comunidade com um saco de
                  balas nas mãos, uma imensa vontade de contar histórias
                  infantis e o desejo profundo de oferecer às crianças o que ele
                  não teve: um espaço seguro para se desenvolver.
                </p>
                <p>
                  Hoje, 19 anos depois, a Casa Reviver é um símbolo de
                  resistência, afeto e transformação. Tornou-se uma referência
                  viva para os moradores, que, ao longo dessa caminhada,
                  ajudaram a construir cada atividade, erguer cada parede da
                  nossa sede e seguir firmes na luta por direitos, dignidade e
                  acesso à cidade.
                </p>
              </div>
            </div>

            <div id="iframe" className="relative">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nHkbwaDCeOg?si=puPmH0tjAF4N3i7u"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline das Etapas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Linha do <span className="text-gradient">Tempo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Momentos importantes da nossa jornada
            </p>
          </div>

          <div className="space-y-8">
            {etapasHistoria.map((etapa, index) => (
              <div
                key={index}
                className={`flex-col sm:flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {etapa.ano}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {etapa.titulo}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg">{etapa.descricao}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  
                  <img
                    src={etapa.imagem}
                    alt={etapa.titulo}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrossel de Fotos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Momentos <span className="text-gradient">Especiais</span>
            </h2>
            <p className="text-xl text-gray-600">
              Registros da nossa jornada ao longo dos anos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fotosCarrossel.map((foto, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={foto}
                  alt={`Momento especial ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
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
