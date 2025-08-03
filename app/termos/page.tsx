import { Shield, FileText, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Termos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--casa-azul)] to-[var(--casa-roxo)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Termos de <span className="text-[var(--casa-amarelo)]">Uso</span>
          </h1>
          <p className="text-xl">
            Condições de uso do site da Casa Reviver
          </p>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-azul)]">
                  <FileText className="w-6 h-6 mr-3" />
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Ao acessar e usar o site da Casa Reviver, você concorda em cumprir e ficar vinculado aos 
                  seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
                  não deve usar nosso site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-laranja)]">
                  <Users className="w-6 h-6 mr-3" />
                  2. Uso do Site
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Este site é destinado a fornecer informações sobre a Casa Reviver, seus projetos, 
                  atividades e formas de contribuição. Você pode:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Navegar e visualizar o conteúdo do site</li>
                  <li>Entrar em contato conosco através dos formulários disponíveis</li>
                  <li>Compartilhar informações sobre nossos projetos</li>
                  <li>Inscrever-se para voluntariado ou atividades</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-roxo)]">
                  <Shield className="w-6 h-6 mr-3" />
                  3. Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logos, vídeos e design, 
                  é propriedade da Casa Reviver e está protegido por leis de direitos autorais. 
                  É permitido:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Visualizar e imprimir páginas para uso pessoal e não comercial</li>
                  <li>Compartilhar links para nossas páginas</li>
                  <li>Citar nosso conteúdo com devida atribuição</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-amarelo)]">
                  <AlertCircle className="w-6 h-6 mr-3 text-gray-900" />
                  4. Responsabilidades do Usuário
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Ao usar nosso site, você se compromete a:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Fornecer informações verdadeiras e precisas em formulários</li>
                  <li>Não usar o site para atividades ilegais ou prejudiciais</li>
                  <li>Respeitar os direitos de outros usuários</li>
                  <li>Não tentar acessar áreas restritas do site</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-azul)]">
                  <FileText className="w-6 h-6 mr-3" />
                  5. Doações e Voluntariado
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  As doações feitas através deste site são voluntárias e destinam-se exclusivamente 
                  aos projetos e atividades da Casa Reviver. O voluntariado está sujeito a:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Disponibilidade de vagas nos projetos</li>
                  <li>Processo de seleção e orientação</li>
                  <li>Cumprimento de normas de segurança e conduta</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-laranja)]">
                  <Shield className="w-6 h-6 mr-3" />
                  6. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  A Casa Reviver não se responsabiliza por:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Interrupções no funcionamento do site</li>
                  <li>Perda de dados ou informações</li>
                  <li>Danos indiretos decorrentes do uso do site</li>
                  <li>Conteúdo de sites externos linkados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-roxo)]">
                  <Users className="w-6 h-6 mr-3" />
                  7. Alterações nos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  A Casa Reviver reserva-se o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após sua publicação no site. 
                  O uso continuado do site após as modificações constitui aceitação dos novos termos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-amarelo)]">
                  <FileText className="w-6 h-6 mr-3 text-gray-900" />
                  8. Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Para questões relacionadas a estes termos de uso, entre em contato conosco:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>E-mail:</strong> contato@casareviver.org</p>
                  <p><strong>Telefone:</strong> (21) 99999-9999</p>
                  <p><strong>Endereço:</strong> Rua Padre Anchieta, 168 - Centro, Niterói/RJ</p>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2024
            </p>
            <p className="text-sm text-gray-500 mt-2">
              CNPJ: 02.392.823/0001-35
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}