import { Box, Container  } from '@material-ui/core';
import { Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <Box component='div' className='footer'>
      <Grid container maxWidth='lg' textAlign='center' >
        <Grid item xs={12} sm={4} sx={{paddingBottom: {xs: '40px'}}}>
          <LocalShippingIcon fontSize='large' />
          <p>ENVIAMOS TU COMPRA</p>
          <Typography>Entregas a todo el país</Typography>
        </Grid>
        <Grid item xs={12} sm={4} 
          sx={{ 
          borderLeft: {sm: '1px solid black', xs: 'none'}, 
          borderRight: {sm: '1px solid black', xs: 'none'},
          paddingBottom: {xs: '40px'}
          }}
        >
          <CreditCardIcon  fontSize='large'/>
          <p>PAGÁ COMO QUIERAS</p>
          <Typography>Tarjetas de crédito o efectivo</Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{paddingBottom: {xs: '40px'}}}>
          <LockIcon fontSize='large'/>
          <p>COMPRÁ CON SEGURIDAD</p>
          <Typography>Tus datos siempre protegidos</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer;