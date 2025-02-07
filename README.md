# Public API - HNG12 Task
This is a simple public API that returns basic information, including the developer's email, the current datetime in ISO 8601 format, and a GitHub repository URL.

## Features
- Returns JSON response with email, timestamp, and GitHub URL.
- Uses Express.js for the backend.
- CORS enabled for cross-origin access.
- Deployed to a publicly accessible endpoint.

## Tech Stack
Node.js
Express.js
CORS
Git & GitHub

## Installation & Setup
Ensure you have the following installed:
Node.js & npm
Git


### Steps to Run Locally
1. Clone the repository:
   git clone (https://github.com/Precious-Sopitan/basic-information-api)
   cd basic-information-api
   
2. Install dependencies:
   npm install
   
4. Start the server:
   npm start
   
6. Open your browser and visit:
   http://localhost:3000/

## API Documentation
### Endpoint:
GET / - Fetches the API response.

### Response Format (200 OK)
json
{
  "email": "sopitanprecious1@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url: "https://github.com/Precious-Sopitan/basic-information-api"
}

### Deployed URL
This API is deployed on Render. This is the deployment url:
(https://basic-information-api-kfm2.onrender.com)

