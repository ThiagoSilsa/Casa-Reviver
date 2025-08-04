'use client';

import { useState } from 'react';
import { Heart, Users, Calendar, BookOpen, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SejaVoluntario() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerImages = [
    "/banner-principal/Foto1.png",
    "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const oportunidades = [
    {
      titulo: 'Atividades Socioeducativas',
      descricao: 'Ajude no desenvolvimento das crianças através de atividades lúdicas e educativas.',
      icon: BookOpen,
      cor: 'casa-azul'
    },
    {
      titulo: 'Projetos Especiais',
      descricao: 'Participe dos nossos projetos como Ler o Mundo, Os Crias e Roda de Gestante.',
      icon: Heart,
      cor: 'casa-laranja'
    },
    {
      titulo: 'Eventos Anuais',
      descricao: 'Colabore na organização das nossas grandes festividades e atividades especiais.',
      icon: Calendar,
      cor: 'casa-roxo'
    },
    {
      titulo: 'Apoio Administrativo',
      descricao: 'Contribua com habilidades administrativas, comunicação e gestão de projetos.',
      icon: Users,
      cor: 'casa-amarelo'
    }
  ];

  // Auto slide do banner
  useState(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen">
      {/* Banner com Carrossel */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Voluntários em ação ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seja <span className="text-[var(--casa-amarelo)]">Voluntário</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Transforme vidas e seja parte da nossa história de amor e dedicação à comunidade
            </p>
            <Button 
              size="lg" 
              className="bg-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)]/90 text-white text-lg px-8 py-4"
            >
              Inscreva-se Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Como se Tornar Voluntário */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como se Tornar <span className="text-gradient">Voluntário?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você pode participar como voluntário, ajudando a construir atividades e colaborando 
              no dia a dia da Casa Reviver ao lado das nossas equipes especializadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Escolha sua Frente</h3>
                <p className="text-gray-600">
                  Escolha uma das nossas frentes de atuação e contribua diretamente 
                  com o desenvolvimento das crianças e da comunidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Defina sua Disponibilidade</h3>
                <p className="text-gray-600">
                  Não pode estar com a gente todos os dias? Sem problemas! 
                  Temos atividades fixas perfeitas para diferentes disponibilidades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Acompanhe as Redes</h3>
                <p className="text-gray-600">
                  Sempre avisamos nas redes sociais quando abrimos inscrições 
                  para voluntariado. Fique de olho e venha somar com a gente!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oportunidades de Voluntariado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oportunidades de <span className="text-gradient">Voluntariado</span>
            </h2>
            <p className="text-xl text-gray-600">
              Encontre a área que mais combina com você e suas habilidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oportunidades.map((oportunidade, index) => {
              const IconComponent = oportunidade.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-[var(--${oportunidade.cor})] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[var(--casa-laranja)] transition-colors">
                        {oportunidade.titulo}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {oportunidade.descricao}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos de Voluntários */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos de <span className="text-gradient">Voluntários</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Maria Silva</h4>
                    <p className="text-sm text-gray-600">Voluntária há 2 anos</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Ser voluntária na Casa Reviver transformou minha vida. Ver o sorriso das crianças 
                  e saber que estou fazendo diferença na comunidade não tem preço."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--casa-azul)] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">João Santos</h4>
                    <p className="text-sm text-gray-600">Voluntário há 1 ano</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "A Casa Reviver me ensinou o verdadeiro significado de comunidade. 
                  Aqui, todos colaboram para construir um futuro melhor juntos."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Costa</h4>
                    <p className="text-sm text-gray-600">Voluntária há 3 anos</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Cada dia como voluntária é uma oportunidade de aprender e crescer. 
                  As crianças me ensinam tanto quanto eu ensino a elas."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-[var(--casa-laranja)] to-[var(--casa-roxo)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Fazer a Diferença?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se à nossa família de voluntários e ajude a transformar vidas na comunidade. 
            Sua energia, tempo e carinho são fundamentais para nosso trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--casa-amarelo)] text-gray-900 hover:bg-[var(--casa-amarelo)]/90 text-lg px-8 py-4">
              Quero me Inscrever
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--casa-roxo)] text-lg px-8 py-4">
              Saiba Mais
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg">
              Siga nossas <strong>redes sociais</strong> para ficar por dentro das inscrições!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}