# Pocketwise AI 💰

**AI-powered financial coaching platform that explains *why* you overspend — not just what you spent.**

Built for **FINOVATE 2026** — a national virtual hackathon organized by COSSIS, sponsored by National Bank of Malawi.

---

## 🚀 Overview

Most budgeting apps stop at tracking transactions. **Pocketwise AI** goes further — using AI to analyze spending patterns and deliver personalized, human-readable insights that explain the *behavior* behind the numbers, helping users build healthier financial habits.

---

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based signup/login with protected routes
- 💳 **Transaction Tracking** — Add, categorize, and manage transactions in real time
- 📊 **Analytics Dashboard** — Visual breakdown of spending via Chart.js
- 🤖 **AI Financial Advice** — Personalized insights powered by the OpenAI API, explaining *why* you're overspending and how to improve
- 🎨 **Clean, Modern UI** — Dark forest green & emerald themed multi-view dashboard (Transactions, Analytics, AI Advice)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript, Chart.js |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Auth | JWT (JSON Web Tokens) |
| AI Layer | OpenAI API |
| Version Control | Git / GitHub |

---

## 👥 Team

| Name | Role |
|---|---|
| Matthews | Group Leader / Frontend Developer |
| Bright | Backend Developer |
| Chisomo | AI Developer (OpenAI Integration) |
| Rene | Research Lead / QA |
| Wisdom | Business Strategist / PM / Presenter |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-org>/pocketwise-ai.git
cd pocketwise-ai

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (if separate)
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

### Running the App

```bash
# Start the backend
cd backend
npm start

# Start the frontend (if separate dev server)
cd frontend
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| GET | `/api/transactions` | Get user transactions (protected) |
| POST | `/api/transactions` | Add a new transaction (protected) |
| GET | `/api/insights` | Get AI-generated financial insights (protected) |

*(Update this table to match your final route names)*

---

## 🗺️ Roadmap

- [x] JWT authentication (signup/login)
- [x] Transaction persistence via MongoDB Atlas
- [ ] Full AI insights integration (OpenAI endpoint → frontend)
- [ ] Final QA pass
- [ ] Presentation & demo prep
- [ ] Submission

---

## 📄 License

This project was built for educational and hackathon purposes as part of FINOVATE 2026.

---

## 🙏 Acknowledgements

- COSSIS — Hackathon organizers
- National Bank of Malawi — Sponsor
- MUBAS — Home institution