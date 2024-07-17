import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Restaurants = ({ restaurant, handleOpen }) => {
  return (
    <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
      <Card onClick={() => handleOpen(restaurant)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Restaurants;
