import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  Divider,
} from '@mui/material';
import { toast } from 'react-toastify';
import { bmiAPI } from '../services/api';

function BmiCalculator() {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleUnitChange = (event, newUnit) => {
    if (newUnit !== null) {
      setUnit(newUnit);
      setWeight('');
      setHeight('');
      setResult(null);
    }
  };

  const handleCalculate = async () => {
    if (!weight || !height) {
      toast.error('Please enter both weight and height');
      return;
    }

    if (parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
      toast.error('Please enter valid positive values');
      return;
    }

    try {
      const response = await bmiAPI.calculate({
        weight: parseFloat(weight),
        height: parseFloat(height),
        unit,
      });
      setResult(response.data);
      toast.success('BMI calculated successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to calculate BMI');
    }
  };

  const getBMIColor = (category) => {
    const colors = {
      'Underweight': '#3498db',
      'Normal weight': '#2ecc71',
      'Overweight': '#f39c12',
      'Obese': '#e74c3c',
    };
    return colors[category] || '#95a5a6';
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        BMI Calculator
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph align="center">
        Calculate your Body Mass Index and get health recommendations
      </Typography>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <ToggleButtonGroup
              value={unit}
              exclusive
              onChange={handleUnitChange}
              aria-label="unit system"
            >
              <ToggleButton value="metric" aria-label="metric">
                Metric (kg, cm)
              </ToggleButton>
              <ToggleButton value="imperial" aria-label="imperial">
                Imperial (lbs, in)
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                fullWidth
                inputProps={{ step: '0.1', min: '0' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                fullWidth
                inputProps={{ step: '0.1', min: '0' }}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleCalculate}
            >
              Calculate BMI
            </Button>
          </Box>
        </CardContent>
      </Card>

      {result && (
        <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
          <Typography variant="h5" gutterBottom align="center">
            Your Results
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h2" sx={{ color: getBMIColor(result.category), fontWeight: 'bold' }}>
              {result.bmi}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: getBMIColor(result.category) }}>
              {result.category}
            </Typography>
          </Box>

          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="body1" paragraph>
              <strong>Recommendation:</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result.recommendation}
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>BMI Categories:</strong>
            </Typography>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, bgcolor: '#3498db', color: 'white', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption">Underweight</Typography>
                  <Typography variant="body2">&lt; 18.5</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, bgcolor: '#2ecc71', color: 'white', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption">Normal</Typography>
                  <Typography variant="body2">18.5 - 24.9</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, bgcolor: '#f39c12', color: 'white', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption">Overweight</Typography>
                  <Typography variant="body2">25 - 29.9</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1, bgcolor: '#e74c3c', color: 'white', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption">Obese</Typography>
                  <Typography variant="body2">&ge; 30</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      )}
    </Container>
  );
}

export default BmiCalculator;
