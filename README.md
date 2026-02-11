# Tech Talk Event Schedule

A simple web application to display the schedule for a one-day tech talk event.

## Features

*   **Dynamic Schedule:** The event schedule is dynamically generated from a JSON data source.
*   **Search by Category:** Users can filter the schedule by talk category in real-time.
*   **Lunch Break:** A lunch break is automatically included in the schedule.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory:
    ```bash
    cd KataMutiara
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the server, run the following command:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

*   `index.js`: The main server file, built with Node.js and Express. It serves the static files and the talk data.
*   `talks.json`: The JSON file containing the data for all the tech talks.
*   `public/`: The directory containing all the client-side files.
    *   `index.html`: The main HTML file for the application.
    *   `script.js`: The client-side JavaScript that fetches data, renders the schedule, and handles user interactions.
    *   `style.css`: The stylesheet for the application.

## API Endpoints

### GET /api/talks

*   **Description:** Retrieves the list of all tech talks.
*   **Response:** A JSON array of talk objects.
*   **Example Response:**
    ```json
    [
      {
        "title": "The Future of Artificial Intelligence",
        "speakers": ["Dr. Evelyn Reed"],
        "category": ["AI", "Machine Learning"],
        "duration": 60,
        "description": "A deep dive into the latest advancements in AI and what to expect in the coming years."
      }
    ]
    ```