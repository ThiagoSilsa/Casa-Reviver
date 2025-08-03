"use client";
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--casa-amarelo)] via-[var(--casa-laranja)] to-[var(--casa-azul)] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Transformando Vidas na
            <span className="block text-[var(--casa-amarelo)]">Comunidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp">
            Desde 2006, a Casa Reviver atende mais de 200 famílias no Morro do
            Estado com atividades socioeducativas, apoio psicológico e
            desenvolvimento social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link href="/doacoes">
              <Button
                size="lg"
                className="bg-white text-[var(--casa-laranja)] hover:bg-gray-100 text-lg px-8 py-4"
              >
                Doar Agora
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/seja-voluntario">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--casa-azul)] text-lg px-8 py-4"
              >
                Seja Voluntário
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-16 bg-gray-50">
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
                200+
              </h3>
              <p className="text-gray-600">Famílias Atendidas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-azul)] mb-2">
                19
              </h3>
              <p className="text-gray-600">Anos de História</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-roxo)] mb-2">
                8
              </h3>
              <p className="text-gray-600">Projetos Ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--casa-amarelo)] rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Heart className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--casa-amarelo)] mb-2">
                ∞
              </h3>
              <p className="text-gray-600">Vidas Transformadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-gradient">Parceiros</span>
            </h2>
            <p className="text-xl text-gray-600">
              Juntos, construímos uma rede de apoio e transformação social
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold text-[var(--casa-azul)]">146xFavela</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold text-[var(--casa-laranja)]">
                CRAC Alimentos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-bold text-[var(--casa-roxo)]">
                Sempre Criança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--casa-azul)] to-[var(--casa-roxo)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte Dessa Transformação
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Sua ajuda faz a diferença na vida de mais de 200 famílias. Seja
            através de doações ou voluntariado, juntos podemos construir um
            futuro melhor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/doacoes">
              <Button
                size="lg"
                className="bg-[var(--casa-amarelo)] text-gray-900 hover:bg-[var(--casa-amarelo)]/90 text-lg px-8 py-4"
              >
                Doar Agora
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/seja-voluntario">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--casa-azul)] text-lg px-8 py-4"
              >
                Seja Voluntário
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
