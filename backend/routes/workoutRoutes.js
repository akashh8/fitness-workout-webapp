import express from 'express';
import {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workoutController.js';

const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);

// GET single workout by ID
router.get('/:id', getWorkoutById);

// POST create new workout
router.post('/', createWorkout);

// PUT update workout
router.put('/:id', updateWorkout);

// DELETE workout
router.delete('/:id', deleteWorkout);

export default router;
