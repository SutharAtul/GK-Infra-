# GK Infra 🏗️

GK Infra is a full-stack web application developed to showcase and manage infrastructure and construction-related services. The platform provides a modern user interface for users and a powerful backend for handling contact requests and data management.

---

## 🚀 Features

- Responsive and modern frontend
- Contact form with backend integration
- Secure REST API
- MongoDB database integration
- Scalable project structure
- Clean and maintainable codebase

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- HTML5, CSS3, JavaScript

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Tools
- Git & GitHub
- VS Code
- Postman

---

## 📁 Project Structure

    GK-Infra/
    │
    ├── client/ # Frontend (React)
    │ ├── public/
    │ ├── src/
    │ └── package.json
    │
    ├── server/ # Backend (Node + Express)
    │ ├── models/
    │ ├── routes/
    │ ├── server.js
    │ └── package.json
    │
    ├── .gitignore
    └── README.md


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SutharAtul/GK-Infra-.git
```
### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```
### 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4️⃣ Environment Variables

- Create a .env file inside the server folder:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
### 5️⃣ Run the Application

- Start Backend Server
```bash
cd server
npm start
```

- Start Frontend Server
```bash
cd client
npm start
```

- Open in browser:
```bash
http://localhost:3000
```
