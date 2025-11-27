// Calculate BMI
export const calculateBMI = (req, res) => {
  try {
    const { weight, height, unit } = req.body;

    if (!weight || !height) {
      return res.status(400).json({ message: 'Weight and height are required' });
    }

    let bmi;
    if (unit === 'imperial') {
      // For imperial: weight in pounds, height in inches
      // BMI = (weight / (height * height)) * 703
      bmi = (weight / (height * height)) * 703;
    } else {
      // For metric: weight in kg, height in cm
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    }

    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;

    // Determine BMI category
    let category;
    let recommendation;

    if (bmi < 18.5) {
      category = 'Underweight';
      recommendation = 'Consider a balanced diet with nutrient-rich foods to reach a healthy weight.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      recommendation = 'Great! Maintain your healthy weight with regular exercise and balanced nutrition.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      recommendation = 'Consider increasing physical activity and following a balanced diet.';
    } else {
      category = 'Obese';
      recommendation = 'Consult with a healthcare professional for personalized weight management advice.';
    }

    res.status(200).json({
      bmi,
      category,
      recommendation,
      weight,
      height,
      unit: unit || 'metric',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating BMI', error: error.message });
  }
};
