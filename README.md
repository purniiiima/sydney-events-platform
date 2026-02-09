# Sydney Events Platform

## Description
Sydney Events Platform is a simple full-stack web application that displays upcoming events in Sydney. The backend is built with **Node.js** and **Express**, serving event data from **MongoDB**. The frontend is built with **React**, fetching events from the backend and displaying them in a user-friendly interface. Users can click the **GET TICKETS** button to go directly to the Eventbrite page for the event.

 **Note:** Static test events are used for demonstration purposes to ensure faster and reliable functionality.

---

## Features
- Display a list of upcoming events in Sydney
- Each event shows:
  - Title
  - Source (Eventbrite)
  - Event link (GET TICKETS)
- Responsive frontend built with React
- Backend API built with Node.js and Express
- MongoDB stores event data

---

## Project Flow

**Backend (Node.js + Express) → MongoDB → API → Frontend (React) → User**

1. Backend serves events from MongoDB.
2. Frontend fetches events from the backend API.
3. Events are displayed on the React frontend.
4. User clicks **GET TICKETS** to visit the Eventbrite page.

---

## Installation & Running the Project

# Backend
```bash
cd server
npm install
npm run dev
```

**Server runs on:** [http://localhost:5050](http://localhost:5050)

**API endpoint:** [http://localhost:5050/api/events](http://localhost:5050/api/events)

# Frontend

**To run the frontend:**

```bash
cd client
npm install
npm run dev
```

**Frontend runs on:** [http://localhost:5173](http://localhost:5173)

Fetches events from the backend API.

# API Endpoints
| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/events` | GET | Returns a list of events |

# Example Event Object
{
  "_id": "6989f4d6d684d3da6db15912",
  "title": "Sydney Music Festival",
  "imageUrl": "https://via.placeholder.com/400x200",
  "source": "Eventbrite",
  "originalUrl": "https://www.eventbrite.com.au/e/sydney-music-festival-123456",
  "lastScrapedAt": "2026-02-09T14:53:10.077Z",
  "status": "new",
  "category": []
}

# Notes
- The app uses static test events for demonstration.
- Scraping from Eventbrite can be added for live events in the future.
- The project demonstrates a full-stack workflow, including backend API, MongoDB storage, and frontend data fetching.
- No login or authentication functionality is included, as it is not part of the assignment.

# Author
Purnima Baroi