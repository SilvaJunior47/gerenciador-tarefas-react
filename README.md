#  Gerenciador de Tarefas - Projeto React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB )
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white )
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white )
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white )

Projeto desenvolvido como parte da avaliação do curso de [Nome do Curso/Disciplina], com o objetivo de criar uma aplicação completa de gerenciamento de tarefas (CRUD) utilizando React e consumindo uma API RESTful.

---

## 🚀 Link da Aplicação

**Acesse a aplicação em funcionamento:** **[https://gerenciador-tarefas-react-eta.vercel.app/](https://gerenciador-tarefas-react-eta.vercel.app/ )**

*(Substitua pelo seu link final da Vercel se for diferente)*

---

## 📋 Funcionalidades Implementadas

-   **CRUD Completo:** Crie, leia, atualize (status) e delete tarefas.
-   **Roteamento Dinâmico:** Navegação entre a página principal e a página de detalhes de cada tarefa (`/tarefa/:id`).
-   **Busca em Tempo Real:** Filtre tarefas digitando no campo de busca.
-   **Filtro por Status:** Visualize todas as tarefas, apenas as pendentes ou apenas as concluídas.
-   **Paginação no Front-End:** A lista de tarefas é paginada para melhor visualização.
-   **Feedback ao Usuário:** Indicadores de carregamento (`loading`) durante requisições e mensagens de erro amigáveis.
-   **Design Responsivo:** Interface construída com Material-UI, adaptável a diferentes tamanhos de tela.
-   **Persistência de Dados:** As tarefas são consumidas de uma API mock online via `my-json-server`.

---

## 🛠️ Tecnologias Utilizadas

-   **Front-End:**
    -   [React](https://reactjs.org/ )
    -   [Vite](https://vitejs.dev/ )
    -   [React Router DOM](https://reactrouter.com/ )
    -   [Material-UI (MUI)](https://mui.com/ )
    -   [Axios](https://axios-http.com/ )
-   **API Mock:**
    -   [JSON Server](https://github.com/typicode/json-server ) (para desenvolvimento local)
    -   [My-JSON-Server](https://my-json-server.typicode.com/ ) (para produção)
-   **Deploy:**
    -   [Vercel](https://vercel.com/ )

---

## 👨‍💻 Integrantes

-   [Seu Nome Completo]
-   [Nome Completo do Colega, se houver]

---

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO].git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd gerenciador-tarefas-react
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie a API local (opcional, para desenvolvimento ):**
    *Em um terminal separado:*
    ```bash
    npm install -g json-server
    json-server --watch db.json --port 3001
    ```

5.  **Inicie a aplicação React:**
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.
