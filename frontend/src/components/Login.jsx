import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import http from './axiosInstance'; 
import { ToastContainer, toast } from 'react-toastify'; 
import {  useNavigate } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); 
  const navigate = useNavigate(); 
  let timeoutID;

  useEffect(()=> {
    return () => {
      clearTimeout(timeoutID);
      // console.log('Timeout cleared');
    };
  }, [timeoutID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    const endpoint = role === 'doctor' ? '/doctor/login' : '/patient/login'; 

    try {
      const response = await http.post(endpoint, data); 
      console.log('Login successful');
      if(response){
        toast.success('Login successful !');
        localStorage.setItem('token', response.token)
        timeoutID = setTimeout(() => {
          navigate('/AvailableDoctors')  
        }, 1000);
      }

      // Here you can add logic to redirect the user or store the token, etc.
    } catch (error) {
      const errorMessage = 'Error: ' + (error.response?.data?.message || 'Unknown error');
      toast.error(errorMessage);
    }
  };

  const handleGmailLogin = () => {
    console.log("Logging in with Gmail...");
  };

  return (
    <>
        <Container maxWidth="xs" className="login-container" sx={{ my: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          p: 3,
          backgroundColor: 'white',
          boxShadow: 6,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2,
          }}
        >
          Login
        </Typography>

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Login as:</FormLabel>
          <RadioGroup
            row
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <FormControlLabel value="patient" control={<Radio />} label="Patient" />
            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
          </RadioGroup>
        </FormControl>

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: 2, boxShadow: 1 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ mb: 2, boxShadow: 1 }}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="#" onClick={() => alert('Forgot Password link clicked!')}>
            Forgot Password?
          </Link>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Button
          variant="outlined"
          color="primary"
          onClick={handleGmailLogin}
          fullWidth
        >
          Login with Gmail
        </Button>
      </Box>
    </Container>
    <ToastContainer />
    </>

  );
};

export default Login;
