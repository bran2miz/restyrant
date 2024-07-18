import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

const RestaurantModal = ({ open, handleClose, handleSubmit, handleChange, newRestaurant }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="restaurant-modal-title"
      aria-describedby="restaurant-modal-description"
    >
      <Box sx={{ width: 400, margin: 'auto', mt: '10%', p: 4, backgroundColor: 'white', borderRadius: 2, color: 'black' }}>
        <Typography id="restaurant-modal-title" variant="h6" component="h2">
          Add New Restaurant
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={newRestaurant.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={newRestaurant.description}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Restaurant
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default RestaurantModal;
