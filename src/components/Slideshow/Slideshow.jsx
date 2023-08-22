import React, { useRef, useEffect} from 'react'
import './Slideshow.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import {ReactComponent as FlechaIzquierda} from './iconmonstr-angel-left-thin.svg'
import {ReactComponent as FlechaDerecha} from './iconmonstr-angel-right-thin.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



function Slideshow() {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  
  const siguiente = () => {
    if(slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`; 
      
      const transicion = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        // el primer elemento lo mandamos al final
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener('transitionend', transicion);
      }
      // event listener para cuando termina la animacion
      slideshow.current.addEventListener('transitionend', transicion)

    }
  }
  
  const anterior = () => {
    if(slideshow.current.children.length > 0){
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`; 
      
      setTimeout(() => {
        slideshow.current.style.transition = '300ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`; 
      }, 30)
    }
  }

  useEffect(() => {
    // autoplay
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);

    // cuando paso el cursor se detiene
    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideshow.current);
    });

    // luego se reanuda
    // slideshow.current.addEventListener('mouseleave', () => {
    //   intervaloSlideshow.current = setInterval(() => {
    //     siguiente();
    //   }, 5000);
    // });

  },[]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>
        <Slide>
          <Link to='/productos'>
            <img src={img1} alt=''></img>
          </Link>
          <TextoSlide>
            <p>Los mejores accesorios para tu celular</p>
          </TextoSlide>
        </Slide>

        <Slide>
          <Link to='/productos'>
            <img src={img2} alt=''></img>
          </Link>
          <TextoSlide>
            <p>Nueva linea de relojes smartwatch</p>
          </TextoSlide>
        </Slide>

        <Slide>
          <Link to='/productos'>
            <img src={img3} alt=''></img>
          </Link>
          <TextoSlide>
            <p>Descuentos del 15% en productos Apple</p>
          </TextoSlide>
        </Slide>

        <Slide>
          <Link to='/productos'>
            <img src={img4} alt=''></img>
          </Link>
          <TextoSlide>
            <p>Descuentos del 10% en relojes de primera calidad</p>
          </TextoSlide>
        </Slide>
      </ContenedorSlideshow>

      <Controles>
        <Boton onClick={anterior}>
          <FlechaIzquierda/>
        </Boton>
        <Boton derecho onClick={siguiente}>
          <FlechaDerecha/>
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  )
}

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
  }
  @media screen and (max-width: 530px) {
    img {
      vertical-align: center;
      margin: 0;
    }
    p {
      display: none;
    }
  }
`;

const TextoSlide = styled.div`
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
  color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: .3s ease all ;
  &:hover {
    background: rgba(0,0,0,.2);
    path{
      fill: #fff;
    }
  }
  
  path {
    filter: ${props => props.derecho 
    ? 'drop-shadow(-2px 0px 0px #fff)' 
    : 'drop-shadow( 2px 0px 0px #fff)'};
  }
  ${props => props.derecho ? 'right: 0' : 'left: 0' }
`

export default Slideshow