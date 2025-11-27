import { Container, Typography, Box, Paper, Grid, Divider } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Fitness Workout App
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your comprehensive fitness tracking solution
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          The Fitness Workout App is designed to help you take control of your fitness journey. 
          Whether you're a beginner or an experienced athlete, our platform provides the tools 
          you need to track your workouts, monitor your progress, and achieve your health goals.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe that tracking your fitness activities is the first step towards a healthier 
          lifestyle. Our app makes it easy to log your workouts, calculate important health metrics 
          like BMI, and visualize your progress over time.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Key Features
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <FitnessCenterIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Workout Tracking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Log and manage your daily workouts with detailed information about duration, 
              calories burned, and exercise categories.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <CalculateIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              BMI Calculator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calculate your Body Mass Index using both metric and imperial units, 
              with personalized health recommendations.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <TrendingUpIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Progress Monitoring
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Keep track of your fitness journey with comprehensive workout history 
              and performance statistics.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <HealthAndSafetyIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Health Insights
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get valuable insights about your health and fitness levels based on 
              your workout data and BMI metrics.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Technology Stack
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Frontend
            </Typography>
            <Typography variant="body2" paragraph>
              • React - Modern UI library for building interactive interfaces
            </Typography>
            <Typography variant="body2" paragraph>
              • Material-UI - Beautiful, responsive component library
            </Typography>
            <Typography variant="body2" paragraph>
              • Vite - Fast build tool and development server
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Backend
            </Typography>
            <Typography variant="body2" paragraph>
              • Node.js - JavaScript runtime environment
            </Typography>
            <Typography variant="body2" paragraph>
              • Express - Fast, minimalist web framework
            </Typography>
            <Typography variant="body2" paragraph>
              • MongoDB - Flexible NoSQL database for storing workout data
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Built with ❤️ for fitness enthusiasts
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
