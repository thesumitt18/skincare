import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';

const AvailableDoctors = ({ serialNumber, profilePic, name, specialization, rating, age, location }) => {
  return (
    <Box sx={{ p: 2, width: '100vw' }}>
      {/* Buttons aligned to the left */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
        <Button variant="contained" color="primary" sx={{ mr: 1 }}>
          Doctors
        </Button>
        <Button variant="contained" color="primary">
          Available Doctors
        </Button>
      </Box>

      {/* Card with serial number before the image */}
      <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 3, width: '100%' }}>
        <Typography variant="h6" component="div" sx={{ mr: 2, color: 'black' }}>
          #{serialNumber}
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: 140, height: 140 }}
          image={profilePic}
          alt={`${name}'s profile`}
        />
        <CardContent>
          <Typography variant="h6" component="div" sx={{ mb: 1, color: 'black' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="black">
            Specialization: {specialization}
          </Typography>
          <Typography variant="body2" color="black">
            Rating: {rating}
          </Typography>
          <Typography variant="body2" color="black">
            Age: {age}
          </Typography>
          <Typography variant="body2" color="black">
            Location: {location}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default AvailableDoctors;