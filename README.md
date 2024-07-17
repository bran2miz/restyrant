# RESTYrant

This project is a simple React application that displays a list of restaurants and locations, with the ability to click on an item to view more details in a modal. The application utilizes Material-UI for styling and layout.

## Features

- Display a list of restaurants and locations in a grid layout.
- Click on a restaurant or location to open a modal with more details.
- Conditionally display images for restaurants and locations in the modal.

## Technologies Used

- React
- Material-UI
- DjangoX

## Getting Started

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/restaurant-location-viewer.git
    cd restyrant
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Project Structure

    ```plaintext
    .
    ├── src
    │   ├── components
    │   │   ├── Main
    │   │   │   ├── index.jsx
    │   │   ├── Modal
    │   │   │   ├── index.jsx
    │   │   ├── Restaurants
    │   │   │   ├── index.jsx
    │   ├── App.jsx
    │   ├── index.js
    ├── public
    │   ├── index.html
    ├── package.json
    └── README.md
    ```

## License

This project is licensed under the MIT License.