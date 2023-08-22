import { Box, Typography } from '@material-ui/core'
import React from 'react'
import '../../styles/Carrito.css'

function CartItem (producto) {

  return (
    <>
      <Box className='carrito' textAlign='center' role='presentation'>
        <img src={producto.thumbnail} alt={producto.title}></img>
        <Typography className='titulo'>{producto.title}</Typography>
        <Typography className='precio'>{parseInt(producto.price).toLocaleString()} ARS</Typography>
      </Box>
    </>
  )
}

export default CartItem;