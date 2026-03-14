# System Architecture

## Overview

The AI-Assisted Journal System follows a full-stack architecture with a React frontend, a Node.js/Express backend, and a MongoDB database.

The system allows users to write journal entries after nature sessions, analyze emotional tone, store entries, and generate insights about emotional patterns over time.

---

## Architecture Components

### Frontend (React)

The frontend provides a simple dashboard interface where users can:

- Write journal entries
- View previously stored entries
- See emotional insights

React communicates with the backend using REST API calls via Axios.

---

### Backend (Node.js + Express)

The backend handles:

- Journal entry storage
- Emotion analysis
- Keyword extraction
- Insights calculation

REST APIs manage communication between the frontend and the database.

Key APIs:

POST /api/journal/analyze  
GET /api/journal/:userId  
GET /api/journal/insights/:userId

---

### Database (MongoDB)

MongoDB stores journal entries with the following fields:

- userId
- text
- emotion
- keywords
- ambience
- createdAt

This allows efficient querying and insight generation.

---

## Data Flow

1. User writes a journal entry in the frontend
2. Frontend sends the entry to the backend
3. Backend analyzes emotional tone
4. Emotion and keywords are extracted
5. Entry is stored in MongoDB
6. Insights are generated from stored entries
7. Frontend displays journal entries and analytics

---

## Scaling to 100k Users

To support large-scale usage:

- Deploy backend servers behind a load balancer
- Use horizontal scaling with containerization (Docker)
- Use MongoDB Atlas for managed scalable database
- Implement caching (Redis) for frequently accessed insights
- Serve frontend through CDN

---

## Reducing LLM Cost

If using real LLM APIs:

- Cache previously analyzed results
- Analyze entries only once
- Store emotion and keyword results in the database
- Use lightweight models for simple sentiment detection

---

## Caching Strategy

Caching can reduce repeated computations:

- Store analysis results directly in the database
- Use Redis to cache insights data
- Avoid recomputing emotion analysis for existing entries

---

## Protecting Sensitive Journal Data

Journal entries may contain personal reflections, so data protection is important.

Security measures include:

- HTTPS communication between frontend and backend
- Input validation and sanitization
- API rate limiting
- Access control to ensure users only view their own entries
- Secure environment variables for configuration

---

## Summary

The architecture separates responsibilities across frontend, backend, and database layers. This modular structure allows easy scaling, maintainability, and future integration with real AI models for emotion analysis.