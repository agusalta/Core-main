import React, { useState, useEffect } from 'react'
import Producto from '../components/Producto/Producto'
import Spinner from '../components/Loading/Loading'
import { Box, Grid } from '@mui/material'
import InputField from '../components/InputField'
import Footer from '../components/Footer/Footer'

function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [buscar, setBuscar] = useState('')

  // PRIMERA CARGA DE LA PAGINA 
  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
      .then(response => response.json())
      .then(data => setProductos(data?.results))
      setLoading(false)
    }, 200);
  }, [])
    //

  // BUSCADOR DE PRODUCTOS
  useEffect(() => {
    function getProducto() {
      return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`)
      .then(response => response.json())
  }

  const request = async () => {
      try {
        const busqueda = await getProducto(buscar);
        setProductos(busqueda?.results);
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    };
    request()
  }, [buscar])


  const handleChange = (event) => {
    setBuscar(event.target.value)
  }
  //

  // RENDER
  if(loading) {
    return (
      <Spinner/>
    )
  } if (!loading){
    return (
      <>
      <main>
        <Box 
          component='div' 
          maxWidth='sx'
          sx={{
            display: 'flex', 
            justifyContent:'center', 
            flexDirection:'column',
            margin: '50px',
          }}
        >
          <div>
            <InputField
              sm={1}
              type='text' 
              id="outlined-basic" 
              variant="filled"
              fullWidth
              onChange={handleChange}
              value={buscar} 
              label="Buscar..."
            />
          </div> 
        </Box>
          
        <Grid 
          container 
          direction="row" 
          justifyContent="center" 
          sm={{m: 0}}
        >
          {productos.map((producto, index) => (
            <Producto  
              key={index}
              title={producto.title}
              price={producto.price}
              thumbnail={producto.thumbnail}
              shipping={producto.shipping.free_shipping}
              id={producto.id}
            />
          ))}
        </Grid>
      </main>
      </>
    )
  }
}

export default Productos