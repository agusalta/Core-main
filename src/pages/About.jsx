import React from 'react'
import '../styles/About.css'
import banner1 from '../assets/banner1.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@material-ui/core';

  function About() {
    return (
    <body className='body-about'>
      <section className='section-about'>
        <div className="titulo-about">
          <h1>ABOUT US</h1>
        </div>

        <div className="redes-sociales-about">
          <Button href="https://twitter.com" target="blank">
            <TwitterIcon />
          </Button>

          <Button href="https://facebook.com" target="blank">
            <FacebookIcon />
          </Button>

          <Button href="https://instagram.com" target="blank">
              <InstagramIcon />
          </Button>
        </div>

        <div className="contenido-about">
          <p>¡Bienvenidos a Core! En Core, nos apasiona ofrecerte una experiencia de compra en línea excepcional. Somos mucho más que un simple ecommerce; somos una comunidad impulsada por la pasión por la tecnología y la innovación. Nuestro objetivo es convertirnos en tu destino preferido para encontrar productos electrónicos de calidad, asequibles y vanguardistas. Desde nuestros humildes comienzos, nos hemos esforzado por construir una plataforma que brinde acceso a una amplia gama de productos tecnológicos de confianza.</p>
        </div>

        <div className="servicios-about">
            <div className="servicio-about">
              <div className="icono-servicio-about">
                <img src={banner1} alt="" />
              </div>
              <h2>Calidad</h2>
                <p>Nos aseguramos de brindar la mejor calidad de nuestros productos para la satisfaccion del cliente</p>
            </div>
            
            <div className="servicio-about">
              <div className="icono-servicio-about">
                <img src={banner1} alt="" />
              </div>
              <h2>Seguridad</h2>
                <p>Nos aseguramos de brindar la seguridad que nuestros usuarios se merecen para la compra y venta de sus productos</p>
            </div>
            
            <div className="servicio-about">
              <div className="icono-servicio-about">
                <img src={banner1} alt="" />
              </div>
              <h2>Servicio</h2>
                <p>Nos aseguramos de brindar el mejor servicio posible para nuestros usuarios, sea en la venta o compra de productos</p>
            </div>
        </div>
      </section>
    </body>
  )
}

export default About