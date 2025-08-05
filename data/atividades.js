import { 
  BookOpen, 
  Heart, 
  Users, 
  Mic, 
  Shield, 
  Sparkles, 
  Gift, 
  Calendar 
} from "lucide-react";

const atividades = [
  // ... (seus projetos existentes que você já me enviou anteriormente)
  
  // Novas atividades a serem adicionadas
  {
    id: "caminhada-maio-laranja",
    nome: "Caminhada Maio Laranja",
    descricaoLonga: "Luta contra o abuso e exploração sexual de crianças e adolescentes. Uma mobilização que reúne toda a cidade em um movimento de conscientização e prevenção. A caminhada simboliza a união da comunidade em defesa dos direitos das crianças e adolescentes, com palestras, distribuição de materiais informativos e atividades educativas.",
    descricao: "Luta contra o abuso e exploração sexual de crianças e adolescentes. Uma mobilização que reúne toda a cidade.",
    imagem: "/atividades/Foto1.jpg",
    icon: Shield,
    cor: "casa-laranja",
    imagemCapa: "/atividades/Foto1.jpg",
    imagensGaleria: [
      "/atividades/caminhada-maio-laranja/Foto1.jpg",
      "/atividades/caminhada-maio-laranja/Foto2.jpg",
      "/atividades/caminhada-maio-laranja/Foto3.jpg",
    ],
    detalhes: {
      local: "Praça Central e ruas da comunidade",
      horario: "Manhã de sábado",
      publico: "Toda a comunidade",
    },
    periodo: "Maio - Anual",
    depoimentos: [
      {
        autor: "Professora Ana",
        texto: "A caminhada é fundamental para conscientizar a comunidade sobre a proteção de nossas crianças."
      }
    ]
  },
  {
    id: "colonia-ferias",
    nome: "Colônia de Férias",
    descricaoLonga: "Realizada duas vezes ao ano com atividades recreativas e educativas como teatro, oficinas criativas, dança, culinária infantil e passeios culturais. Um período de diversão e aprendizado durante as férias escolares, onde as crianças podem desenvolver novas habilidades e se divertir em um ambiente seguro e acolhedor.",
    descricao: "Realizada duas vezes ao ano com atividades como teatro, oficinas, dança, culinária e passeios culturais.",
    imagem: "/atividades/Foto2.jpg",
    icon: Sparkles,
    cor: "casa-azul",
    imagemCapa: "/atividades/Foto2.jpg",
    imagensGaleria: [
      "/atividades/colonia-ferias/Foto1.jpg",
      "/atividades/colonia-ferias/Foto2.jpg",
      "/atividades/colonia-ferias/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver e espaços culturais",
      horario: "Manhã e tarde durante a semana",
      publico: "Crianças de 6 a 12 anos",
    },
    periodo: "Verão e Inverno",
    depoimentos: [
      {
        autor: "Mãe de João",
        texto: "Minha filha adora a colônia de férias! Volta cheia de histórias e aprendizados."
      }
    ]
  },
  {
    id: "dia-das-criancas",
    nome: "Dia das Crianças",
    descricaoLonga: "A maior atividade anual, reunindo mais de 500 crianças para um dia mágico de diversão, brincadeiras, apresentações culturais, distribuição de brinquedos e lanches especiais. Um momento de celebração dos direitos das crianças e de proporcionar alegria e memórias inesquecíveis para aquelas que mais precisam.",
    descricao: "A maior atividade anual, reunindo mais de 500 crianças para um dia mágico de diversão e alegria.",
    imagem: "/atividades/Foto3.jpg",
    icon: Users,
    cor: "casa-amarelo",
    imagemCapa: "/atividades/Foto3.jpg",
    imagensGaleria: [
      "/atividades/dia-das-criancas/Foto1.jpg",
      "/atividades/dia-das-criancas/Foto2.jpg",
      "/atividades/dia-das-criancas/Foto3.jpg",
    ],
    detalhes: {
      local: "Espaços comunitários e sede da Casa Reviver",
      horario: "Manhã e tarde",
      publico: "Crianças da comunidade",
    },
    periodo: "Outubro - Anual",
    depoimentos: [
      {
        autor: "Voluntário Carlos",
        texto: "Ver o sorriso dessas crianças no seu dia é a maior recompensa!"
      }
    ]
  },
  {
    id: "natal",
    nome: "Festa de Natal",
    descricaoLonga: "Dedicada às crianças do socioeducativo com cartinhas para o Papai Noel, padrinhos que realizam sonhos e um dia repleto de carinho, brincadeiras e celebração. Além da distribuição de presentes, temos apresentações culturais, contação de histórias natalinas e uma ceia especial que fortalece os laços comunitários.",
    descricao: "Dedicada às crianças do socioeducativo com cartinhas, padrinhos e um dia repleto de carinho.",
    imagem: "/atividades/Foto4.jpg",
    icon: Calendar,
    cor: "casa-roxo",
    imagemCapa: "/atividades/Foto4.jpg",
    imagensGaleria: [
      "/atividades/natal/Foto1.jpg",
      "/atividades/natal/Foto2.jpg",
      "/atividades/natal/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver",
      horario: "Tarde de sábado",
      publico: "Crianças participantes dos projetos",
    },
    periodo: "Dezembro - Anual",
    depoimentos: [
      {
        autor: "Dona Maria",
        texto: "O Natal da Casa Reviver é a única celebração que meus netos têm. Deus abençoe esse trabalho!"
      }
    ]
  }
];

export default atividades;