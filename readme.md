# Dracul Scaffold
Base project with SPA frontend and API backend with Grahql.

This scaffold depends on dracul framework modules

- Monorepo: Frontend + API Graphql  
- Docker ready
- Stateless

## FRONTEND - SPA

### Tecnolgies
- HTML, CSS, Javascript
- Vue, Vuex, Vuetify, VueI18n
- GraphqQL with Apollo Client
- JWT Auth

## Backend - API

### Tecnolgies
- Javascript / Node
- GraphqQL with Apollo Server
- Mongo with Mongoose
- JWT Auth
- Emails with Nodemailer
- Logs with Winston

### Installation and Run

- In /apps/frontend and /apps/backend and execute:
    ```js
    $ npm install
    ```
- Create .env file Backend (exist an .env.example)
- Run project:
    - Frontend: 
    ```js
    $ npm run front
    ```
    - Backend: 
    ```js
    $ npm run back
    ```
