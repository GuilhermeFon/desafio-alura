## Demo

Acesse o projeto em produção: [https://desafio-alura-jet.vercel.app/](https://desafio-alura-jet.vercel.app/)

## Como rodar o projeto local

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn, pnpm ou bun

### Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/GuilhermeFon/desafio-alura.git
cd desafio-alura
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://nextjs-alura-teste.vercel.app
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra http://localhost:3000 no seu navegador.

## Tecnologias utilizadas

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS 4**
- **API**: https://nextjs-alura-teste.vercel.app/

## Funcionalidades

- Listagem de postagens do blog
- Página de detalhes da postagem
- Sistema de busca e filtros
- Paginação (6 posts por página)
- Postagens relacionadas
- Layout responsivo
- SEO otimizado
- Acessibilidade
- Dark mode
