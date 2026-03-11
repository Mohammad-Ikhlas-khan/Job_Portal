# Job Portal – Full Stack Application

A full-stack Job Portal web application where administrators can post jobs and users can apply for them.

## 🚀 Tech Stack

### Frontend

> React (Vite)

>Tailwind CSS

>Axios

>React Router

>JavaScript

### Backend

>Spring Boot

>Spring Security

>JWT Authentication

>Spring Data JPA / Hibernate

### Database

>PostgreSQL

## ✨ Features
- User Authentication (Signup/Login)

- JWT based Authorization

- Role Based Access (Admin / User)

- Admin can create, edit and delete job posts

- Users can view and apply for jobs

- Users can view their applications

- Admin can see applications for a job

- Job search functionality

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```
git clone https://github.com/Mohammad-Ikhlas-khan/Job_Portal
```
### 2️⃣ Backend Setup

#### Navigate to backend folder:
```
cd JobApp
```
#### Update database configuration in:

**src/main/resources/application.properties**

```
spring.datasource.url=jdbc:postgresql://localhost:5432/your_db_name
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=your_jwt_secret_key
```

#### Run the backend:
```
mvn spring-boot:run
```
#### Server runs on:

http://localhost:8080

### 3️⃣ Frontend Setup

#### Navigate to frontend folder:
```
cd frontend
```

#### Install dependencies:
```
npm install
```

#### Run the frontend:
```
npm run dev
```
#### Frontend runs on:

http://localhost:5173

## 📌 Future Improvements

- Email notifications

- Resume upload

- Job filtering by location / salary

- Pagination

## 👨‍💻 Author

***Mohammad Ikhlas Khan***
