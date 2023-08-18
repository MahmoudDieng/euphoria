import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import side from '../../assets/images/side.jpg'
import './Slider.css'
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={side} alt=''/>
        <Carousel.Caption>
         <h5 style={{position:'absolute',top:'-1300%'}}>T-shirt / Tops</h5>
         <h1 style={{position:'absolute',top:'-1200%', textAlign:'left', fontWeight:'bold', fontSize:'50px'}}>Summer <br></br>
Value Pack</h1>
<h5 style={{position:'absolute',top:'-820%', textAlign:'left'}}>cool / colorful / comfy</h5>
<button className='btn1' style={{position:'absolute',top:'-600%', textAlign:'left', float:'left', left:'-0%', border:'none', borderRadius:'10px', height:'45px', textAlign:'center', fontWeight:'bold', Width:'40%'}}>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={side} alt=''/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={side} alt=''/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;