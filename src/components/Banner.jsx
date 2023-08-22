import { Button } from '@mui/material'
import { Container } from '@mui/material';
import React from 'react'
import '../styles/Banner.css'

function Banner() {

  return (
    <Container 
      component='div' 
      maxWidth='sx' 
      className='Banner' 
      sx={{
        display: 'flex',
        alignContent: 'center',
        color: 'black',
      }}
    > 
        <h1> MARIA BILBAO </h1>
        <Button
            variant='outlined' 
            sx={{
              color: 'black',
              borderColor: 'black',
            }} 
            href='/productos'
          >Ver productos
        </Button> 

    </Container>
  )
}

export default Banner