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

const projetos = [
  {
    id: "ler-o-mundo",
    nome: "Projeto Ler o Mundo",
    descricaoLonga:
      "Na Casa Reviver, acreditamos que nunca é tarde para aprender. O Projeto Ler o Mundo nasce do desejo profundo de abrir janelas para além da realidade, oferecendo aos jovens e adultos a chance de enxergar a vida com novos olhos, por meio da leitura, da escuta e da descoberta.\n\n Aqui, cada palavra lida é uma porta que se abre. A cada encontro, cultivamos a magia das histórias, desenvolvendo habilidades de leitura, escrita e interpretação em momentos leves, lúdicos e cheios de significado. Ler o mundo é mais do que juntar letras. É descobrir um novo universo, é viajar sem sair do lugar. É reconstruir caminhos com coragem, imaginação e esperança.",
    descricao: "Oferecendo aos jovens e adultos a chance de enxergar a vida com novos olhos, por meio da leitura, escuta e descoberta.",
    imagem: "/projetos/Foto1.jpg",
    icon: BookOpen,
    cor: "casa-azul",
    imagemCapa: "/projetos/Foto1.jpg",
    imagensGaleria: [
      "/projetos/ler-o-mundo/Foto1.jpg",
      "/projetos/ler-o-mundo/Foto2.jpg",
      "/projetos/ler-o-mundo/Foto3.jpg",
      "/projetos/ler-o-mundo/Foto4.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver",
      horario: "Terças e Quintas, 14h às 17h",
      publico: "Jovens e adultos que desejam aprender e se desenvolver através da leitura",
    },
    depoimentos: [
      {
        autor: "Maria Silva",
        texto: "Graças ao Ler o Mundo, minha filha descobriu o amor pelos livros e melhorou suas notas na escola!",
      },
      {
        autor: "João Santos",
        texto: "Nunca imaginei que aos 60 anos aprenderia a ler com tanta facilidade. O projeto mudou minha vida!",
      },
    ],
  },
  {
    id: "roda-gestante",
    nome: "Roda de Gestante",
    descricaoLonga:
      "O cuidado com o desenvolvimento das nossas crianças começa antes mesmo do primeiro choro, ainda dentro da barriga. A Roda de Gestante é um espaço de acolhimento, escuta e proteção, onde cada mãe é amparada com carinho e orientação durante um dos momentos mais intensos e transformadores da vida.\n\nPor meio de encontros afetivos com profissionais de diferentes áreas, promovemos saúde, bem-estar e informação, ajudando as futuras mamães a atravessarem essa fase com mais segurança, consciência e amor. Junto com a rede de saúde e outros projetos parceiros, falamos sobre a importância do pré-natal, os direitos da mulher no parto, a nutrição no primeiro ano do bebê e também sobre o fortalecimento da autoestima, tão essencial nesse período.\n\nA Roda é feita de momentos que tocam e fortalecem: o chá de bebê coletivo com a entrega do enxoval completo, o ensaio fotográfico para eternizar essa fase tão especial, as pinturas corporais que celebram mãe e bebê e, principalmente, a escuta que reconhece, valoriza e respeita a vivência única de cada gestante.\n\nAqui, acreditamos que cuidar de uma mãe é também cuidar do mundo que está para nascer.",
    descricao: "Espaço de acolhimento, escuta e proteção para futuras mamães durante a gestação.",
    imagem: "/projetos/Foto2.jpg",
    icon: Heart,
    cor: "casa-laranja",
    imagemCapa: "/projetos/Foto2.jpg",
    imagensGaleria: [
      "/projetos/roda-gestante/Foto1.jpg",
      "/projetos/roda-gestante/Foto2.jpg",
      "/projetos/roda-gestante/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver",
      horario: "Quartas-feiras, 10h às 12h",
      publico: "Gestantes da comunidade",
    },
    depoimentos: [
      {
        autor: "Ana Claudia",
        texto: "A Roda de Gestante me deu força e conhecimento para ter o parto humanizado que eu sonhava!",
      },
      {
        autor: "Patrícia Mendes",
        texto: "Encontrei na Roda um apoio emocional que não tinha em casa. Hoje me sinto muito mais preparada para a maternidade.",
      },
    ],
  },
  {
    id: "atividades-socioeducativas",
    nome: "Atividades Socioeducativas",
    descricaoLonga:
      "Nossas atividades socioeducativas são criadas com carinho para o contraturno escolar das crianças da comunidade. Mais do que ocupar o tempo, esses encontros acolhem, despertam e fortalecem. Em cada brincadeira, um aprendizado. Em cada roda, uma troca. Em cada gesto, uma descoberta.\n\nPor meio de experiências lúdicas, estimulamos a criatividade, o corpo em movimento, as emoções, a leitura e a escrita. Criamos um espaço seguro onde a criança pode se expressar livremente, se reconhecer, imaginar outros mundos e viver o presente com encantamento.\n\nÉ brincando que aprendemos sobre identidade, direitos, natureza, convivência e o poder de transformar realidades. Ocupamos com afeto os espaços da cidade, exploramos o território e sonhamos juntos com o futuro que queremos construir.\n\nAqui, o saber floresce no acolhimento, no despertar da curiosidade e no cuidado que dedicamos a cada passo do caminho. Aprender é, para nós, construir sonhos, fortalecer raízes e abrir portas para um futuro cheio de esperança.",
    descricao: "Criadas para o contraturno escolar das crianças, acolhendo, despertando e fortalecendo.",
    imagem: "/projetos/Foto3.jpg",
    icon: Users,
    cor: "casa-roxo",
    imagemCapa: "/projetos/Foto3.jpg",
    imagensGaleria: [
      "/projetos/atividades-socioeducativas/Foto1.jpg",
      "/projetos/atividades-socioeducativas/Foto2.jpg",
      "/projetos/atividades-socioeducativas/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver e espaços comunitários",
      horario: "Segunda a sexta, 8h às 11h e 14h às 17h",
      publico: "Crianças de 6 a 12 anos",
    },
    depoimentos: [
      {
        autor: "Mãe de Lucas",
        texto: "Meu filho mudou completamente depois que começou nas atividades. Está mais comunicativo e feliz!",
      },
      {
        autor: "Professora Carla",
        texto: "As crianças que participam do projeto mostram um desenvolvimento notável na escola.",
      },
    ],
  },
  {
    id: "os-crias",
    nome: "Os Crias",
    descricaoLonga:
      "Projeto que, a cada ano, se reinventa no nosso cotidiano. Os Crias nasceram com o propósito de orientar e preparar os jovens para a vida adulta, para o mercado de trabalho e, principalmente, para refletir sobre como podemos construir diariamente o mundo que desejamos viver.\n\nHoje, em parceria com a Fiocruz, Os Crias têm como principal objetivo mapear dados e identificar as principais demandas e necessidades do nosso território. Tudo isso para, junto aos órgãos públicos e ocupando espaços de decisão, lutar por mudanças e pelo acesso a direitos historicamente negados à nossa comunidade.\n\nA formação dos Crias é contínua. Acontece em encontros formativos que abordam temas como direitos, construção de pautas coletivas, história e identidade do território, sempre com foco no desenvolvimento do pensamento crítico e do compromisso social.\n\nMas Os Crias não ficam apenas na sala de aula. Eles percorrem becos e vielas para escutar os moradores, compreender os diferentes perfis que formam a nossa comunidade e pensar, junto com ela, em caminhos possíveis de transformação.",
    descricao: "Projeto que orienta jovens para a vida adulta e mapeia demandas do território.",
    imagem: "/projetos/os-crias/Foto3.jpg",
    icon: Mic,
    cor: "casa-amarelo",
    imagemCapa: "/projetos/os-crias/Foto3.jpg",
    imagensGaleria: [
      "/projetos/os-crias/Foto1.jpg",
      "/projetos/os-crias/Foto2.jpg",
      "/projetos/os-crias/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver e território da comunidade",
      horario: "Sextas-feiras, 16h às 19h",
      publico: "Jovens de 15 a 24 anos",
    },
    depoimentos: [
      {
        autor: "Ricardo, 18 anos",
        texto: "Os Crias me mostraram que eu posso ser agente de mudança na minha comunidade!",
      },
      {
        autor: "Técnica da Fiocruz",
        texto: "O trabalho dos Crias é um exemplo de como a juventude pode produzir dados relevantes para políticas públicas.",
      },
    ],
  },
  {
    id: "roda-guerreiras",
    nome: "Roda de Conversa Guerreiras",
    descricaoLonga:
      "A Roda de Conversa Guerreiras é um espaço de escuta, acolhimento e fortalecimento entre as mulheres da nossa comunidade. Um encontro entre gerações, onde histórias se cruzam, saberes se compartilham e novas possibilidades são construídas.\n\nPor meio da presença de convidadas e convidados especiais, promovemos reflexões importantes sobre os desafios enfrentados pelas mulheres na sociedade e também trocas que inspiram e fortalecem.\n\nÉ nesse espaço coletivo que construímos uma rede de apoio, reafirmamos nossos direitos e caminhamos juntas na construção de um mundo mais justo e igualitário.",
    descricao: "Espaço de escuta, acolhimento e fortalecimento entre as mulheres da comunidade.",
    imagem: "/projetos/Foto5.jpg",
    icon: Shield,
    cor: "casa-laranja",
    imagemCapa: "/projetos/Foto5.jpg",
    imagensGaleria: [
      "/projetos/roda-guerreiras/Foto1.jpg",
      "/projetos/roda-guerreiras/Foto2.jpg",
      "/projetos/roda-guerreiras/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver",
      horario: "Primeira terça-feira do mês, 15h às 17h",
      publico: "Mulheres da comunidade",
    },
    depoimentos: [
      {
        autor: "Dona Maria, 65 anos",
        texto: "Na Roda das Guerreiras eu me sinto ouvida e acolhida. Aprendo com as mais jovens e ensino o que vivi.",
      },
      {
        autor: "Jéssica, 28 anos",
        texto: "Descobri que não estou sozinha nos meus desafios. A Roda me deu forças para seguir em frente!",
      },
    ],
  },
  {
    id: "maes-atipicas",
    nome: "Roda de Conversa Mães Atípicas",
    descricaoLonga:
      "Cuidar de quem cuida. Esse é o propósito da Roda de Mães Atípicas, um espaço de escuta acolhedora, com orientação psicológica, pensado especialmente para mães que vivenciam, diariamente, a sobrecarga da luta pela inclusão.\n\nMais do que um encontro, é um momento de autocuidado, apoio e afeto. Um lugar onde cada mãe pode compartilhar, respirar e se fortalecer junto a outras mulheres que trilham caminhos semelhantes.\n\nPorque nenhuma mãe deveria caminhar sozinha.",
    descricao: "Cuidar de quem cuida. Espaço de escuta acolhedora para mães que vivenciam sobrecarga.",
    imagem: "/projetos/Foto6.jpg",
    icon: Sparkles,
    cor: "casa-azul",
    imagemCapa: "/projetos/Foto6.jpg",
    imagensGaleria: [
      "/projetos/maes-atipicas/Foto1.jpg",
      "/projetos/maes-atipicas/Foto2.jpg",
      "/projetos/maes-atipicas/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver",
      horario: "Quinzenalmente, sextas-feiras, 9h às 11h",
      publico: "Mães de crianças com deficiência ou necessidades especiais",
    },
    depoimentos: [
      {
        autor: "Sandra, mãe do Pedro",
        texto: "Finalmente encontrei um lugar onde me entendem e não me julgam. A Roda é meu porto seguro!",
      },
      {
        autor: "Psicóloga do projeto",
        texto: "O cuidado coletivo entre essas mães fortalece cada uma de maneira individual. É lindo ver a rede se formando.",
      },
    ],
  },
  {
    id: "varal-solidario",
    nome: "Varal Solidário",
    descricaoLonga:
      "Impulsionado pelos princípios da economia circular e da sustentabilidade, o nosso Varal Solidário acontece todas as terças-feiras na Casa Reviver, no período da tarde. As peças disponíveis são doações de parceiros, voluntários e também de moradores da própria comunidade.\n\nA proposta é simples e poderosa: pegar o que precisa e deixar o que não usa mais, promovendo um consumo consciente e contribuindo para a redução de resíduos no planeta.\n\nA atividade é aberta a toda a comunidade e é mais uma forma de fortalecer vínculos, cuidar do meio ambiente e praticar a solidariedade no dia a dia.",
    descricao: "Economia circular e sustentabilidade: pegar o que precisa e deixar o que não usa mais.",
    imagem: "/projetos/Foto7.jpg",
    icon: Gift,
    cor: "casa-roxo",
    imagemCapa: "/projetos/Foto7.jpg",
    imagensGaleria: [
      "/projetos/varal-solidario/Foto1.jpg",
      "/projetos/varal-solidario/Foto2.jpg",
      "/projetos/varal-solidario/Foto3.jpg",
    ],
    detalhes: {
      local: "Pátio da Casa Reviver",
      horario: "Terças-feiras, 14h às 17h",
      publico: "Toda a comunidade",
    },
    depoimentos: [
      {
        autor: "Dona Marta",
        texto: "Graças ao Varal consegui roupas para meus netos e ainda pude doar o que não usávamos mais.",
      },
      {
        autor: "Voluntário João",
        texto: "O Varal é uma demonstração prática de como podemos viver em comunidade de forma mais sustentável.",
      },
    ],
  },
  {
    id: "as-marias",
    nome: "As Marias",
    descricaoLonga:
      "As Marias nasceram da Roda de Conversa Guerreiras. É o nosso grupo de teatro, formado por mulheres da comunidade, dedicado a contar histórias de vida que se entrelaçam com a formação do nosso território.\n\nCom o espetáculo que leva o mesmo nome do grupo, As Marias sobem ao palco para compartilhar, com coragem e sensibilidade, os desafios e as superações que marcaram suas trajetórias.\n\nElas já se apresentaram em espaços importantes, como o SESC Niterói e o SESC Nova Iguaçu, e seguem produzindo novas peças para celebrar suas vivências e também potências dentro da nossa comunidade.",
    descricao: "Grupo de teatro formado por mulheres da comunidade que conta histórias de vida e território.",
    imagem: "/projetos/Foto8.jpg",
    icon: Calendar,
    cor: "casa-amarelo",
    imagemCapa: "/projetos/Foto8.jpg",
    imagensGaleria: [
      "/projetos/as-marias/Foto1.jpg",
      "/projetos/as-marias/Foto2.jpg",
      "/projetos/as-marias/Foto3.jpg",
    ],
    detalhes: {
      local: "Sede da Casa Reviver e espaços culturais",
      horario: "Ensaio: Quintas-feiras, 18h às 21h",
      publico: "Mulheres da comunidade interessadas em teatro",
    },
    depoimentos: [
      {
        autor: "Maria José, integrante",
        texto: "Através do teatro, consegui contar minha história e me libertar de muitos pesos. As Marias são minha família!",
      },
      {
        autor: "Público do SESC",
        texto: "Fiquei emocionado com a força e a verdade que essas mulheres transmitem no palco. Teatro que transforma!",
      },
    ],
  },
];

export default projetos;