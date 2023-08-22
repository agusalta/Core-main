import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Core from '../CoreNegroMd.png';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { login, handleLogout } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {!login && (
          <List>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/'>
                HOME
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/productos'>
                PRODUCTOS
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/login'>
                INICIAR SESIÓN
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/register'>
                REGISTRARSE
              </Button>
            </ListItemButton>
          </List>
        )}

        {login && (
          <List>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/'>
                HOME
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button sx={{ color: 'black' }} component={Link} to='/productos'>
                PRODUCTOS
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button
                sx={{ color: 'black' }}
                component={Link}
                onClick={() => handleLogout()}
              >
                CERRAR SESIÓN
              </Button>
            </ListItemButton>
        
          </List>
        )}
      
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ marginLeft: 'auto' }}>
        <Link to='/'>
          <img src={Core} alt='' />
        </Link>

        <MenuIcon fontSize='medium' color='black' />

      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComponent;
