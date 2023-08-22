import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/useCart';
import './producto.css'
import { Box, Button } from '@mui/material';

function Producto({ title, price, thumbnail, id, shipping }) {
    const { addToCart, handleCartOpen } = useCart();
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleAddToCart = () => {
      if (!login) {
        // Si el usuario no está logueado, almacenamos la URL previa en el LocalStorage
        localStorage.setItem('prevPath', `/producto/${encodeURIComponent(id)}`);
        navigate('/login');
        return; // Evitamos continuar con el proceso de agregar al carrito
      }

      const product = {
        id,
        title,
        price,
        thumbnail,
        shipping
      };
      addToCart(product);
      handleCartOpen();
    };


    return (
      <Box sx={{ boxShadow: 1}} variant="text" href={`/producto/${id}`}  >
        <div className='container'>
          <div className='img'>
            <img alt='' src={thumbnail}></img>
          </div>
          <p className='titulo'>{title}</p>
          <p className='precio'>{`$${parseInt(price).toLocaleString()} ARS`}</p>
          <p className='envio'>{shipping ? 'Envío gratis' : ''}</p>
          <Button sx={{ marginBottom: '8px', marginTop: '8px' }} variant="outlined" color="secondary"  onClick={login ? handleAddToCart : undefined}>Agregar al carrito</Button>
          <Button sx={{ marginBottom: '8px' }} variant="contained" color="secondary"  
           href={!login ? "/login" : `/producto/${encodeURIComponent(id)}`}>Ver detalle</Button>
        </div>
      </Box>
    );
  }
  
  export default Producto;
