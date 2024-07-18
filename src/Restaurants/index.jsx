import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Restaurants = ({ restaurant, handleOpen }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card onClick={() => handleOpen(restaurant)} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.description}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={'https://media.cntraveler.com/photos/5af219d49094c70140318c37/16:9/w_2580%2Cc_limit/Lark_Zack-Bent_2018_Lark_Interior2.jpg'}
            alt="restaurant image"
            sx={{ mt: 2 }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Restaurants;
