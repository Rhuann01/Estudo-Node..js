# 🚀 Projeto de Estudo em Node.js

Este projeto foi desenvolvido como parte de um estudo aprofundado em Node.js, com o objetivo de criar uma API REST para gerenciamento de usuários, explorando a integração com banco de dados e a renderização de views no servidor.

## 📝 Descrição do Projeto

A aplicação consiste em um CRUD (Create, Read, Update, Delete) de usuários. Ela expõe endpoints de API para criar, listar, atualizar e deletar usuários, e também possui uma rota que renderiza uma página web para visualizar a lista de usuários cadastrados.

## 🛠️ Tecnologias Utilizadas

Abaixo estão as principais tecnologias e módulos que utilizei neste projeto:

  * **Node.js**: Ambiente de execução do JavaScript no lado do servidor. A base de todo o projeto.
  * **Express.js**: Framework para Node.js, utilizado para criar o servidor web, gerenciar as rotas da API (`/users`, `/users/:id`, etc.) e facilitar a manipulação de requisições e respostas HTTP.
  * **MongoDB (com MongoDB Atlas)**: Banco de dados NoSQL orientado a documentos, usado para armazenar as informações dos usuários. A conexão é feita com um cluster na nuvem através do MongoDB Atlas.
  * **Mongoose**: Biblioteca que facilita a modelagem dos dados da aplicação para o MongoDB. Foi usada para criar o schema e o modelo do usuário (`UserModels`), definindo a estrutura dos dados e para interagir com o banco de dados.
  * **EJS (Embedded JavaScript templating)**: Motor de templates que permite gerar HTML dinâmico no servidor. Foi utilizado para criar a página que lista os usuários cadastrados.
  * **Postman**: Ferramenta utilizada para testar os endpoints da API REST, enviando requisições (GET, POST, PATCH, DELETE) e validando as respostas do servidor de forma prática.
  * **Módulos Nativos do Node.js**:
      * **http**: Módulo para criação de servidores HTTP. Foi explorado em um arquivo de teste para entender o funcionamento base do Node.js.
      * **fs (File System)**: Módulo para interagir com o sistema de arquivos. Utilizado para demonstrar como criar pastas e criar/ler/modificar arquivos.
      * **path**: Módulo para trabalhar com caminhos de arquivos e diretórios de forma padronizada.

## 📦 Como Executar o Projeto

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/estudo-node..js.git
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**

      * Crie um arquivo `.env` na raiz do projeto.
      * Adicione as seguintes variáveis com as suas credenciais do MongoDB Atlas:
        ```env
        MONGODB_USER=seu_usuario_do_banco
        MONGODB_PASSWORD=sua_senha_do_banco
        MONGODB_CLUSTER=seu_cluster
        MONGODB_DB=nome_do_banco
        ```

4.  **Inicie o servidor:**

    ```bash
    node modules/express.js
    ```

    O servidor estará rodando na porta `8080`.

## 📚 O que eu aprendi

Neste projeto, tive a oportunidade de aprender e aprofundar meus conhecimentos em:
  * Gerenciamento de dados sensíveis (credenciais) utilizando variáveis de ambiente com um arquivo .env para não expor informações no código.
  * Criação de um servidor web e API RESTful com Express.
  * Modelagem de dados e operações CRUD com Mongoose e MongoDB.
  * Conexão com um banco de dados na nuvem (MongoDB Atlas).
  * Renderização de páginas web no lado do servidor (Server-Side Rendering) com EJS.
  * Utilização de módulos nativos essenciais do Node.js como `fs`, `path` e `http`.
  * Organização de um projeto em Node.js, separando responsabilidades como rotas, modelos e conexão com o banco de dados.

-----

Feito com ❤️ por **Rhuann**.
