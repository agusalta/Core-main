import { Drawer } from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem';
import '../../styles/Carrito.css'
import { useCart } from '../../context/useCart';
import { Button, Typography } from '@mui/material';

function Cart({open, onClose}) {
  const { cart, addToCart, clearCart, handleTotal } = useCart()

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
      sx={{
        position: 'relative', // Establecer posición relativa para el Drawer
        height: '100vh', // Establecer altura al 100% de la ventana
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Alinear los elementos en la parte superior e inferior
      }}
    >
      
      {cart.map(producto => (
        <CartItem
          key={producto.id}
          addToCart={() => handleAddToCart(producto)}
          clearCart={clearCart}
          {...producto}
        />
      ))}

      <Typography 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          fontWeight: 'bold',
          width: '100%', 
          textAlign: 'center',
          fontSize: 'larger'
        }}
        >
        {handleTotal(cart)} 
      </Typography>
    
      <Button 
        className='comprar'
        variant='contained' 
        color="secondary"
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
        href='/compra'
      >
        Comprar
      </Button>

    </Drawer>
  )
}

export default Cart;