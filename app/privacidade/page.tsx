import { Shield, Eye, Lock, FileText, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--casa-laranja)] to-[var(--casa-amarelo)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Política de <span className="text-white">Privacidade</span>
          </h1>
          <p className="text-xl text-gray-800">
            Como protegemos e utilizamos suas informações pessoais
          </p>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-azul)]">
                  <Eye className="w-6 h-6 mr-3" />
                  1. Informações que Coletamos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  A Casa Reviver coleta informações quando você interage com nosso site, incluindo:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Informações de contato:</strong> nome, e-mail, telefone quando fornecidos em formulários</li>
                  <li><strong>Informações de voluntariado:</strong> dados fornecidos em inscrições para atividades</li>
                  <li><strong>Informações técnicas:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
                  <li><strong>Cookies:</strong> pequenos arquivos para melhorar sua experiência no site</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-laranja)]">
                  <Users className="w-6 h-6 mr-3" />
                  2. Como Usamos suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Responder às suas mensagens e solicitações</li>
                  <li>Processar inscrições para voluntariado e atividades</li>
                  <li>Enviar informações sobre projetos e eventos (com seu consentimento)</li>
                  <li>Melhorar nosso site e serviços</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-roxo)]">
                  <Lock className="w-6 h-6 mr-3" />
                  3. Proteção das Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Implementamos medidas de segurança para proteger suas informações pessoais:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Criptografia SSL para transmissão de dados sensíveis</li>
                  <li>Acesso restrito às informações pessoais</li>
                  <li>Armazenamento seguro de dados</li>
                  <li>Treinamento da equipe sobre proteção de dados</li>
                  <li>Revisões regulares de segurança</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-amarelo)]">
                  <Shield className="w-6 h-6 mr-3 text-gray-900" />
                  4. Compartilhamento de Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  A Casa Reviver NÃO vende, aluga ou compartilha suas informações pessoais com terceiros, 
                  exceto nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e segurança</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob rigorosos termos de confidencialidade)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-azul)]">
                  <FileText className="w-6 h-6 mr-3" />
                  5. Cookies e Tecnologias Similares
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Nosso site utiliza cookies para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Melhorar sua experiência de navegação</li>
                  <li>Lembrar suas preferências</li>
                  <li>Analisar o tráfego do site</li>
                  <li>Personalizar conteúdo</li>
                </ul>
                <p className="mt-4">
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
                  a funcionalidade do site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-laranja)]">
                  <Users className="w-6 h-6 mr-3" />
                  6. Seus Direitos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Você tem o direito de:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Acesso:</strong> solicitar cópia das informações que temos sobre você</li>
                  <li><strong>Retificação:</strong> corrigir informações incorretas ou incompletas</li>
                  <li><strong>Exclusão:</strong> solicitar a remoção de suas informações pessoais</li>
                  <li><strong>Portabilidade:</strong> receber suas informações em formato estruturado</li>
                  <li><strong>Oposição:</strong> opor-se ao processamento de suas informações</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-roxo)]">
                  <AlertCircle className="w-6 h-6 mr-3" />
                  7. Retenção de Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Cumprir os propósitos para os quais foram coletadas</li>
                  <li>Atender às suas solicitações</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Resolver disputas</li>
                </ul>
                <p className="mt-4">
                  Quando não precisarmos mais de suas informações, elas serão excluídas de forma segura.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-amarelo)]">
                  <FileText className="w-6 h-6 mr-3 text-gray-900" />
                  8. Alterações nesta Política
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Podemos atualizar esta política de privacidade periodicamente. Quando isso acontecer:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Publicaremos a versão atualizada neste site</li>
                  <li>Atualizaremos a data da "última revisão"</li>
                  <li>Para mudanças significativas, notificaremos você por e-mail (se aplicável)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[var(--casa-azul)]">
                  <Shield className="w-6 h-6 mr-3" />
                  9. Contato sobre Privacidade
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Para questões sobre esta política de privacidade ou sobre como tratamos seus dados, 
                  entre em contato conosco:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>E-mail:</strong> privacidade@casareviver.org</p>
                  <p><strong>Telefone:</strong> (21) 99999-9999</p>
                  <p><strong>Endereço:</strong> Rua Padre Anchieta, 168 - Centro, Niterói/RJ</p>
                </div>
                <p className="mt-4">
                  Responderemos às suas solicitações no prazo máximo de 15 dias úteis.
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <strong>Última atualização:</strong> Janeiro de 2024
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}