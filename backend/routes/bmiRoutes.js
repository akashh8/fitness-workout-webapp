import express from 'express';
import { calculateBMI } from '../controllers/bmiController.js';

const router = express.Router();

// POST calculate BMI
router.post('/calculate', calculateBMI);

export default router;
