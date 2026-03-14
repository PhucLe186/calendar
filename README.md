# Calendar Booking Backend

Backend service for a simple calendar booking system.
The system allows creating events and querying available time slots based on working hours and existing events.

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL / MySQL

---

# Features

- Create events
- Store events in database
- Query events by time range
- Calculate available time slots
- RESTful API structure

---

# Project Structure

```
calendar.
├── README.md
├── config
│   ├── config.js
│   └── db.js
├── migrations
│   └── 20260313091153-create-events.js
├── models
│   └── index.js
├── package-lock.json
├── package.json
├── seeders
└── src
    ├── controller
    │   ├── availability.controller.js
    │   └── event.controller.js
    ├── index.js
    ├── midleware
    │   ├── errrHandler.js
    │   └── validate.js
    ├── models
    │   ├── event.model.js
    │   └── index.js
    ├── routes
    │   ├── availability.route.js
    │   ├── event.route.js
    │   └── index.js
    ├── services
    │   ├── availability.service.js
    │   └── event.service.js
    └── until
        └── validator.js

```

---

# Installation

Clone the repository

```
git clone https://github.com/PhucLe186/calendar.git
cd calendar
```

Install dependencies

```
npm install
```

Create Database

```
npx sequelize-cli db:migrate
```

---

# Environment Variables

Create a `.env` file in the root folder.

Example:

```
PORT=3000
NODE_ENV=development

DB_CONNECTION_STRING=your connect string
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your database name
DB_USER=postgres
DB_PASSWORD= your-password

```

---

# Running the Server

Development mode

```
npm run dev
```

Production

```
npm start
```

Server will run at

```
http://localhost:3000
```

---

# API Endpoints

## Create Event

POST `/api/events`

Request body

```
{
  "title": "Meeting",
  "start_at": "2026-03-13T10:00:00",
  "end_at": "2026-03-13T11:00:00",
  "timezone": "Asia/Ho_Chi_Minh",
  "type": "APPOINTMENT" or "BLOCK"
}
```

Response

```
{
  "success": true,
  "data": { ...event }
}
```

---

## Get Events in Time Range

GET `/api/events`
Currently the system uses a default user ID for all events.

ownerId = 3aa0f1ff-c6d6-4d61-9e1c-9a221e41565d

Query parameters

```
from
to
```

Example

```
GET /api/events?ownerId=123&from=2026-03-13T10:00:00&to=2026-03-13T11:00:00
```

---

## Query Availability

POST `/api/availability/query`

Request body

```
{
  "workingHours": {
    "start": "2026-03-13T09:00:00",
    "end": "2026-03-13T18:00:00"
  }
}
```

Response

```
{
    "success": true,
    "availableSlots": [
        {
            "start": "2026-03-13T09:00:00",
            "end": "2026-03-13T18:00:00"
        }
    ]
}
```

link quick test : `https://clumsy-bunni-phucadmin-bfbf25bb.koyeb.app/`
