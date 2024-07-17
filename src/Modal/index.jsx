import React from 'react';
import { Modal, Box, Typography, CardMedia } from '@mui/material';

const CardModal = ({ open, handleClose, selectedItem }) => {
  console.log('Selected item in Modal:', selectedItem);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color:'black',
    p: 4,
  };

  const restaurantImage = 'https://media.cntraveler.com/photos/5af219d49094c70140318c37/16:9/w_2580%2Cc_limit/Lark_Zack-Bent_2018_Lark_Interior2.jpg';
  const locationImage = 'https://sph.washington.edu/sites/default/files/inline-images/Seattle-Rainier%201200x600_0.jpg';

  const getImage = () => {
    if (selectedItem) {
      if (selectedItem.name) {
        return restaurantImage;
      } else if (selectedItem.location) {
        return locationImage;
      }
    }
    return null;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {selectedItem ? (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedItem.name || selectedItem.location}
            </Typography>
            <CardMedia
              component="img"
              height="200"
              image={getImage()}
              alt={selectedItem.name || selectedItem.location}
              sx={{ mt: 2 }}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedItem.description}
            </Typography>
          </>
        ) : (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            No item selected.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default CardModal;
