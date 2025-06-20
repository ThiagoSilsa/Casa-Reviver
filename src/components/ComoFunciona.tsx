import { Handshake, CalendarCheck, Users, Heart } from "lucide-react";

const passos = [
  { icone: Handshake, titulo: "Inscreva-se", descricao: "Preencha o formulário e aguarde o contato." },
  { icone: CalendarCheck, titulo: "Participe", descricao: "Escolha datas e áreas onde pode ajudar." },
  { icone: Users, titulo: "Capacitação", descricao: "Receba orientações para atuar com segurança." },
  { icone: Heart, titulo: "Faça a Diferença", descricao: "Ajude a transformar vidas com sua dedicação." }
];

export function ComoFunciona() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 bg-blue-50 text-center">
      {passos.map(({ icone: Icone, titulo, descricao }, idx) => (
        <div key={idx} className="p-4 rounded-lg bg-white shadow">
          <Icone className="mx-auto mb-2 w-8 h-8 text-blue-600" />
          <h4 className="font-bold text-blue-700">{titulo}</h4>
          <p className="text-sm text-gray-600">{descricao}</p>
        </div>
      ))}
    </section>
  );
}
