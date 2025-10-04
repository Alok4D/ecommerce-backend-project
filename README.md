# 🛒 Ecommerce Backend Project

## **Project Overview**
This project is a **full-featured Ecommerce backend application** built using **TypeScript, Node.js, Express, and Mongoose**. It simulates a professional production-level backend for a modern ecommerce platform with:

- Secure authentication
- Role-based access control
- Well-structured APIs
- Product management
- Order processing
- Payment handling

## **Objective**
To develop a **scalable and maintainable backend system** for an ecommerce platform that supports multiple user roles, product management, order processing, and secure payment handling.

## **Roles & Responsibilities**

### **Admin**
- Manage all users (create, update, delete)
- Add, update, delete product categories
- Add, update, delete products
- View and manage all orders
- Access platform-wide analytics and reports

### **Vendor**
- Add new products with images and details
- Update or remove their own products
- View and process orders for their products
- Track sales performance and revenue

### **Customer**
- Register, log in, and manage their profile
- Browse products by category and search filters
- Add products to cart and place orders
- Track order status and history

## **Models**
- **User**
- **Product**
- **Category**
- **Order**
- **Cart**
- **Review**
- **Payment**
- **Notification**

## **Technical Requirements**
- Use **TypeScript** for type safety
- Implement **RESTful APIs** following **MVC architecture**
- Use **Mongoose** for schema definitions and data validation
- Secure routes using **JWT authentication** and **role-based authorization**
- Include **error handling middleware** and **input validation**
- Integrate **environment variables** for configuration using `dotenv`
- Follow proper folder structure with:
  - `services`
  - `controllers`
  - `routes`
  - `models`

## **Setup Instructions**

1. **Clone the repository**
```bash
git clone <repository-link>
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** in the root directory
```
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
```

4. **Run in development mode**
```bash
npm run dev
```

5. **Build and run production mode**
```bash
npm run build
npm start
```

## **API Documentation**
- All APIs follow RESTful conventions
- **Postman collection** included in the repository for testing endpoints
- **Base URL:** `http://localhost:5000/api/v1`

### **Sample Endpoints**
| Method | Endpoint                | Description                        |
|--------|------------------------|------------------------------------|
| POST   | /api/v1/auth/register   | Register a new user                |
| POST   | /api/v1/auth/login      | Login a user                        |
| GET    | /api/v1/products        | Get all products                    |
| POST   | /api/v1/products        | Add a new product (Admin/Vendor)   |
| PUT    | /api/v1/products/:id    | Update a product (Admin/Vendor)    |
| DELETE | /api/v1/products/:id    | Delete a product (Admin/Vendor)    |

## **Database Seed Script**
- Initial data for **Users**, **Products**, and **Categories** included in `data/seed` folder
- Run seed script:
```bash
ts-node src/data/seed.ts
```

## **Submission Guidelines**
- Submit **GitHub repository link**
- Include **Postman collection** for all APIs
- Ensure code is **well-documented** and **follows clean coding practices**