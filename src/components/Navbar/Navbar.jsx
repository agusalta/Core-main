import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, Tab, Button, useMediaQuery, useTheme, Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { Container, Box } from '@mui/material';
import DrawerComponent from './Drawer/DrawerComponent';
import { Link } from 'react-router-dom';
import Core from './CoreNegroSx.png';
import { useAuth } from '../../context/AuthContext';
import { useContext } from 'react';
//import firebase from '../../config/firebase';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Cart from '../Cart/Cart';
import { CartContext } from '../../context/CartContext';

function Navbar() {
  const theme = useTheme();
  const { getNombreCompleto, login, handleLogout } = useAuth()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();
  const [color, setColor] = useState(false);
  // nombre de usuario - avatar
  const userName = getNombreCompleto() || 'Usuario';
  const firstLetter = userName.charAt(0).toUpperCase();
  // abrir carrito de compras
  const { cartOpen, handleCartClose, handleCartOpen, cart, handleLength } = useContext(CartContext);

  // cuando el navbar scrollee...
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <Container component='div' sx={{ flexGrow: 1 }} width='100%'>
      <AppBar
        className='navbar'
        position='fixed'
        sx={{
          boxShadow: color ? '1px' : 'none',
          padding: '20px',
          background: color ? 'white' : 'transparent'
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
            
              <Tabs
                textColor='black'
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor='secondary'
              >
                <Link to='/'>
                  <img src={Core} alt='' />
                </Link>

                <Tab
                  sx={{ color: 'black', paddingRight: '3em', paddingLeft: '3em', fontWeight: 'bold' }}
                  label='Home'
                  component={Link}
                  to='/'
                />
                <Tab
                  sx={{ color: 'black', paddingRight: '3em', paddingLeft: '3em', fontWeight: 'bold' }}
                  label='Productos'
                  component={Link}
                  to='/productos'
                />
                <Tab
                  sx={{ color: 'black', paddingRight: '3em', paddingLeft: '3em', fontWeight: 'bold' }}
                  label='About'
                  component={Link}
                  to='/about'
                />|
                                <Tab
                  sx={{ color: 'black', paddingRight: '3em', paddingLeft: '3em', fontWeight: 'bold' }}
                  label='Contacto'
                  component={Link}
                  to='/contacto'
                />
              </Tabs>

              {!login && (
                <Button
                  sx={{
                    marginLeft: 'auto',
                    background: 'black',
                    color: 'white'
                  }}
                  size='large'
                  href='/login'
                  variant='contained'
                  color='secondary'
                >
                  Iniciar Sesión
                </Button>
              )}

              {login && (
                <>
                  <Button
                    sx={{
                      marginLeft: 'auto',
                      background: 'black',
                      color: 'white',
                    }}
                    size='large'
                    onClick={() => handleLogout()}
                    variant='contained'
                    color='secondary'
                    href='/login'
                  >
                    Cerrar Sesión
                  </Button>

                  <Link to='/datos' className='link-avatar'>
                    <Avatar
                      variant='round'
                      sx={{
                        marginLeft: '20px',
                        background: 'black',
                        color: 'white'
                      }}
                    >
                      {firstLetter}
                    </Avatar>
                  </Link>

                  <Button onClick={handleCartOpen}>
                    <ShoppingBagIcon
                      fontSize='large'
                      sx={{
                        marginLeft: '5px',
                        color: 'black'
                      }}
                    />

                    <Box
                      component='div'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'purple',
                        color: 'white',
                        fontWeight: 'bold',
                        position: 'absolute',
                        bottom: '-2px',
                        right: '6px'
                      }}
                    >
                      <Typography variant='body1'>{handleLength(cart)}</Typography>
                    </Box>

                  </Button>

                  <Cart open={cartOpen} onClose={handleCartClose} />
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
