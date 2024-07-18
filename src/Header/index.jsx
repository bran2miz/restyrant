import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ handleOpen }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4E342E', padding: "8px", marginBottom: "10px" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
          RESTyrant!
        </Typography>
        <Button color="inherit" onClick={() => handleOpen('restaurant')} style={{ color: 'black' }}>
          Add a Restaurant
        </Button>
        <Button color="inherit" component={Link} to="/about" style={{ color: 'black' }}>
          About Me
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

