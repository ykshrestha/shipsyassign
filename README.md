# Product Management Web Application

This is a full-stack web application featuring product management functionality. It includes user authentication, product CRUD operations, search, sorting, filtering, and pagination, developed using React on the frontend and Express.js with MongoDB on the backend.

## Live Application Links

- Frontend: https://sprightly-cassata-80cf72.netlify.app/
- Backend API: https://pro-backend-liart.vercel.app/

## Features

- User registration and login with backend credentials verification.
- Product List with add, update, delete functionalities.
- Pagination, sorting, and filtering on the product list.
- Responsive UI enhanced with Bootstrap.
- Client-side routing using React Router.
- Deployed frontend on Netlify and backend on Vercel.

## Project Setup

1. Clone the repository.
2. For frontend:
cd frontend
npm install
npm start

3. For backend:
cd backend
npm install
npm start

4. Set environment variables like `MONGODB_URI` and `JWT_SECRET` in a `.env` file locally or on the respective hosting platforms for deployment.

## API Documentation Summary

### Base URL

`https://pro-backend-liart.vercel.app/api`

### Endpoints

- **POST** `/auth/login`  
Request: `{ username, password }`  
Response: JWT token on success.

- **POST** `/auth/register`  
Request: `{ username, password }`  
Response: Success message.

- **GET** `/products`  
Query Parameters: `page`, `limit`, `category`, `search`, `sortBy`, `sortOrder`  
Response: Paginated list of products.

- **POST** `/products`  
Create new product with request body fields: `name`, `category`, `is_active`, `quantity`, `reorder_level`, `price`.

- **PUT** `/products/:id`  
Update product by ID.

- **DELETE** `/products/:id`  
Delete product by ID.


