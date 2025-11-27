import Workout from '../models/Workout.js';

// Get all workouts
export const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workouts', error: error.message });
  }
};

// Get single workout by ID
export const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workout', error: error.message });
  }
};

// Create new workout
export const createWorkout = async (req, res) => {
  try {
    const { title, description, duration, calories, category, date } = req.body;

    if (!title || !description || !duration || !calories || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const workout = new Workout({
      title,
      description,
      duration,
      calories,
      category,
      date: date || Date.now(),
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: 'Error creating workout', error: error.message });
  }
};

// Update workout
export const updateWorkout = async (req, res) => {
  try {
    const { title, description, duration, calories, category, date } = req.body;

    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    workout.title = title || workout.title;
    workout.description = description || workout.description;
    workout.duration = duration || workout.duration;
    workout.calories = calories || workout.calories;
    workout.category = category || workout.category;
    workout.date = date || workout.date;

    const updatedWorkout = await workout.save();
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ message: 'Error updating workout', error: error.message });
  }
};

// Delete workout
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    await Workout.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting workout', error: error.message });
  }
};
