import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '/1.png'; 

const Header = ({ handleOpen }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#8F6E5D', padding: "8px", marginBottom: "10px" }}>
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={Logo} alt="RESTyrant Logo" style={{ height: '100px', marginRight: '10px' }} />
          </Link>
        </Box>
        <Button color="inherit" component={Link} to="/about" style={{ color: 'black' }}>
          About Me
        </Button>
        <Button color="inherit" onClick={() => handleOpen('restaurant')} style={{ color: 'black' }}>
          Add a Restaurant
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


