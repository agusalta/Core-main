import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import '../../styles/Carrito.css'
import { useCart } from '../../context/useCart'

function CartItem (producto) {
  const { handleQuantity, addToCart, removeOne } = useCart();

  return (
    <>
      <Box className='carrito' textAlign='center' role='presentation'>
        <img src={producto.thumbnail} alt={producto.title}></img>
        <Typography className='titulo'>{producto.title}</Typography>
        <Typography className='precio'>{parseInt(producto.price).toLocaleString()} ARS</Typography>
        <Typography>Cantidad: {handleQuantity(producto.id)}</Typography>
        <Button variant="contained" color="secondary" onClick={() => addToCart(producto)}>Agregar</Button>
        <Button variant="contained" color="secondary" onClick={() => removeOne(producto)}>Eliminar</Button>
      </Box>
    </>
  )
}

export default CartItem;