# 🍽️ Rajib Share Plate — Fullstack Food Sharing Platform

A full-featured **community food sharing web application** with a React frontend and Node.js/Express backend.  
Users can donate food, browse available items, request donations, and manage their requests — all secured with **Firebase Authentication**, **JWT token management**, and enhanced UX using **TanStack Query**, **Swiper**, and **Radix UI**.

🔗 **Live Demo:** [https://lambent-strudel-15ddf7.netlify.app](https://lambent-strudel-15ddf7.netlify.app)  


## 🚀 Features

### 🖥️ Frontend
- 🔐 Firebase Authentication (Email/Password & Google OAuth)
- 🥗 Add Food donation form with input validation and donor metadata
- 🍲 Available Foods page with expiry sorting and animated cards
- 📋 Food Details with donor info and modal-based request submission
- 🧾 My Food Requests page with API data fetching & status updates
- ⚙️ Manage Food section to edit, delete, and track donations
- 🎞️ Smooth animations with **Framer Motion** and **Tailwind CSS**
- 🛠️ State & API management via **React Query** and **Axios**
- 🎉 Toast notifications for instant feedback
- 📱 Swiper slider for testimonials, banners, and featured sections

### ⚙️ Backend
- 🛠️ Node.js + Express server with modular route handling
- 🗄️ MongoDB with Mongoose for data persistence
- 🔄 JWT token generation and refresh using Firebase ID token
- 📦 RESTful API endpoints for full CRUD on food donations and requests
- 🚨 Server-side validation & error handling
- 🔐 Middleware to verify tokens & protect routes


## 🛠 Tech Stack

| Frontend                     | Backend                 | Others                     |
| ---------------------------- | ----------------------- | -------------------------- |
| React 19 + Vite               | Node.js + Express.js    | Firebase Authentication    |
| Tailwind CSS + Animate        | MongoDB + Mongoose      | TanStack React Query       |
| React Hook Form               | JWT + Firebase Token    | Axios                      |
| Radix UI Components           | REST API Endpoints      | React Hot Toast            |
| Swiper.js                     | Modular Routing         | Framer Motion Animations   |
| Lucide React + React Icons    | Error Handling Middleware | ESLint + Prettier         |


## ✨ Core Features
- Secure **authentication** & **authorization**
- Dynamic food donation management
- Real-time data fetching & caching
- Fully responsive & mobile-friendly UI
- Smooth animations and micro-interactions
- Integrated toast notifications for better UX


## 📦 Dependencies
**Frontend**
- react
- react-dom
- vite
- tailwindcss
- framer-motion
- @tanstack/react-query
- axios
- react-hook-form
- radix-ui
- swiper
- lucide-react
- react-hot-toast

**Backend**
- express
- mongoose
- cors
- dotenv
- jsonwebtoken
- firebase-admin


## 🛠 Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/rajib-share-plate.git
cd rajib-share-plate
