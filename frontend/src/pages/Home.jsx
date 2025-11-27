import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 60 }} />,
      title: 'Track Workouts',
      description: 'Log and manage your daily workouts with detailed information about duration, calories, and categories.',
      action: () => navigate('/workouts'),
      buttonText: 'View Workouts',
    },
    {
      icon: <CalculateIcon sx={{ fontSize: 60 }} />,
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index and get personalized health recommendations.',
      action: () => navigate('/bmi-calculator'),
      buttonText: 'Calculate BMI',
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 60 }} />,
      title: 'Monitor Progress',
      description: 'Keep track of your fitness journey with comprehensive workout history and statistics.',
      action: () => navigate('/workouts'),
      buttonText: 'Get Started',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Fitness Workout App
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your personal fitness companion to track workouts and monitor your health
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {feature.description}
                </Typography>
                <Button 
                  variant="contained" 
                  onClick={feature.action}
                  sx={{ mt: 2 }}
                >
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Start Your Fitness Journey Today
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Track your workouts, monitor your progress, and achieve your fitness goals with our easy-to-use platform.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/workouts')}
          sx={{ mt: 2 }}
        >
          Begin Tracking
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
