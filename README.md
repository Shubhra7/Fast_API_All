# 🍵 Shubhrajit’s Tea Inventory App

A full-stack CRUD web application built using **FastAPI (Python)** for the backend and **React.js** for the frontend.

> 🔗 **Frontend (React)**: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)  
> 🔗 **Backend (FastAPI)**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## 🛠️ Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Frontend  | React.js (Vite) |
| Backend   | FastAPI (Python) |
| Styling   | CSS            |
| Deployment | Vercel (Frontend), Render (Backend) |
| Data Store | In-memory (List) — for demo purposes |

---

## 📦 Features

- Add, update, and delete tea entries
- Display list of all teas
- Minimal and responsive UI
- Deployed using modern serverless platforms

---

## 📄 API Endpoints (FastAPI)

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/`                | Welcome message     |
| GET    | `/teas`            | Get all teas        |
| POST   | `/teas`            | Add a new tea       |
| PUT    | `/teas/{tea_id}`   | Update a tea        |
| DELETE | `/teas/{tea_id}`   | Delete a tea        |

---
### 1. Clone the Repositories

```bash
# Backend
git clone https://github.com/your-username/tea-api-backend.git
cd tea-api-backend

# Frontend
git clone https://github.com/your-username/tea-inventory-frontend.git
cd tea-inventory-frontend

