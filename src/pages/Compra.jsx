import React from 'react';
import '../styles/Compra.css';
import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import { useCart } from '../context/useCart';
import CartCompra from '../components/Cart/CartCompra';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';


function Compra() {
  const { cart, handleTotal, handleLength, removeOne, handleQuantity, addToCart} = useCart(); 

  return (
    <Box className='compra-container'>

      <TableContainer className='compra-body'>
        <Table container spacing={3} >
          {cart.map((producto) => (
            <TableRow item key={producto.id} xs={12} sm={6} md={4} lg={3}>
              <TableCell><CartCompra {...producto} /></TableCell>
              <TableRow><p>Cantidad: {handleQuantity(producto.id)}</p></TableRow>
              <TableRow><Button onClick={() => addToCart(producto) }>Agregar</Button></TableRow>
              <TableRow><Button onClick={() => removeOne(producto)}>Eliminar</Button></TableRow>
            
            </TableRow>
          ))}

            <Box className='cantidad-productos'>
              <TableRow>  
                <p variant="body1"> <span>Cantidad de productos: </span> {handleLength(cart)}</p>      
              </TableRow>

              <TableRow>
                <p variant="body1">{handleTotal(cart)}</p> 
              </TableRow>
            </Box>


          </Table>
      </TableContainer>

 

      <Box className='compra-body'>
        <Grid container spacing={10} className='compra-container'>
          <Grid item xs={12} md={6}>
            <h6>
              ¿Cómo querés recibir o retirar tu compra?
            </h6>
            <Button variant="contained" className='boton-compra'>
              Continuar
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Envio a domicilio"  />
              <FormControlLabel value="male" control={<Radio />} label="Domicilio del vendedor" />
              <FormControlLabel value="other" control={<Radio />} label="Retiro en correo y otros puntos" />
            </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
      </Box>
        
    </Box>
  );
}

export default Compra;
