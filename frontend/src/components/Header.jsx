// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <nav>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>
            Contact
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>
            Cart
          </Link>
        </nav>
        {/* <Button color="inherit" component={Link} to="/login" sx={{ marginLeft: 2 }}>
          Login
        </Button> */}
        <Button variant="outlined" color="inherit" component={Link} to="/login" sx={{ marginLeft: 2 }}>
          Login
        </Button>
        <Button variant="outlined" color="inherit" component={Link} to="/register" sx={{ marginLeft: 2 }}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
