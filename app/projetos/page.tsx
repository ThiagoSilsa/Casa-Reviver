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

export default function Projetos() {
  const projetos = [
    {
      id: "ler-o-mundo",
      nome: "Projeto Ler o Mundo",
      descricao:
        "Oferecendo aos jovens e adultos a chance de enxergar a vida com novos olhos, por meio da leitura, escuta e descoberta.",
      imagem: "/projetos/Foto1.jpg",
      icon: BookOpen,
      cor: "casa-azul",
    },
    {
      id: "roda-gestante",
      nome: "Roda de Gestante",
      descricao:
        "Espaço de acolhimento, escuta e proteção para futuras mamães durante a gestação.",
      imagem: "/projetos/Foto2.jpg",
      icon: Heart,
      cor: "casa-laranja",
    },
    {
      id: "atividades-socioeducativas",
      nome: "Atividades Socioeducativas",
      descricao:
        "Criadas para o contraturno escolar das crianças, acolhendo, despertando e fortalecendo.",
      imagem: "/projetos/Foto3.jpg",
      icon: Users,
      cor: "casa-roxo",
    },
    {
      id: "os-crias",
      nome: "Os Crias",
      descricao:
        "Projeto que orienta jovens para a vida adulta e mapeia demandas do território.",
      imagem: "/projetos/Foto4.png",
      icon: Mic,
      cor: "casa-amarelo",
    },
    {
      id: "roda-guerreiras",
      nome: "Roda de Conversa Guerreiras",
      descricao:
        "Espaço de escuta, acolhimento e fortalecimento entre as mulheres da comunidade.",
      imagem:
        "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=500",
      icon: Shield,
      cor: "casa-laranja",
    },
    {
      id: "maes-atipicas",
      nome: "Roda de Conversa Mães Atípicas",
      descricao:
        "Cuidar de quem cuida. Espaço de escuta acolhedora para mães que vivenciam sobrecarga.",
      imagem:
        "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=500",
      icon: Sparkles,
      cor: "casa-azul",
    },
    {
      id: "varal-solidario",
      nome: "Varal Solidário",
      descricao:
        "Economia circular e sustentabilidade: pegar o que precisa e deixar o que não usa mais.",
      imagem:
        "https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg?auto=compress&cs=tinysrgb&w=500",
      icon: Gift,
      cor: "casa-roxo",
    },
    {
      id: "as-marias",
      nome: "As Marias",
      descricao:
        "Grupo de teatro formado por mulheres da comunidade que conta histórias de vida e território.",
      imagem:
        "https://images.pexels.com/photos/3646372/pexels-photo-3646372.jpeg?auto=compress&cs=tinysrgb&w=500",
      icon: Calendar,
      cor: "casa-amarelo",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--casa-laranja)] to-[var(--casa-roxo)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-[var(--casa-amarelo)]">Projetos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            8 projetos transformando vidas e construindo um futuro melhor para
            nossa comunidade
          </p>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-16">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-laranja)] mb-2">
                200+
              </h3>
              <p className="text-gray-600">Pessoas Atendidas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-azul)] mb-2">
                8
              </h3>
              <p className="text-gray-600">Projetos Ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-roxo)] mb-2">
                365
              </h3>
              <p className="text-gray-600">Dias por Ano</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-amarelo)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-amarelo)] mb-2">
                ∞
              </h3>
              <p className="text-gray-600">Vidas Transformadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--casa-azul)] to-[var(--casa-amarelo)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Quer Conhecer Nossos Projetos de Perto?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
            Venha nos visitar ou seja voluntário em um dos nossos projetos. Sua
            participação faz toda a diferença!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </div>
  );
}
