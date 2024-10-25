// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Register from './components/Register'; 
import Login from './components/Login';
import { Box } from '@mui/material'; // Import Box from MUI

const App = () => {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh" // Ensure the full height of the viewport
      >
        <Header />
        <Box flex="1"> {/* This will expand to fill available space */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
