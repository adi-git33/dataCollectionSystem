# Data Collection System

A React-based web application designed to conduct user experiments, collecting data on user interactions, reaction times, and decision-making processes.

## Getting Started

### Prerequisites
- Node.js (v20 or higher recommended)
- npm or yarn
- Docker (optional, for containerized deployment)

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adi-git33/dataCollectionSystem.git
    cd dataCollectionSystem
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

### Building and Running with Docker

This project uses a multi-stage Docker build to create a lightweight production image served by Nginx.

1.  **Build and start the container:**
    ```bash
    docker-compose up --build -d
    ```

2.  **Access the application:**
    Open your browser and navigate to `http://localhost:5173`.

3.  **Stop the container:**
    ```bash
    docker-compose down
    ```

## Architecture & Design Decisions

### Tech Stack
- **Framework:** React (with TypeScript) + Vite
- **UI Library:** Material UI (MUI) + Emotion
- **State Management:** Zustand
- **Routing:** React Router DOM
- **HTTP Client:** Axios

### Key Design Decisions

#### 1. State Management Strategy (Zustand)
The application state is split into two distinct stores to separate concerns:
- **`useActiveSessionStore`**: Manages the *transient* state of the currently running experiment. It handles high-frequency updates (like click tracking) and resets automatically when an experiment concludes or is cancelled.
- **`useHistoryStore`**: Manages the *persisted* state of completed experiments. It utilizes Zustand's `persist` middleware to save data to `localStorage`, ensuring data survives page reloads.

#### 2. Component Architecture
The project follows a modular structure:
- **`pages/`**: High-level views (Home, NewExperiment, Results) that compose smaller components.
- **`components/`**: Reusable UI elements (Dialogs, Steppers, Buttons).
- **`api/`**: Isolated API logic (e.g., fetching random words) to keep components clean.

#### 3. Docker Multi-Stage Build
To ensure a production-ready deployment:
- **Stage 1 (Build):** Uses a Node.js image to compile the TypeScript/React code into static assets.
- **Stage 2 (Serve):** Uses a lightweight Nginx image to serve the static files.
- **Nginx Configuration:** A custom `nginx.conf` is included to handle Single Page Application (SPA) routing, ensuring that refreshing pages on non-root paths (e.g., `/new-experiment`) does not result in 404 errors.

#### 4. Data Collection Logic
- **Global Click Tracking:** The `NewExperimentPage` implements a global click listener to capture the very first interaction on the page, ensuring accurate "time-to-first-action" metrics even if the user clicks on non-interactive elements first.
- **Timestamping:** All events are recorded using ISO strings (UTC) to ensure consistency across different time zones.
