import { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import '../styles/Detalle.css';
import { useCart } from '../context/useCart';
import { useProduct } from '../context/ProductContext';
import Spinner from '../components/Loading/Loading';
import { useParams } from 'react-router-dom';
import { getById } from '../services/productosServices';


function Detalle() {
  const { producto, loading, setProducto, setLoading } = useProduct();
  const { addToCart } = useCart();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); 
    getById(id)
      .then(response => {
        setProducto(response);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error al obtener el producto:', error);
        setLoading(false);
      });
  }, [id, setLoading, setProducto]);
  
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className='contenedorDetalle' sx={{ boxShadow: 3 }}>
        <div className='wrapper'>
          <div className='imgContainer'>
            <img className='imagen' alt={producto.title} src={producto.thumbnail}></img>
          </div>

          <div className='infoContainer'>
            <p className='title'>{producto.title}</p>
            <p className='condition'>Condición: {producto.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
            <p className='quantity'>{producto.available_quantity} disponibles</p>
            <p className='warranty'>{producto.warranty}</p>
            <div>
              <p className='price'>{producto.price.toLocaleString()} ARS</p>
            </div>
            <div className='filterContainer'></div>

            {/* <Button 
              sx={{ color: 'white', marginRight: '8px' }} 
              variant="contained" 
              color="secondary" 
              onClick={() => navigate(`/compra/${producto.id}`)}
            >
              Comprar
            </Button> */}

            <Button sx={{ color: 'white' }} variant="contained" color="secondary"
              type='button' onClick={() => addToCart(producto)}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default Detalle;
