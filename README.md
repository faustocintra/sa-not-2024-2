# sa-not-2024-2
> [!WARNING]
> Projeto em andamento.
>
> Este repositório para fins didáticos da disciplina **Segurança no Desenvolvimento de Aplicações** do 5º semestre de 2024 do curso Desenvolvimento de Software Multiplataforma (DSM) noturno da Fatec Franca Dr. Thomaz Novelino.

<br/>

## Class Anotations

Após clonar o repositório do professor, seguimos o seguinte processo:

- Abrimos o terminal e executamos:

```bash 
npx aka-demy/create-express-app
```

- O comando faz algumas perguntas que respondemos da seguinte maneira:
    - Ok to proceed? ``y``
    - Give a name for the app: ``vulcom``
    - Choose a language: ``JavaScript``
    - Choose a template engine: ``EJS``
    - Choose a package manager: ``npm``

- Instalamos a extensão `EJS Language Support` de **DigitalBrainstem** no VS Code.

- Para executar a aplicação, navegamos para o diretório `vulcom` através do terminal e executamos:

```bash
npm run dev
```

- Acessamos a página web `supabase.com` e logamos com as nossas contas do GitHub.

- Em ``Create a new organization``, mantemos o padrão oferecido pela plataforma.

- Nomeamos o projeto como ``Segurança Aplicações 2024/2``.

- Definimos a região como ``South America (São Paulo)``.

- Nas opções de menu, em **database**, criamos uma nova tabela chamada **users** e adicionamos 3 colunas:
    - id tipo int8 único e auto incremental;
    - username tipo texto not null;
    - password tipo texto not null

- Em seguida, no terminal, instalamos novas bibliotecas para utilizar o banco de dados:

```bash
npm install dotenv pg
```

- Após o último commit é possivel fazer SQLInjection através do formulário inserindo:

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

- Voltamos ao terminal para instalar novos pacotes:

1. **prisma**:

```bash
npm install --save-dev prisma
```

> _Este é o pacote que contém as ferramentas necessárias para trabalhar com o Prisma, incluindo a CLI (Command Line Interface) que permite gerar o cliente e realizar migrações no banco de dados._

2. **@prisma/client**:

```bash
npm install @prisma/client
```

> _É o cliente de banco de dados gerado pelo Prisma, que é um ORM (Object-Relational Mapping) que facilita a interação com bancos de dados. Ele permite que você escreva consultas SQL de forma mais simples e segura._

3. **express-sanitizer**:

```bash
npm install express-sanitizer
```

> _É um middleware para o Express que ajuda a prevenir injeções de código malicioso, sanitizando dados de entrada._

4. **prettier**:

```bash
npm install --save-dev prettier
```

> _É uma ferramenta de formatação de código que ajuda a manter um estilo consistente no seu código JavaScript, eliminando preocupações com a formatação._


> [!NOTE]
> Os comandos para `prettier` e `prisma` incluem a opção `--save-dev`, o que significa que eles serão adicionados às `devDependencies`, já que são ferramentas usadas apenas no ambiente de desenvolvimento.

- Iniciamos o prisma em nosso projeto com:

```bash
npx prisma init
```

- Depois aplicamos migrações no banco de dados usando o Prisma. Como as mudanças seram feitas no modelo **users**, o nome descritivo escolhido pas as migrações foi ``alter_users``.

```bash
npx prisma migrate dev --name alter_users
```

> [!NOTE]
> Para gerar automaticamente o banco de dados após alguma alteração no arquivo de esquema, use o seguinte comando:
> ```bash
> npx prisma generate
> ```

- Para criptografar as senhas, devemos instalar um pacote. No terminal, navegue até o diretório vulcom e execute o seguinte comando:

```bash
npm install bcrypt
```