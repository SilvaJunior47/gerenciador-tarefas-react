# 🚀 Gerenciador de Tarefas - Aplicação Full-Stack com React e Firebase

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB )
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black )
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white )
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white )
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white )

Projeto desenvolvido como parte da avaliação do curso de [Nome do Curso/Disciplina], com o objetivo de criar uma aplicação completa de gerenciamento de tarefas (CRUD), incluindo um sistema de autenticação de usuários, utilizando React para o front-end e Firebase para o backend de autenticação.

---

## 🔗 Links Importantes

*   **Acesse a Aplicação Online (Vercel):** **[https://gerenciador-tarefas-react-eta.vercel.app/](https://gerenciador-tarefas-react-eta.vercel.app/ )**
*   **Explore o Código (GitHub):** **[https://github.com/SilvaJunior47/gerenciador-tarefas-react/](https://github.com/SilvaJunior47/gerenciador-tarefas-react/ )**

*(Nota: A persistência de dados das tarefas (adição/exclusão) na versão online é simulada e não é permanente, pois utiliza uma API mock read-only. A persistência de usuários, no entanto, é real e gerenciada pelo Firebase.)*

---

## ✨ Funcionalidades Implementadas

### Requisitos Essenciais

-   **CRUD Completo de Tarefas:** Crie, leia, atualize (status) e delete tarefas.
-   **Roteamento Dinâmico:** Navegação entre a página principal e a página de detalhes de cada tarefa (`/tarefa/:id`) usando `react-router-dom`.
-   **Busca e Filtro em Tempo Real:** Filtre tarefas por texto ou por status (Pendentes/Concluídas).
-   **Paginação no Front-End:** A lista de tarefas é paginada para uma interface mais limpa e performática.
-   **Feedback Visual ao Usuário:** Indicadores de carregamento (`loading`) durante requisições e exibição de mensagens de erro amigáveis.
-   **Design Moderno e Responsivo:** Interface construída com a biblioteca de componentes **Material-UI (MUI)**, garantindo uma experiência de usuário coesa e adaptável.

### 🏆 Desafio Extra

-   **Sistema de Autenticação Completo:**
    -   **Registro e Login de Usuários:** Utilização do **Firebase Authentication** para um sistema seguro de criação de contas e login com e-mail e senha.
    -   **Rotas Protegidas:** As páginas de tarefas só podem ser acessadas por usuários autenticados. Tentativas de acesso são redirecionadas para a página de login.
    -   **Rotas Públicas:** As páginas de login e registro só são acessíveis para usuários deslogados.
    -   **Gerenciamento de Sessão:** O estado de login do usuário persiste entre as sessões (ao recarregar a página).
    -   **Logout Funcional:** O usuário pode encerrar sua sessão de forma segura.

---

## 🛠️ Arquitetura e Tecnologias

-   **Front-End:**
    -   **React:** Biblioteca principal para a construção da interface.
    -   **Vite:** Ferramenta de build e servidor de desenvolvimento ultrarrápido.
    -   **React Router DOM:** Para gerenciamento de rotas no lado do cliente (SPA).
    -   **Material-UI (MUI):** Biblioteca de componentes para estilização e design.
    -   **Axios:** Cliente HTTP para consumir a API de tarefas.
    -   **React Context API:** Para gerenciamento de estado global, especialmente no `AuthContext`.

-   **Backend & Infraestrutura:**
    -   **Firebase Authentication:** Backend-as-a-Service (BaaS) para autenticação de usuários.
    -   **My-JSON-Server:** Para servir uma API RESTful mock a partir de um arquivo `db.json` no GitHub (usado na versão de produção).
    -   **JSON Server:** Para simular a API em ambiente de desenvolvimento local com persistência de dados.
    -   **Vercel:** Plataforma de deploy para publicação e hospedagem contínua do front-end.

---

## 👨‍💻 Equipe de Desenvolvimento

-   Antônio José Azevedo Bittencourt
-   Gabriel Barros Ferreira
-   José Luis da Silva Júnior
-   Nickolas Campos Duarte Oliveira

---

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

### Pré-requisitos

-   [Node.js](https://nodejs.org/ ) (versão 16 ou superior)
-   Um projeto Firebase configurado com autenticação por E-mail/Senha ativada.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SilvaJunior47/gerenciador-tarefas-react.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd gerenciador-tarefas-react
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    *   Crie um arquivo chamado `.env.local` na raiz do projeto.
    *   Preencha-o com as suas chaves do Firebase, seguindo o modelo do arquivo `.env.example` (se houver ) ou o formato abaixo.
    ```
    VITE_API_KEY="SUA_CHAVE_AQUI"
    VITE_AUTH_DOMAIN="SEU_DOMINIO_AQUI"
    VITE_PROJECT_ID="..."
    VITE_STORAGE_BUCKET="..."
    VITE_MESSAGING_SENDER_ID="..."
    VITE_APP_ID="..."
    ```

5.  **Inicie a API local (para persistência de dados):**
    *Em um terminal separado:*
    ```bash
    npx json-server --watch db.json --port 3001
    ```

6.  **Inicie a aplicação React:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.
