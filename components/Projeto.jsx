import Link from "next/link";
import { ArrowLeft, Heart, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import projetos from "@/data/projetos";

// Dados dos projetos (pode ser movido para um arquivo externo depois)

export default function Projeto({numero}) {
  const projeto = projetos[numero];

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Cabeçalho com imagem de fundo */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src={projeto.imagemCapa}
          alt={`Capa do projeto ${projeto.nome}`}
          fill
          className="object-cover object-[center_65%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Conteúdo */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col py-6">
              <Link href="/projetos">
                <Button
                  variant="outline"
                  className="mb-6 bg-transparent text-white hover:bg-white hover:text-[var(--casa-laranja)]"
                >
                  <ArrowLeft className="mr-2" />
                  Voltar para projetos
                </Button>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {projeto.nome}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
<section className="py-16 w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Coluna principal */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-[var(--casa-azul)]">
                Sobre o projeto
              </h2>
              <p className="text-lg leading-relaxed mb-8 whitespace-pre-line text-justify">
                {projeto.descricaoLonga}
              </p>

              {/* Galeria de imagens */}
              <h3
                id="Momentos"
                className="text-xl font-bold mb-6 text-[var(--casa-laranja)]"
              >
                Momentos do projeto
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {projeto.imagensGaleria.map((imagem, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={imagem}
                      alt={`${projeto.nome} - Foto ${index + 1}`}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>

              {/* Depoimentos */}
              {/* {projeto.depoimentos && projeto.depoimentos.length > 0 && (
              <>
                <div id="Depoimentos">
                  <h3 className="text-xl font-bold mb-6 text-[var(--casa-roxo)]">
                    Depoimentos
                  </h3>
                  <div className="space-y-6">
                    {projeto.depoimentos.map((depoimento, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--casa-amarelo)]"
                      >
                        <p className="italic mb-4">"{depoimento.texto}"</p>
                        <p className="font-semibold text-[var(--casa-laranja)]">
                          — {depoimento.autor}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )} */}
            </div>

            {/* Sidebar com informações */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg top-6">
                <h3 className="text-xl font-bold mb-6 text-[var(--casa-azul)]">
                  Informações Práticas
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[var(--casa-laranja)] mt-1" />
                    <div>
                      <h4 className="font-bold">Local</h4>
                      <p>{projeto.detalhes.local}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[var(--casa-azul)] mt-1" />
                    <div>
                      <h4 className="font-bold">Período</h4>
                      <p>{projeto.detalhes.horario}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-[var(--casa-roxo)] mt-1" />
                    <div>
                      <h4 className="font-bold">Público-Alvo</h4>
                      <p>{projeto.detalhes.publico}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Link href="/doacoes">
                    <Button className="w-full bg-white text-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)] shadow-md hover:text-white">
                      <Heart className="mr-2" />
                      Doar agora
                    </Button>
                  </Link>

                  <Link href="/seja-voluntario">
                    <Button
                      variant="outline"
                      className="w-full bg-white text-[var(--casa-azul)] hover:bg-[var(--casa-azul)] shadow-md hover:text-white"
                    >
                      <Users className="mr-2" />
                      Seja voluntário
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
