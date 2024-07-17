import React, { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import CardModal from '../Modal/index';
import Restaurants from '../Restaurants';

const Main = ({ restaurants, locations }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    console.log('Opening modal with item:', item);
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('Selected item in Main:', selectedItem);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Restaurants
      </Typography>
      <Grid container spacing={4}>
        {restaurants.map((restaurant) => (
          <Restaurants key={restaurant.id} restaurant={restaurant} handleOpen={handleOpen} />
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Locations
      </Typography>
      <Grid container spacing={4}>
        {locations.map((location) => (
          <Grid item key={location.id} xs={12} sm={6} md={4}>
            <Card onClick={() => handleOpen(location)}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {location.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {location.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <CardModal open={open} handleClose={handleClose} selectedItem={selectedItem} />
    </Container>
  );
};

export default Main;
