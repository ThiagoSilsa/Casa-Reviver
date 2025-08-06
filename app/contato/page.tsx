"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do email
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--casa-azul)] to-[var(--casa-laranja)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em <span className="text-[var(--casa-amarelo)]">contato</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Estamos prontos para ouvir você. Tire suas dúvidas, faça sugestões
            ou venha nos conhecer!
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de <span className="text-gradient">Contato</span>
              </h2>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--casa-laranja)] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Endereço
                        </h3>
                        <p className="text-gray-600">
                          Rua Padre Anchieta, 168
                          <br />
                          Centro - Niterói/RJ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--casa-azul)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Telefone
                        </h3>
                        <p className="text-gray-600">
                          (21) 99999-9999
                          <br />
                          WhatsApp disponível
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--casa-roxo)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          E-mail
                        </h3>
                        <p className="text-gray-600">
                          contato@casareviver.org
                          <br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--casa-amarelo)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Funcionamento
                        </h3>
                        <div className="text-gray-600">
                          <p>Segunda a Sexta: 8h às 17h</p>
                          <p>Sábado: 8h às 12h</p>
                          <p>Domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MessageCircle className="w-8 h-8 text-[var(--casa-laranja)] mr-3" />
                    Envie sua Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="nome"
                        className="text-sm font-medium text-gray-700"
                      >
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="assunto"
                        className="text-sm font-medium text-gray-700"
                      >
                        Assunto *
                      </Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        type="text"
                        required
                        value={formData.assunto}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Assunto da sua mensagem"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="mensagem"
                        className="text-sm font-medium text-gray-700"
                      >
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Escreva sua mensagem aqui..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--casa-laranja)] hover:bg-[var(--casa-laranja)]/90 text-white text-lg py-3"
                    >
                      Enviar Mensagem
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pontos de Coleta */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pontos de <span className="text-gradient">Coleta</span>
            </h2>
            <p className="text-xl text-gray-600">
              Locais onde você pode deixar suas doações de livros, roupas e
              alimentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[var(--casa-azul)] flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Icaraí
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium mb-2">
                  Rua Belisário Augusto, 91
                </p>
                <p className="text-gray-600">Aos cuidados de Lia Castanho</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>• Livros para biblioteca</p>
                  <p>• Roupas para Varal Solidário</p>
                  <p>• Alimentos para lanche das crianças</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[var(--casa-laranja)] flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Centro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium mb-2">
                  Rua Padre Anchieta, 168
                </p>
                <p className="text-gray-600">Casa Reviver - Sede</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p>• Livros para biblioteca</p>
                  <p>• Roupas para Varal Solidário</p>
                  <p>• Alimentos para lanche das crianças</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              <strong>Toda ajuda faz diferença.</strong> Obrigada por caminhar
              com a gente.
            </p>
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa <span className="text-gradient">Localização</span>
            </h2>
          </div>

          <MapPin className="w-16 h-16 text-[var(--casa-laranja)] mx-auto mb-4" />
          <p className="text-xl font-bold text-gray-700 text-center">
            Casa Reviver
          </p>
          <p className="text-gray-600 text-center py-4">
            Rua Padre Anchieta, 168 - Centro, Niterói
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.4430373415153!2d-43.119765!3d-22.8970242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983c332da8f2d%3A0xf9b688d1af0bee49!2sR.%20Padre%20Anchieta%2C%20168%20-%20S%C3%A3o%20Domingos%2C%20Niter%C3%B3i%20-%20RJ%2C%2024210-050!5e0!3m2!1spt-BR!2sbr!4v1754437959064!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
            className="w-full "
          ></iframe>
        </div>
      </section>
    </div>
  );
}
