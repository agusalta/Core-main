import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import '../styles/Datos.css';
import { Box } from '@material-ui/core';
import { useAuth } from '../context/AuthContext';
import { db } from "../config/firebase";

function Datos() {
  const { email , handleData } = useAuth();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchNombreCompleto = async () => {
      const nombre = handleData(email);
      setNombreCompleto(nombre);
    };

    fetchNombreCompleto();
  }, [email, handleData]);

  useEffect(() => {
    const fetchUserData = async () => {
      const usersCollectionRef = collection(db, "users");
      const q = query(usersCollectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const user = querySnapshot.docs[0].data();
        setUserData(user);
      }
    };

    fetchUserData();
  }, [email]);

  return (
    <Box className='profile'>

      <Box className='mi-cuenta'>
        <h4>Mi cuenta</h4>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card className='card'>
            <CardContent>
              <Typography variant='h5' component='div'>
                Información del cliente
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Nombre: <strong>{nombreCompleto}</strong>
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Mail: <strong>{email}</strong>
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                DNI: 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className='card'>
            <CardContent>
              <Typography variant='h5' component='div'>
                Dirección del cliente
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Calle: 
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Altura: 
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Correo Postal: 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className='card'>
            <CardContent>
              <Typography variant='h5' component='div'>
                Detalles de la compra
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Producto: 
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Cantidad: 
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Precio: 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Datos;
