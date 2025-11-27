# Fitness Workout Web App

A full-stack web application for tracking fitness workouts and calculating BMI (Body Mass Index). Built with Node.js, Express, MongoDB, React, Vite, and Material-UI.

## Features

- **Workout Tracking**: Create, read, update, and delete workout records
- **BMI Calculator**: Calculate Body Mass Index with metric and imperial units
- **Workout Categories**: Organize workouts by type (Cardio, Strength, Flexibility, Balance, Sports)
- **Responsive Design**: Mobile-friendly interface with Material-UI components
- **Real-time Notifications**: Toast notifications for user feedback

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- RESTful API architecture

### Frontend
- React 18
- Vite (build tool)
- Material-UI (MUI)
- React Router DOM
- Axios
- React Toastify

## Project Structure

```
fitness-workout-webapp/
├── backend/
│   ├── controllers/
│   │   ├── workoutController.js
│   │   └── bmiController.js
│   ├── routes/
│   │   ├── workoutRoutes.js
│   │   └── bmiRoutes.js
│   ├── models/
│   │   └── Workout.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Workouts.jsx
│   │   │   ├── BmiCalculator.jsx
│   │   │   └── About.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── .env.example
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp ../.env.example .env
```

4. Configure your environment variables in `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/fitness-workout
```

For MongoDB Atlas:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fitness-workout?retryWrites=true&w=majority
```

5. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Workouts

- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get a single workout by ID
- `POST /api/workouts` - Create a new workout
- `PUT /api/workouts/:id` - Update a workout
- `DELETE /api/workouts/:id` - Delete a workout

### BMI Calculator

- `POST /api/bmi/calculate` - Calculate BMI

## Usage

1. **Home Page**: Overview of the app with quick navigation to main features

2. **Workouts Page**: 
   - View all your logged workouts
   - Add new workouts with title, description, duration, calories, category, and date
   - Edit existing workouts
   - Delete workouts

3. **BMI Calculator Page**:
   - Switch between metric (kg, cm) and imperial (lbs, inches) units
   - Enter weight and height
   - Get BMI value, category, and health recommendations

4. **About Page**: Information about the app and its features

## Workout Categories

- **Cardio**: Running, cycling, swimming, etc.
- **Strength**: Weightlifting, resistance training, etc.
- **Flexibility**: Yoga, stretching, etc.
- **Balance**: Pilates, stability exercises, etc.
- **Sports**: Team sports, individual sports, etc.

## BMI Categories

- **Underweight**: BMI < 18.5
- **Normal weight**: BMI 18.5 - 24.9
- **Overweight**: BMI 25 - 29.9
- **Obese**: BMI ≥ 30

## Development

### Backend Development
```bash
cd backend
npm run dev
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Build Frontend for Production
```bash
cd frontend
npm run build
```

## Database Schema

### Workout Model
```javascript
{
  title: String (required),
  description: String (required),
  duration: Number (required, in minutes),
  calories: Number (required),
  category: String (required, enum),
  date: Date (default: current date),
  timestamps: true
}
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/fitness-workout
```

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue in the project repository.
