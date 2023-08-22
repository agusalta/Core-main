import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Box, Button, Container, Snackbar, Typography } from '@mui/material';
import '../styles/Register.css'
import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Register() {
    const { registrarUsuario } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      
      try {
        const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

        // User registration successful
        if(userCredentials.user.uid){
          const nombreCompleto = event.target.elements.firstName.value + ' ' + event.target.elements.lastName.value;

          await registrarUsuario(nombreCompleto, email.value);

          setSuccess(true);

          setTimeout(() => {
            navigate('/login')
          }, 2000)
        }

      } catch (error) {
        setError(error.message);
      }
    };

    return (
        <Container maxWidth="xs">
            <Box 
            onSubmit={handleSubmit}
            component='form'
            sx={{
            marginTop: 9.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
            >

            <Typography sx={{m: 1, color: 'black' }} component="h1" variant="h5">
                Registrarse
            </Typography>

            {error && 
            <Snackbar open={true} onClose={() => setError('')} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>      
                <Alert severity="error" onClose={() => setError('')}>
                   <AlertTitle>Error</AlertTitle> 
                   <strong>{error}</strong>
                </Alert>
            </Snackbar>}

            {success &&
            <Snackbar open={true} onClose={() => setSuccess(false)} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success" variant='filled' onClose={() => setSuccess(false)}>
                Te has registrado correctamente
                </Alert>
            </Snackbar>
            }

            <TextField
            id='firstName'
            label="First Name"
            type="text"
            name="firstName"
            sx={{m: 1}}
            fullWidth
            required
            /> 

            <TextField
            id='lastName'
            label="Last Name"
            type="text"
            name="lastName"
            sx={{m: 1}}
            fullWidth
            required
            />

            <TextField
            label="Email"
            type="email"
            name="email"
            required
            fullWidth
            sx={{m: 1}}
            >
            </TextField>

            <TextField
            label="Password"
            type="password"
            name="password"
            required
            fullWidth
            sx={{m: 1}}
            /> 
        
            <Button 
            className='btnRegister' 
            sx={{m: 3, background: 'black'}} 
            fullWidth 
            type="submit" 
            variant="contained" 
            color='secondary'
            >
            Registrarse
            </Button>

        </Box>
      </Container>
    )
}

export default Register