import React from 'react'
import '../styles/Inicio.css'
import Slideshow from '../components/Slideshow/Slideshow'
import styled from 'styled-components'
import Productos from './Productos'
import Footer from '../components/Footer/Footer'
import Banner from '../assets/banner.mp4'
import '../styles/Inicio.css'

function Inicio() {
  
  return (
    <>
      <MainContainer>
        <VideoContainer className='VideoContainer'>
          <CustomVideo autoPlay loop muted playsInline>
            <source src={Banner} type="video/mp4" />
            Your browser does not support the video tag.
          </CustomVideo>
        </VideoContainer>

        <Titulo>Productos Destacados</Titulo>
        <Slideshow />
        <Productos />
      </MainContainer>
      <Footer />
    </>
  )
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Esto es importante para que el video no se desborde */
`;

const CustomVideo = styled.video`
  width: 100%;
  height: auto; /* Esto garantiza que la altura se ajuste proporcionalmente */
`;

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const MainContainer = styled.main`
  max-width: 1000px;
  margin: 50px auto;
  overflow: hidden;
`;

export default Inicio;