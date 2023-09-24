# Cadastro de Notícias - API Backend

Este é o repositório da aplicação backend de cadastro de notícias, que fornece recursos para gerenciar notícias e categorias relacionadas. Abaixo estão detalhados os recursos disponíveis, bem como informações sobre como testar a API localmente.

## Recursos

A API backend oferece os seguintes recursos:

### Gerenciamento de Notícias

- Listar todas as notícias:

  - Endpoint: `GET /news/all`
  - Descrição: Recupera todas as notícias cadastradas no sistema.

- Listar notícias paginadas:

  - Endpoint: `GET /news`
  - Descrição: Recupera uma página de notícias, com suporte a paginação.
    - Aceita query params (`page`) para acessar uma página específica na consulta.

- Criar nova notícia:

  - Endpoint: `POST /news`
  - Descrição: Cria uma nova notícia no sistema.
  - Parâmetros:
    - `image`: (multipart/form-data) Arquivo de imagem relacionado à notícia.
    - `title`: (string) Título da notícia.
    - `description`: (string) Conteúdo da notícia.
    - `author`: (string) Autor da notícia.
    - `category_id`: (string) Categoria da notícia.

- Excluir uma notícia:
  - Endpoint: `DELETE /news/:id`
  - Descrição: Exclui uma das notícias cadastradas no sistema.

### Gerenciamento de Categorias

- Listar todas as categorias:

  - Endpoint: `GET /category`
  - Descrição: Recupera todas as categorias cadastradas no sistema.

- Criar nova categoria:
  - Endpoint: `POST /category`
  - Descrição: Cria uma nova categoria no sistema.
  - Parâmetros:
    - `name`: (string) Nome da categoria.
    - `color`: (string) Cor de destaque para o frontend da categoria.

## Tecnologias Utilizadas

- Node.js
- Sequelize (ORM)
- Express.js (Framework web)

## Deploy

A aplicação foi implantada na plataforma Cyclic e está disponível através do link: [https://cute-tan-buffalo-cuff.cyclic.app/](https://cute-tan-buffalo-cuff.cyclic.app/).

O frontend da aplicação está disponível no seguinte repositório: [https://github.com/vclemente2/news-frontend](https://github.com/vclemente2/news-frontend).

O deploy do frontend está disponível no seguinte link: [https://news-frontend-khaki.vercel.app/index.html](https://news-frontend-khaki.vercel.app/index.html).

## Testar a API localmente

Para testar a API localmente, siga os passos abaixo:

**Pré-requisitos:**

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em https://nodejs.org/.
2. Tenha um banco de dados PostgreSQL instalado localmente ou configurado em algum serviço de nuvem (a aplicação utiliza Sequelize ORM com PostgreSQL).

**Passo a passo:**

1. Clone o repositório da API:

   ```bash
   git clone https://github.com/vclemente2/news-backend
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd news-backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o banco de dados:

   - Renomeie o arquivo `.env.example` para `.env`.
   - Edite o arquivo `.env` e preencha as informações do banco de dados (host, usuário, senha, nome do banco).

5. Execute as migrações para criar as tabelas no banco de dados:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

A API agora estará em execução localmente, geralmente na porta 3000 (ou na porta que for configurada na variável PORT do arquivo .env).
