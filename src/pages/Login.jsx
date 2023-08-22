import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../styles/Login.css'
import firebase from '../config/firebase';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { AuthContext, useAuth } from '../context/AuthContext';
import { useContext } from 'react';

function Login() {
  const { handleEmail } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const context = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (userCredential.user.uid) {
        handleEmail(email)

        // Almacenar la URL previa en el LocalStorage
        const prevPath = localStorage.getItem('prevPath') || '/';
        localStorage.setItem('prevPath', prevPath);
        localStorage.removeItem('prevPath');
        
        context.handleLogin();
        navigate(prevPath); // Redireccionar al usuario a la página previa
      };
      // Si la autenticación es exitosa, actualiza el estado de autenticación
      // o almacena el token de acceso en el almacenamiento local del navegador.
    } catch (error) {
      setError(error.message);
    }}


  return (
    <Container maxWidth="xs">
      <CssBaseline />
        <Box sx={{ marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'black' }}> <LockOutlinedIcon /> </Avatar>

          <Typography component="h1" variant="h5" sx={{m: 2, color: 'black' }}> Login </Typography>

          {error && 
            <Alert severity='error' variant='standard'> {error} </Alert>
          }
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              label="Email"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> 
        
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> 

            <FormControlLabel
              control={
                <Checkbox 
                value="rememberMe" 
                color="primary" 
            />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: 'black' }}
              color='secondary'
            > Sign In </Button>

            <Grid container >
              <Grid item xs={6}>
                <Button sx={{color: 'black'}} component={Link} to="#"> Forgot password? </Button>
              </Grid>
              <Grid item xs={6}>
                <Button sx={{color: 'black'}} component={Link} to='/register'> {"Don't have an account? Sign Up"} </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
  );
}

export default Login;