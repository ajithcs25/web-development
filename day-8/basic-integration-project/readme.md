# Basic Integration Project – AI Copy Generator API

## Overview
This project implements a simple Node.js server that exposes an AI-powered API endpoint to generate frontend UI copy dynamically.

The API accepts a page section as input and returns AI-generated text suitable for landing pages.

---

## Features
- Local Node.js + Express server
- Single AI endpoint for copy generation
- Secure LLM integration using environment variables
- Tested locally using Postman

---

## Tech Stack
- Node.js
- Express.js
- Groq LLM API
- dotenv

---

## API Endpoint

### GET /api/generate-copy

#### Query Parameter
section = hero | features | footer

#### Example Request
http://localhost:3000/api/generate-copy?section=hero

#### Example Response
```json
{
  "section": "hero",
  "copy": "Stay focused and get more done every day..."
}
