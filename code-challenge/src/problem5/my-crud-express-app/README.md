# My CRUD Express App

This project is a simple Express.js application built with TypeScript that implements a backend server with a CRUD interface. It allows users to create, list, get details, update, and delete resources while connecting to a MongoDB database for data persistence.

## Table of Contents

- [My CRUD Express App](#my-crud-express-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/lnl2002/Lai-Ngoc-Lam.git
   cd my-crud-express-app
   ```

2. Install the dependencies:
   ```
   npm install or pnpm install
   ```

## Configuration

Before running the application, ensure that you have the following environment variables set up:

- `DB_CONNECTION`: The connection string for your database. (Recommend use the connection string I attached in the email)
- `PORT`: Port number

You can create a `.env` file in the root directory to store your environment variables.

## Running the Application

To run the application in development mode, use the following command:
```
npm run dev
```

To build the application and run it in production mode, use:
```
npm run build
npm start
```

## API Endpoints

- **POST /api/v1/resources**: Create a new resource.
- **GET /api/v1/resources**: List all resources.
- **GET /api/v1/resources/:id**: Get details of a specific resource.
- **PUT /api/v1/resources/:id**: Update a specific resource.
- **DELETE /api/v1/resources/:id**: Delete a specific resource.
