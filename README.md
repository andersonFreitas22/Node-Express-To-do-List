# To-do list com NodeJs

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/andersonFreitas22/Node-Express-To-do-List/blob/master/LICENSE)

# Sobre o projeto

O projeto foi construído durante as aulas do curso de Desenvolvimento Web FullStack, ministrado pela OneBitCode, e consiste em uma aplicação web de lista de tarefas, utilizando o NodeJs para o BackEnd e o framework Express para agilizar a implementação. Na aplicação, é possível criar e editar novas tarefas de forma simples, facilitando a organização pessoal. 

## Página inicial
![toDoListPrint](https://user-images.githubusercontent.com/121874577/216835460-b8e736d5-cecf-4605-8a0d-c4cbe9344dde.jpeg)

## Funcionalidades

:heavy_check_mark: Criar nova lista de tarefas
- Uma lista de tarefas consiste em uma aba, que pode receber tarefas de acordo com a necessidade do usuário.

:heavy_check_mark: Editar o nome de uma lista de tarefas
- Após criada, uma lista de tarefas pode ter o seu nome editado livremente.

:heavy_check_mark: Adionar uma tarefa a uma lista

:heavy_check_mark: Remover uma tarefa ou lista de tarefas

# Tecnologias utilizadas
## Back end
- Javascript
- NodeJs

## Front end
- HTML / CSS / JS
- Framework CSS Bulma

## Dependências
- Express
- EJS
- Mongoose
- Banco de dados: MongoDB

## Dependências de desenvolvimento
- Nodemon

# Como executar o projeto
## Back end
- Instale o Node.js e o MongoDB. Crie uma nova connection chamada "todo-list", e nessa connection, crie um novo database chamado também "todo-list". Isso pode ser feito facilmente com o MongoDb Compass, disponível para download em [Compass](https://www.mongodb.com/products/compass). 

## Clonar o projeto e instalar suas as dependências.
Na pasta local criada para o projeto, abra o terminal e execute os seguintes comandos:
```bash
# clonar repositório
git clone https://github.com/andersonFreitas22/Node-Express-To-do-List.git

# Instalando o Node Express
npm install express --save

# Instalando o Nodemon Como dependência de desenvolvimento
npm install --save-dev nodemon

# Instalando o EJS
npm install ejs --save

# Instalando o Mongoose
npm install mongoose --save
```
## Executando o projeto: 
- No terminal:
```bash
# Há um scrip chamado "dev" para rodar a aplicação, basta seguir o seguinte comando
npm run dev
```
- No navegador, digite "http://localhost:3000/" e pronto! A aplicação já pode ser utilizada normalmente!

# Autor

Anderson de Freitas da Costa

https://www.linkedin.com/in/anderson-costa-1385691b2/
