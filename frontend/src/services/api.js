import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Workout API calls
export const workoutAPI = {
  getAll: () => axios.get(`${API_URL}/workouts`),
  getById: (id) => axios.get(`${API_URL}/workouts/${id}`),
  create: (workoutData) => axios.post(`${API_URL}/workouts`, workoutData),
  update: (id, workoutData) => axios.put(`${API_URL}/workouts/${id}`, workoutData),
  delete: (id) => axios.delete(`${API_URL}/workouts/${id}`),
};

// BMI API calls
export const bmiAPI = {
  calculate: (data) => axios.post(`${API_URL}/bmi/calculate`, data),
};
