## Nest_Book_Library API

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project configuration](#project-configuration)
- [File Structure](#file-structure)
- [API Documentation](#api-documentation)

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version >= 18)
- [Npm](https://www.npmjs.com/) (version >= 9.6.0)

## Project configuration

1. Clone the repository

```bash
$ git clone https://github.com/nishit-trootech/bookLibrary.git
```

2. Install dependencies

```bash
$ cd bookLibrary/

$ npm install
```

3. Configure variables

This project uses environment variables for configuration. To configure your environment, follow these steps:

Locate the `.env.example` file in the root of the project and create a copy of `.env.example` and name it `.env`.

```
$ cp .env.example .env
```

1. To run migration

- Install and run PostgreSQL on your machine through a Docker container

```bash
$ npm run migrate
```

5. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## File Structure

```bash
.
├── README.md
├── package.json
├── database
│   └── migrations
│       └── ... all migration files
├── models
│   └── ... all model files
├── src
│   ├── main.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── books
│   │   ├── dto
│   │   │   ├── create-book.dto.ts
│   │   │   └── update-book.dto.ts
│   │   │── books.controller.spec.ts
│   │   └── ... # feedback controller and service file
├── tsconfig.json
```

## API Documentation

**Navigate to localhost:3000/api-docs for Swagger**


