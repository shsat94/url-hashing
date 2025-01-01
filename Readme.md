# URL Hashing

A **URL Hashing** application built using modern web technologies to efficiently shorten URLs and map them back to their original forms. This repository is designed to demonstrate the principles of URL hashing and provide a robust tool for URL shortening and redirection.

## Features

- Shorten long URLs into unique hash-based URLs.
- Retrieve the original URL from the hash.
- User-friendly interface for easy interaction.
- Backend support for secure and efficient URL storage.
- Fully functional API endpoints for URL creation and retrieval.

## Tech Stack

### Frontend
- **HTML/CSS**: Responsive and clean design.
- **Vanilla JavaScript**: Dynamic behavior for user interaction.
- **Live Server Extension**: Used for running the frontend locally in Visual Studio Code.

### Backend
- **Node.js**: Backend server for handling requests.
- **Express.js**: RESTful API development.
- **MongoDB**: NoSQL database for storing hashed URLs.
- **Mongoose**: ODM for MongoDB integration.

### Additional Tools
- **Postman**: API testing and validation.
- **dotenv**: Environment variable management.
- **nodemon**: Development server for hot reloading.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

```bash
git clone https://github.com/shsat94/url-hashing.git
cd url-hashing
```

2. **Install dependencies**

Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `backend` directory with the following keys:

```env
MONGOURI=<Your MongoDB Connection URI>
HOST=http://localhost:5000
```

4. **Run the application**

Open two terminal windows and run the following commands:

**Backend**:
```bash
cd backend
node index
```

**Frontend**:
Run the HTML file using the Live Server extension in Visual Studio Code.

5. **Access the application**

Visit `http://localhost:5500` (default Live Server port) in your browser.

## API Endpoints

### Base URL: `http://localhost:5000`

#### 1. Create a short URL
- **Endpoint**: `/api/shorten`
- **Method**: POST
- **Body**:
```json
{
  "originalUrl": "<Long URL to be shortened>"
}
```
- **Response**:
```json
{
  "shortUrl": "<Generated Short URL>"
}
```

#### 2. Retrieve original URL
- **Endpoint**: `/api/:hash`
- **Method**: GET
- **Response**:
```json
{
  "originalUrl": "<Original Long URL>"
}
```

## Project Structure

```
url-hashing
├── backend
│   ├── models
│   ├── routes
│   ├── index.js
│   └── .env
├── frontend
│   ├── index.html
│   ├── script.js
└── README.md
```

## Contributions

Contributions are welcome! If you find any issues or have feature suggestions, feel free to open a pull request or issue.

## Author

- **Satyarth Sharma**  
  - GitHub: [shsat94](https://github.com/shsat94)  
  - LinkedIn: [Satyarth Sharma](https://www.linkedin.com/in/satyarth-sharma/)
