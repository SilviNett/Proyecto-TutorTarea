import React from 'react';
import { Carousel } from 'react-bootstrap';
import info from '../assets/info.jpeg';  
import info2 from '../assets/info2.jpeg'; 
import info3 from '../assets/info3.jpeg'; 
import info4 from '../assets/info4.jpeg';  


function BannerCarousel() {
  return (
    <Carousel className="banner-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info} 
          alt="Descripción de la imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info2} 
          alt="Descripción de la imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info3} 
          alt="Descripción de la imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info4} 
          alt="Descripción de la imagen"
        />
      </Carousel.Item>
      

      
        </Carousel>
  );
}

export default BannerCarousel;
