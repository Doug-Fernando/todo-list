# **Lista de tarefas**
É uma aplicação bem simples para treinar e consolidar os conhecimentos de ReactJS + Typescript.  
Adicione tarefas a lista e ela ficará salva. Utilizei conceitos de `ciclos de vida do componente`, `localstorage`, `componetização`, `hooks`, `props`, `tipagem`, `docker` entre outros.  
Essa foi minha primeira tentativa usando Docker para criar containers.


---

## Como rodar
Clone o repositório com: `git clone git@github.com:Doug-Fernando/todo-list.git`

Navegue até a pasta onde clonou o repositório
- ### Com Docker
  **Precisa ter docker instalado.**  
  Caso não tenha seguir a [Documentação](https://docs.docker.com/get-docker/) para instalar
  
  1. Crie a imagem: `docker build -t todo-list .`
  - *-t todo-list* - Nome da imagem(opcional)

  1. Rode o container: `docker run -p 3000:3000 todo-list`

  2. Acesse `localhost:3000` e teste a aplicação :)

- ### Com Node
  1. Instale as dependências: usando **NPM**: `npm install` ou **YARN**: `yarn`
  2. Rode a aplicação: `npm start` ou `yarn start`
  3. Após alguns segudos a aplicação deverá abrir. Caso não, basta acessar `localhost:3000`. Usa a porta padrão do React 3000


## Feedbacks

Projeto simples, mas que trouxe beneficios para o aprendizado.  
Gostaria muito de ouvir caso tenha dicas, melhorias e feedbacks sobre o projeto ou alguma tecnologia usada ( principalmente Docker )
