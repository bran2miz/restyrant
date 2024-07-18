import React from 'react';
import { Container, Box, Typography, Avatar, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const backgroundImageStyle = {
  backgroundImage: 'url(https://img.freepik.com/premium-photo/table-restaurant-with-lights-background_867452-793.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '20px' // Optional: Add padding to make sure content doesn't touch edges
};

const AboutMe = () => {
  return (
    <div style={backgroundImageStyle}>
      <AppBar position="static" style={{ backgroundColor: '#4E342E', padding: "8px", marginBottom: "10px" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
            RESTyrant!
          </Typography>
          <Button color="inherit" component={Link} to="/" style={{ color: 'black' }}>
            HOME
          </Button>
          <Button color="inherit" component={Link} to="/about" style={{ color: 'black' }}>
            About Me
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', marginTop: '40px', color: 'black' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt="Brandon Mizutani"
            src="/profile.jpg"
            style={{ width: '150px', height: '150px', marginBottom: '20px' }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Brandon Mizutani
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Software Developer
          </Typography>
          <Typography variant="body1" paragraph>
            My name is Brandon Mizutani, and I am a dedicated software developer based in Seattle, WA, with a strong background in advanced software development. I hold a Certificate in Advanced Software Development in Python from Code Fellows and a Bachelor of Arts in Asian Pacific Studies from Loyola Marymount University. My expertise spans multiple languages and frameworks, including Python, JavaScript, React, and Django.
          </Typography>
          <Typography variant="body1" paragraph>
            I have worked on notable projects such as developing an e-commerce storefront using React and Redux, a Django-based To-Do App with a focus on secure login and task storage, and an e-commerce app named Insta Dealz. In my professional journey, I have significantly contributed as a Lead TA and Tutor at Code Fellows, where I assisted students with programming concepts and enhanced their technical proficiency.
          </Typography>
          <Typography variant="body1" paragraph>
            Passionate about coding, I continually apply my knowledge to develop innovative and efficient applications. I am committed to creating successful computer and mobile applications that meet the needs of users and drive technological advancement.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default AboutMe;
