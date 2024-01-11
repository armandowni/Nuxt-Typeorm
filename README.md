# Template Project Nuxt-Typeorm-Express

The Nuxt-TypeORM-Express project template amalgamates the power of Nuxt.js, TypeORM, and Express to provide a comprehensive framework for building web applications. Nuxt.js, serving as the frontend framework, facilitates the creation of dynamic and engaging user interfaces with the Vue.js library. TypeORM, a robust Object-Relational Mapping (ORM) library for TypeScript and JavaScript, seamlessly integrates with Express, a fast and minimalist web framework for Node.js. This template offers a streamlined solution for developers aiming to build scalable, server-rendered applications with a robust database layer. By combining the frontend capabilities of Nuxt.js, the database handling capabilities of TypeORM, and the server-side functionalities of Express, this project template empowers developers to create modern, performant, and feature-rich web applications.

## Configuration Database

To connect to database, you can configure in 2 ways

```bash

$ configure in nuxt.config.js

# or
$ configure in folder api/ormconfig.ts

```

## Build Setup Typeorm

```bash

# automatic build migration
$ yarn migration:generate

# run migration
$ yarn migration:run

```

## Build Setup Nuxt

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## For documentation

```bash

# nuxt
https://nuxtjs.org/

# typeorm
https://typeorm.io/

# express
https://expressjs.com/
```

## for website example -> https://nuxt-typeorm.vercel.app/
