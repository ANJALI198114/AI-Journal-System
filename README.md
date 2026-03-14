# Deplyment Link
https://vercel.com/anjali-aggarwals-projects/ai-journal-system/HozEbKzrLTobHimdbKRReRadeb1N

# AI-Assisted Journal System

## Overview
The AI-Assisted Journal System is a full-stack web application where users can write journal entries after immersive nature sessions such as forest, ocean, or mountain experiences.

The system analyzes the emotional tone of the journal text, extracts keywords, stores entries in a database, and generates insights about the user's mental state over time.

This project demonstrates API design, backend development, frontend integration, and basic AI-style emotion analysis.

---

## Features

- Write and store journal entries
- Emotion analysis (calm, happy, sad, neutral)
- Keyword extraction from journal text
- Insights dashboard displaying:
  - Total entries
  - Top emotion
- View previous journal entries
- REST API backend
- MongoDB database storage
- Simple and clean React dashboard UI

---

## Tech Stack

Frontend
- React
- Axios
- CSS

Backend
- Node.js
- Express.js

Database
- MongoDB

Tools
- Git
- VS Code

---

## API Endpoints

### Analyze and Save Journal Entry
POST /api/journal/analyze

Example Request:

{
  "userId": "123",
  "text": "Walking through the forest today made me feel peaceful and relaxed."
}

Response:

{
  "emotion": "calm",
  "keywords": ["peace", "nature", "relax"]
}

---

### Get Journal Entries

GET /api/journal/:userId

Example:

GET /api/journal/123

Returns all journal entries for the user.

---

### Get Journal Insights

GET /api/journal/insights/:userId

Example Response:

{
  "totalEntries": 10,
  "topEmotion": "calm"
}

---

## Project Structure

ai-journal-system
│
├── client
│   ├── src
│   │   ├── JournalPage.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── server
│   ├── controllers
│   │   └── journalController.js
│   ├── models
│   │   └── Journal.js
│   ├── routes
│   │   └── journalRoutes.js
│   └── server.js
│
├── README.md
└── ARCHITECTURE.md

---

## Installation and Setup

### Clone Repository

git clone https://github.com/YOUR_USERNAME/ai-journal-system.git

---

### Backend Setup

cd server
npm install
node server.js

Server runs at:

http://localhost:5000

---

### Frontend Setup

cd client
npm install
npm start

Frontend runs at:

http://localhost:3000

---

## Workflow

1. User writes a journal entry
2. Backend analyzes emotional tone from text
3. Emotion and keywords are extracted
4. Entry is stored in MongoDB
5. Insights are calculated from stored entries
6. Frontend dashboard displays entries and insights

---

## Future Improvements

- Integrate real LLM API for emotion analysis
- Add authentication system
- Visual emotion analytics charts
- Journal search and filtering
- Deploy the full application

---

## Author

Anjali Aggarwal  
B.Tech CSE (AI)  
KIET Group of Institutions
