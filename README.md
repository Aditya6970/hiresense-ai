# 🚀 HireSense AI – Smart Mock Interview Platform

HireSense AI is a full-stack AI-powered mock interview platform that helps users prepare for interviews by generating personalized questions, evaluating their profile, and providing a preparation roadmap.

---

## ✨ Features

- 🧠 AI-generated Technical & Behavioral Questions  
- 📄 Resume Upload & Analysis  
- 📊 Match Score Evaluation  
- 🛣️ Personalized Preparation Roadmap  
- 📥 Resume PDF Generation  
- 🔐 Authentication (Login/Register)  
- 📁 Interview History Tracking  

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- SCSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### AI Integration
- Google Gemini API

---

## 📂 Project Structure

hiresense-ai/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── services/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   ├── components/
│   │   └── styles/
│
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/AdityaRai/hiresense-ai.git 
cd hiresense-ai  

---

## 🖥️ Backend Setup

### 2. Install Dependencies

cd Backend  
npm install  

---

### 3. Create .env File

PORT=3000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
GEMINI_API_KEY=your_google_api_key  

---

### 4. Run Backend

npm run dev  

Backend runs on: http://localhost:3000  

---

## 🌐 Frontend Setup

### 5. Install Dependencies

cd Frontend  
npm install  

---

### 6. Run Frontend

npm run dev  

Frontend runs on: http://localhost:5173  

---

## 🔐 Authentication Flow

- User registers → stored in MongoDB  
- JWT token generated on login  
- Token stored in browser  
- Protected routes require authentication  

---

## 📊 API Endpoints

### Auth Routes
- POST /api/auth/register  
- POST /api/auth/login  
- GET /api/auth/logout  
- GET /api/auth/get-me  

### Interview Routes
- POST /api/interview  
- GET /api/interview  
- GET /api/interview/report/:id  
- POST /api/interview/resume/pdf/:id  

---

## 🧠 How It Works

1. User uploads resume or enters profile  
2. Provides job description  
3. Backend sends data to Gemini AI  
4. AI generates:
   - Interview questions  
   - Match score  
   - Preparation roadmap  
5. Data stored in MongoDB  
6. Displayed on frontend  

---

## 🚀 Future Improvements

- 🌍 Deployment (Vercel + Render)  
- 🎤 Voice-based interview  
- 📈 Analytics dashboard  
- 🧾 Resume scoring system  

---

## 👨‍💻 Author

Aditya Rai  
B.Tech Student | Full Stack Developer  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
