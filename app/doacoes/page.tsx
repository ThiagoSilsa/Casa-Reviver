'use client';
import { Heart, Gift, BookOpen, ShirtIcon, UtensilsIcon, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Doacoes() {
  const [copied, setCopied] = useState(false);
  const pixCNPJ = "02.392.823/0001-35";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCNPJ);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--casa-amarelo)] to-[var(--casa-laranja)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Como <span className="text-white">Doar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-800">
            A Casa Reviver é uma organização sem fins lucrativos e sua doação é 
            essencial para continuarmos nosso trabalho
          </p>
        </div>
      </section>

      {/* Doação via PIX */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2 border-[var(--casa-laranja)]">
            <CardHeader className="text-center bg-gradient-to-r from-[var(--casa-laranja)] to-[var(--casa-azul)] text-white">
              <CardTitle className="text-3xl font-bold flex items-center justify-center">
                <Heart className="w-8 h-8 mr-3" />
                Doação via PIX
              </CardTitle>
              <p className="text-xl mt-2">A forma mais rápida e fácil de contribuir</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Você pode contribuir com <strong>qualquer valor</strong> via PIX usando nosso CNPJ:
                </p>
                
                <div className="bg-gray-50 border-2 border-dashed border-[var(--casa-laranja)] rounded-lg p-6 mb-6">
                  <p className="text-sm text-gray-600 mb-2">CNPJ da Casa Reviver:</p>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl font-mono font-bold text-[var(--casa-azul)]">
                      {pixCNPJ}
                    </span>
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="sm"
                      className="border-[var(--casa-laranja)] text-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)] hover:text-white"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copiado!' : 'Copiar'}
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Button 
                    className="bg-[var(--casa-azul)] hover:bg-[var(--casa-azul)]/90 text-white h-12"
                    onClick={() => alert('Redirecionando para PIX com valor R$ 10,00')}
                  >
                    R$ 10
                  </Button>
                  <Button 
                    className="bg-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)]/90 text-white h-12"
                    onClick={() => alert('Redirecionando para PIX com valor R$ 25,00')}
                  >
                    R$ 25
                  </Button>
                  <Button 
                    className="bg-[var(--casa-roxo)] hover:bg-[var(--casa-roxo)]/90 text-white h-12"
                    onClick={() => alert('Redirecionando para PIX com valor R$ 50,00')}
                  >
                    R$ 50
                  </Button>
                  <Button 
                    className="bg-[var(--casa-amarelo)] hover:bg-[var(--casa-amarelo)]/90 text-gray-900 h-12"
                    onClick={() => alert('Redirecionando para PIX com valor R$ 100,00')}
                  >
                    R$ 100
                  </Button>
                </div>
                
                <p className="text-gray-600">
                  Ou escolha o valor que desejar ao fazer a transferência PIX
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Outras Formas de Doação */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outras Formas de <span className="text-gradient">Contribuir</span>
            </h2>
            <p className="text-xl text-gray-600">
              Além de doações em dinheiro, também recebemos doações de materiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--casa-azul)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[var(--casa-azul)]">Livros</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Doações de livros para nossa biblioteca. Especialmente:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Livros infantis</li>
                  <li>• Literatura juvenil</li>
                  <li>• Livros didáticos</li>
                  <li>• Livros para alfabetização de adultos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShirtIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[var(--casa-laranja)]">Roupas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Roupas em bom estado para o Varal Solidário:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Roupas infantis</li>
                  <li>• Roupas juvenis</li>
                  <li>• Roupas adultas</li>
                  <li>• Calçados em bom estado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[var(--casa-roxo)]">Alimentos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Alimentos para o lanche das crianças:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Biscoitos</li>
                  <li>• Frutas</li>
                  <li>• Sucos naturais</li>
                  <li>• Alimentos não perecíveis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pontos de Coleta */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pontos de <span className="text-gradient">Coleta</span>
            </h2>
            <p className="text-xl text-gray-600">
              Locais onde você pode entregar suas doações de materiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--casa-azul)] flex items-center">
                  <Gift className="w-6 h-6 mr-3" />
                  Icaraí
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Rua Belisário Augusto, 91</p>
                  <p className="text-gray-600">Aos cuidados de Lia Castanho</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-medium text-gray-700 mb-2">Recebemos:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Livros para biblioteca</li>
                    <li>✓ Roupas para Varal Solidário</li>
                    <li>✓ Alimentos para lanche das crianças</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--casa-laranja)] flex items-center">
                  <Gift className="w-6 h-6 mr-3" />
                  Centro - Sede
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Rua Padre Anchieta, 168</p>
                  <p className="text-gray-600">Casa Reviver - Sede Principal</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-medium text-gray-700 mb-2">Recebemos:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Livros para biblioteca</li>
                    <li>✓ Roupas para Varal Solidário</li>
                    <li>✓ Alimentos para lanche das crianças</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-[var(--casa-azul)] border-2">
            <CardHeader className="bg-[var(--casa-azul)] text-white text-center">
              <CardTitle className="text-2xl font-bold">Transparência e Prestação de Contas</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Garantimos total transparência</strong> no uso das doações recebidas. 
                  Todos os recursos são destinados exclusivamente para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Manutenção e melhoria da sede da Casa Reviver</li>
                  <li>Material didático e pedagógico para as atividades</li>
                  <li>Alimentação para as crianças e famílias atendidas</li>
                  <li>Equipamentos e recursos para os projetos</li>
                  <li>Capacitação da equipe técnica</li>
                </ul>
                <div className="border-t pt-4 mt-6">
                  <p className="text-center text-gray-600">
                    <strong>CNPJ:</strong> 02.392.823/0001-35<br />
                    <strong>Organização sem fins lucrativos</strong> certificada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-[var(--casa-roxo)] to-[var(--casa-azul)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Toda Ajuda Faz Diferença
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Sua generosidade impulsiona o desenvolvimento das famílias da nossa comunidade. 
            Obrigada por caminhar com a gente!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[var(--casa-amarelo)] text-gray-900 hover:bg-[var(--casa-amarelo)]/90 text-lg px-8 py-4"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="mr-2 w-5 h-5" /> : <Copy className="mr-2 w-5 h-5" />}
              {copied ? 'CNPJ Copiado!' : 'Copiar CNPJ PIX'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}