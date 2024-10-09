# sa-not-2024-2
Repositório da disciplina Segurança no Desenvolvimento de Aplicações, 5º semestre DSM noturno Fatec Franca 2024/2


***

## Class Anotations

Após clonar o repositório executamos o seguinte processo:

- Abrimos o terminal e executamos:
    ```bash 
    npx aka-demy/create-express-app
    ```

- O comando faz algumas perguntas que respondemos da seguinte maneira:
    - Ok to proceed? y
    - Give a name for the app: vulcom
    - Choose a language: JavaScript
    - Choose a template engine: EJS
    - Choose a package manager: npm

- Instalamos a extensão `EJS Language Support` de **DigitalBrainstem** no VS Code.

- Para executar a aplicação, navegamos para o diretório `vulcom` através do terminal e executamos:

    ```bash
    npm run dev
    ```

- Acessamos a página web `supabase.com` e logamos com o GitHub

- Em ``Create a new organization``, mantemos o padrão

- Nomeamos o projeto como ``Segurança Aplicações 2024/2``

- Definimos a região como ``South America (São Paulo)``

- Nas opções de menu, em **database**, criamos uma nova tabela chamada **users** e adicionamos 3 colunas:
    - id tipo int8 único e auto incremental;
    - username tipo texto not null;
    - password tipo texto not null

- Em seguida, no terminal, instalamos novas bibliotecas para utilizar o banco de dados:

    ```bash
    npm install dotenv pg

    ```

- Após o último commit é possivel fazer SQLInjection através do formulário como:

    ```sql
    ' or 1=1; drop table users; --
    ```
    > [!NOTE]
    > Nesta situação, estamos deletando a tabela users.

- Voltamos para o database e criamos uma nova tabela chamada **comments** e adicionamos 3 colunas:
    - id tipo int8 único e auto incremental;
    - data_time timestamptz valor atual;
    - comment tipo texto

- Após adicionado a página de Cross-Site Script, é possivel adicionar scripts que se auto-executam após serem adicionados no campo de texto. Você pode tentar gerar um alet ou importar um script malicioso de um outro local. 