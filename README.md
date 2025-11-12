# 🏡 Casa Reviver – Site Oficial

Projeto desenvolvido como parte de atividade extensionista do meu curso superior em Sistemas de informação e como forma de ajudar a comunidade ❤️

Realizei esse projeto pensando em performance, entrega, responsividade e baixo custo, por se tratar de uma ONG ainda pequena.

Após converse e análise de requisitos para construção do site foi desenvolvido o Website institucional a **Casa Reviver**, uma ONG localizada em Niterói/RJ, dedicada ao desenvolvimento social, cultural e educacional de crianças, jovens e famílias da comunidade do Morro do Estado.

---

## 📸 Demonstração

### Página inicial
<img width="1630" height="853" alt="image" src="https://github.com/user-attachments/assets/3acde7fe-0d0f-4408-aaff-c659c183fc84" />

Responsividade 
<img width="1461" height="608" alt="image" src="https://github.com/user-attachments/assets/d7b3ed62-d62c-401a-b7fc-329482816126" />
---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com foco em **performance, organização e responsividade**, utilizando o ecossistema moderno do React e Next.js.

| Tecnologia | Descrição |
|-------------|------------|
| [**Next.js**](https://nextjs.org/) | Framework React com suporte a SSR, SSG e rotas dinâmicas. |
| [**TypeScript**](https://www.typescriptlang.org/) | Superset do JavaScript que adiciona tipagem estática. |
| [**Tailwind CSS**](https://tailwindcss.com/) | Framework utilitário de CSS para estilização rápida e responsiva. |
| [**shadcn/ui**](https://ui.shadcn.com/) | Biblioteca de componentes acessíveis e customizáveis construída sobre o Tailwind. |
| [**React**](https://reactjs.org/) | Biblioteca para construção de interfaces baseadas em componentes. |
| [**Vite**](https://vitejs.dev/) | Ferramenta de build e desenvolvimento extremamente rápida. |
| [**Vercel**](https://vercel.com/) | Plataforma de hospedagem otimizada para Next.js. |

---

## 🧱 Estrutura de Pastas

```bash
src/
├── app/                     # Estrutura de rotas (Next.js App Router)
│   ├── page.tsx             # Página inicial
│   ├── sobre/               # Página "Sobre Nós"
│   ├── atividades/          # Página de atividades
│   ├── seja-voluntario/     # Página "Seja Voluntário"
│   ├── doacoes/             # Página de doações
│   ├── politica-de-privacidade/
│   └── layout.tsx           # Layout padrão do site
│
├── components/              # Componentes reutilizáveis (Header, Footer, etc.)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CarrosselFotos.tsx
│   ├── CarrosselDepoimentos.tsx
│   ├── Impacto.tsx
│   └── ...
│
├── data/                    # Arquivos JSON e dados estáticos
│   ├── atividades.json
│   └── depoimentos.json
│
├── styles/                  # Estilos globais e CSS Modules
│   ├── globals.css
│   ├── variables.css
│   └── ...
│
└── public/                  # Imagens, ícones e arquivos estáticos
    ├── logo/
    ├── banner-historia/
    └── favicon.ico
```

---

## ⚙️ Instalação e Execução Local

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/ThiagoSilsa/casa-reviver.git
```

### 2️⃣ Entrar na pasta do projeto
```bash
cd casa-reviver
```

### 3️⃣ Instalar as dependências
```bash
npm install
```

### 4️⃣ Executar o servidor de desenvolvimento
```bash
npm run dev
```

O projeto estará disponível em:  
👉 **http://localhost:3000**

---

## 🧩 Scripts Principais

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Inicia o servidor local |
| `npm run build` | Gera o build de produção |
| `npm start` | Executa o build |
| `npm run lint` | Analisa o código com ESLint |

---

## 🌐 Deploy

O site está hospedado na **[Vercel](https://vercel.com/)**.  
O processo de deploy é contínuo — sempre que o código é atualizado na branch principal, o Vercel realiza automaticamente o **build e a publicação** da nova versão.

---

## 📄 Licença

Este projeto é de uso institucional da **Casa Reviver**.  
Reprodução total ou parcial do código é restrita, salvo autorização dos mantenedores do projeto.

---

## ✨ Créditos

Desenvolvido por **Thiago (https://github.com/ThiagoSilsa)** com ❤️  
Tecnologias modernas, código limpo e foco em acessibilidade e impacto social.

---

