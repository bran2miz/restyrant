import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        

      }}
    >
      <Typography variant="body1">© Brandon Mizutani</Typography>
    </Box>
  );
};

export default Footer;
