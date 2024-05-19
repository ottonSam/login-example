# React + TypeScript + Vite + Vitest + Cypress

## Sobre

Esta aplicação React com TypeScript demonstra a criação de um fluxo de autenticação simples com duas telas: login e detalhes do usuário.

### Funcionalidades:

#### Tela de login

- Formulário com campos de email e senha.
- Validação de formulário utilizando a biblioteca Zod.
- Redirecionamento para a tela de detalhes após login bem-sucedido.

#### Tela de detalhes do usuário

- Card com informações do usuário logado (nome, email, foto de perfil).
- Acessível apenas após o login.
- Botão de logout.

### Tecnologias:

- React
- TypeScript
- Zod (validação de formulário)
- Vitest + testing library (testes de unidade)
- Cypress (testes end-to-end)

## Instalação e execução local

A instalação e execução do projeto exigem o Node.js e o NPM (Node Package Manager) previamente instalados em sua máquina. Caso não esteja instalado [Clique aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) e siga o tutorial de instalação.

#### Dentro do diretório raiz do projeto siga os seguintes passos:

1. Instale as dependências do projeto

```
npm install
```

2. Configure as variáveis de ambiente

#### Crie os seguintes arquivos no diretório raiz do projeto:

##### .env

```
VITE_API_BASE_URL=https://api.homologation.cliqdrive.com.br
```

##### cypress.env.json

```
{
  "EMAIL": "cliente@youdrive.com",
  "PASSWORD": "password"
}
```

3. Execute o projeto no ambiente de desenvolvimento

```
npm run dev
```

## Testes

O projeto possui dois tipos de testes que devem ser executados separadamente para garantir a qualidade e confiabilidade do código:

1. Testes de unidade: Verificam o funcionamento individual de componentes e módulos do código. Para executá-los, utilize o comando `npm run test`.
2. Testes end-to-end: Validam o fluxo completo da aplicação, desde a interface do usuário até a interação com o back-end. Para executá-los, utilize o comando `npm run end-to-end`.

## Deploy

Para visualizar um exemplo de aplicação de login em funcionamento acesse o seguinte link: `https://login-example-iota.vercel.app`.
