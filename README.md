# Tech Talk Event Website

This project is a simple website for a 1-day tech talk event. It serves static frontend content and provides an API endpoint to retrieve talk details.

## Features

-   Serves static HTML, CSS, and JavaScript files for the event frontend.
-   Provides a `/api/talks` endpoint to fetch event talk data from a `talks.json` file.
-   Built with Express.js for the backend.

## Technologies Used

-   Node.js
-   Express.js
-   HTML5
-   CSS3
-   JavaScript

## Installation

To set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/blasiusneri/gemini-event-talks-app.git
    cd gemini-event-talks-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

To run the application locally:

```bash
npm start
```

The server will start on `http://localhost:3000` (or a port specified by the `PORT` environment variable).

## API Endpoints

### `GET /api/talks`

Returns a JSON array of talk details.

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Introduction to Gemini CLI",
    "speaker": "AI Assistant",
    "time": "10:00 AM",
    "description": "An overview of the Gemini Command Line Interface and its capabilities."
  },
  {
    "id": 2,
    "title": "Deploying with Cloud Run",
    "speaker": "Cloud Expert",
    "time": "11:00 AM",
    "description": "A guide to deploying applications to Google Cloud Run."
  }
]
```
*(Note: The actual content of `talks.json` will dictate the response.)*

## Project Structure

```
.
├───.git/
├───node_modules/
├───public/
│   ├───index.html
│   ├───script.js
│   └───style.css
├───.gitignore
├───index.js         (Express.js server)
├───package-lock.json
├───package.json
└───talks.json       (Data for API)
```

## Deployment

This application is suitable for deployment on platforms like Google Cloud Run, given its web server architecture and use of the `PORT` environment variable.

---
