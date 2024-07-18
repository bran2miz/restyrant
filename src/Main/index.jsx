import React, { useState } from 'react';
import { Typography, Container, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardModal from '../Modal/index';
import Restaurants from '../Restaurants/index';
import Locations from '../Locations/index';
import Header from '../Header/index';
import Footer from '../Footer/index';
import RestaurantModal from '../RestaurantModal/index';

const Main = ({ restaurants, locations,handleOpen,handleClose, open, selectedItem, newRestaurant, modalType, handleSubmit, handleChange }) => {

  const backgroundImageStyle = {
    backgroundImage: 'url(https://img.freepik.com/premium-photo/table-restaurant-with-lights-background_867452-793.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Header handleOpen={handleOpen} />
        <Grid container spacing={4} direction="column">
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">Restaurants</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={4}>
                  {restaurants.map((restaurant) => (
                    <Restaurants key={restaurant.id} restaurant={restaurant} handleOpen={handleOpen} />
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">Locations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={4}>
                  {locations.map((location) => (
                    <Locations key={location.id} location={location} handleOpen={handleOpen} />
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        {modalType === 'card' && <CardModal open={open} handleClose={handleClose} selectedItem={selectedItem} />}
        {modalType === 'restaurant' && (
          <RestaurantModal 
            open={open} 
            handleClose={handleClose} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            newRestaurant={newRestaurant} 
          />
        )}
        <Footer />
      </Container>
    </div>
  );
};

export default Main;

