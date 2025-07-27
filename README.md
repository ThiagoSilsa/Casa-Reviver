# Casa Reviver - Site Institucional (Em andamento)

Este é o site institucional da **ONG Casa Reviver**, uma organização sem fins lucrativos localizada em Niterói (RJ), que atua no acolhimento e transformação social de crianças, adolescentes e famílias em situação de vulnerabilidade.

O projeto está sendo desenvolvido como uma extensão universitária, com foco em ampliar o impacto social da ONG, além de oferecer uma experiência otimizada em termos de **acessibilidade, performance e gerenciamento de conteúdo**.

---

## 🚀 Tecnologias Utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-264de4?style=for-the-badge&logo=css3&logoColor=white)
![Contentful](https://img.shields.io/badge/Contentful-2478CC?style=for-the-badge&logo=contentful&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Páginas

- `/` – Página inicial com informações institucionais
- `/sobre` – História e missão da Casa Reviver
- `/eventos` – Lista de eventos realizados e futuros
- `/fotos` – Galeria de imagens
- `/doacoes` – Informações sobre formas de doação
- `/seja-voluntario` – Formulário via Google Forms para se voluntariar
- `/politica-de-privacidade` – Informações legais e LGPD
- `/contato` – Contato e redes sociais

---

## Estrutura do Projeto

```bash
casa-reviver/
├── public/                # Imagens públicas
├── src/
│   ├── app/               # Rotas, CSS Global, Layouts, etc
│   ├── components/        # Componentes reutilizáveis
│   ├── data/              # Arquivos Json para armazenamento
│   ├── styles/            # Estilização com CSS Modules
│   └── lib/               # 
├── next.config.js         # Configuração do Next.js
└── package.json


```
---

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/ThiagoSilsa/Casa-Reviver.git
cd casa-reviver

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
cp .env.example .env.local

# Insira suas credenciais do Contentful no .env.local

# Rode o projeto em modo desenvolvimento
npm run dev
```
Acesse em: http://localhost:3000

👨‍💻 Autor
Feito com 💙 por Thiago
LinkedIn | GitHub
