import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
  Chip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { workoutAPI } from '../services/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    calories: '',
    category: 'Cardio',
    date: new Date().toISOString().split('T')[0],
  });

  const categories = ['Cardio', 'Strength', 'Flexibility', 'Balance', 'Sports'];

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await workoutAPI.getAll();
      setWorkouts(response.data);
    } catch (error) {
      toast.error('Failed to fetch workouts');
    }
  };

  const handleOpenDialog = (workout = null) => {
    if (workout) {
      setEditMode(true);
      setCurrentWorkout(workout);
      setFormData({
        title: workout.title,
        description: workout.description,
        duration: workout.duration,
        calories: workout.calories,
        category: workout.category,
        date: new Date(workout.date).toISOString().split('T')[0],
      });
    } else {
      setEditMode(false);
      setCurrentWorkout(null);
      setFormData({
        title: '',
        description: '',
        duration: '',
        calories: '',
        category: 'Cardio',
        date: new Date().toISOString().split('T')[0],
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditMode(false);
    setCurrentWorkout(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (editMode) {
        await workoutAPI.update(currentWorkout._id, formData);
        toast.success('Workout updated successfully');
      } else {
        await workoutAPI.create(formData);
        toast.success('Workout created successfully');
      }
      fetchWorkouts();
      handleCloseDialog();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save workout');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      try {
        await workoutAPI.delete(id);
        toast.success('Workout deleted successfully');
        fetchWorkouts();
      } catch (error) {
        toast.error('Failed to delete workout');
      }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Cardio: 'error',
      Strength: 'primary',
      Flexibility: 'success',
      Balance: 'warning',
      Sports: 'info',
    };
    return colors[category] || 'default';
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Workouts
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Workout
        </Button>
      </Box>

      {workouts.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" color="text.secondary">
            No workouts yet. Start by adding your first workout!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {workouts.map((workout) => (
            <Grid item xs={12} sm={6} md={4} key={workout._id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                    <Typography variant="h6" component="h2">
                      {workout.title}
                    </Typography>
                    <Chip
                      label={workout.category}
                      color={getCategoryColor(workout.category)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {workout.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">
                      <strong>Duration:</strong> {workout.duration} minutes
                    </Typography>
                    <Typography variant="body2">
                      <strong>Calories:</strong> {workout.calories} kcal
                    </Typography>
                    <Typography variant="body2">
                      <strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(workout)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(workout._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editMode ? 'Edit Workout' : 'Add New Workout'}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              name="duration"
              label="Duration (minutes)"
              type="number"
              value={formData.duration}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              name="calories"
              label="Calories Burned"
              type="number"
              value={formData.calories}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              name="category"
              label="Category"
              select
              value={formData.category}
              onChange={handleInputChange}
              required
              fullWidth
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="date"
              label="Date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editMode ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Workouts;
