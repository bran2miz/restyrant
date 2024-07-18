import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Locations = ({ location, handleOpen }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card onClick={() => handleOpen(location)} style={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {location.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.description}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={'https://sph.washington.edu/sites/default/files/inline-images/Seattle-Rainier%201200x600_0.jpg'}
            alt="location image"
            style={{ marginTop: '20px' }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Locations;
