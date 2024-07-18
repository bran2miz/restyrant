import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Restaurants = ({ restaurant, handleOpen }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card onClick={() => handleOpen(restaurant)} style={{ height: '100%' }}>
        <CardContent>
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
            style={{ marginTop: '20px' }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Restaurants;
