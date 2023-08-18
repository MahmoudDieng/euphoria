import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import side from '../../assets/images/side.jpg'
// import card1 from '../../assets/images/card1.jpg';
// import card2 from '../../assets/images/card2.jpg';
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png' 
import barre from '../../assets/images/barre.png' 
import barre1 from '../../assets/images/barre1.png'
import barre2 from '../../assets/images/barre2.png'
import barre3 from '../../assets/images/barre3.png'
import zone1 from '../../assets/images/zone1.png'
import zone2 from '../../assets/images/zone2.png'
import zone3 from '../../assets/images/zone3.png'
import zone4 from '../../assets/images/zone4.png'
import zone5 from '../../assets/images/zone5.png'
import zone6 from '../../assets/images/zone6.png'
import zone7 from '../../assets/images/zone7.png'
import categori1 from '../../assets/images/categori1.png'
import categori2 from '../../assets/images/categori2.png'
import categori3 from '../../assets/images/categori3.png'
import categori4 from '../../assets/images/categori4.png'
import categori5 from '../../assets/images/categori5.png'
import categori6 from '../../assets/images/categori6.png'
import categori7 from '../../assets/images/categori7.png'
import categori8 from '../../assets/images/categori8.png'
import women1 from '../../assets/images/women1.png'
import women2 from '../../assets/images/women2.png'
import women3 from '../../assets/images/women3.png'
import women4 from '../../assets/images/women4.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import  './Shop.css';

import CardGroup from 'react-bootstrap/CardGroup';

function Slider() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img src={side} alt='' style={{marginTop:'px'}}/>
        <Carousel.Caption>
         <h5 style={{position:'absolute',top:'-1300%'}}>T-shirt / Tops</h5>
         <h1 style={{position:'absolute',top:'-1200%', textAlign:'left', fontWeight:'bold', fontSize:'50px'}}>Summer <br></br>
Value Pack</h1>
<h5 style={{position:'absolute',top:'-820%', textAlign:'left'}}>cool / colorful / comfy</h5>
<button className='btn1' style={{position:'absolute',top:'-600%', textAlign:'left',  left:'-0%', border:'none', borderRadius:'10px', height:'45px',  fontWeight:'bold', Width:'40%'}}>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={side} alt=''/> 
        <Carousel.Caption>
        <h5 style={{position:'absolute',top:'-1300%'}}>T-shirt / Tops</h5>
         <h1 style={{position:'absolute',top:'-1200%', textAlign:'left', fontWeight:'bold', fontSize:'50px'}}>Summer <br></br>
Value Pack</h1>
<h5 style={{position:'absolute',top:'-820%', textAlign:'left'}}>cool / colorful / comfy</h5>
<button className='btn1' style={{position:'absolute',top:'-600%', textAlign:'left',  left:'-0%', border:'none', borderRadius:'10px', height:'45px',  fontWeight:'bold', Width:'40%'}}>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={side} alt=''/>
        <Carousel.Caption>
        <h5 style={{position:'absolute',top:'-1300%'}}>T-shirt / Tops</h5>
         <h1 style={{position:'absolute',top:'-1200%', textAlign:'left', fontWeight:'bold', fontSize:'50px'}}>Summer <br></br>
Value Pack</h1>
<h5 style={{position:'absolute',top:'-820%', textAlign:'left'}}>cool / colorful / comfy</h5>
<button className='btn1' style={{position:'absolute',top:'-600%', textAlign:'left',  left:'-0%', border:'none', borderRadius:'10px', height:'45px',  fontWeight:'bold', Width:'40%'}}>Shop Now</button>
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
    <div> 
    <Row  xs={1} md={2} className="row g-4">
      
          <Card className='card1' style={{border:'none'}}> 
            {/* <img src={card2} alt=''/> */}
            <Card.Body>
              <Card.Text>
                <h6 style={{color:'white', marginTop:'35px'}}>Low price</h6>
                <h1 style={{color:'white', marginTop:'35px'}}>High Coziness</h1> 
                <p style={{color:'white', marginTop:'15px'}}>UPTO 50% OFF</p>
                <h4 style={{color:'white', marginTop:'35px'}}>Explore Items</h4>
              </Card.Text>  
            </Card.Body>
          </Card>
          <Card className='card2'  style={{border:'none'}}> 
            {/* <img src={card1} alt=''/> */}
            <Card.Body>
              <Card.Text>
              <h6 style={{color:'white', marginTop:'35px'}}>Beyoung Presents</h6>
                <h1 style={{color:'white', marginTop:'20px'}}>Breezy Summer <br></br>Style</h1> 
                <p style={{color:'white', marginTop:'15px'}}>UPTO 50% OFF</p>
                <h4 style={{color:'white', marginTop:'20px'}}>Explore Items</h4>
              </Card.Text>
            </Card.Body>
          </Card> 
        
    </Row> 
    
    </div>
    
    <div>
     <img src={barre} alt=''style={{marginLeft:'55px', position:'absolute', top:'213%'}}/>
      <h1 style={{marginLeft:'66px', marginTop:'5%',marginBottom:'2%'}}>New Arrival</h1> 
    <CardGroup>
      <Card  style={{border:'none', Width:'20%',marginLeft:'5%',marginRight:'2%'}}>
        <img className='imag1'src={image1} alt=''/>   
        <Card.Body>
        <h5>Knitted Joggers</h5>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img className='imag1'src={image2} alt=''/>
        <Card.Body>
        <h5>Full Sleeve</h5>
        </Card.Body> 
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img src={image3} alt=''/>
        <Card.Body>
        <h5>Active T-Shirts</h5>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'7%'}}> 
      <img src={image4} alt=''/>
        <Card.Body> 
       <h5> Urban Shirts</h5>
        </Card.Body> 
      </Card>
    </CardGroup>
  
    </div>
    <div> 
    <img src={barre1} alt=''style={{marginLeft:'55px', position:'absolute', top:'292%'}}/>
      <h1 style={{marginLeft:'66px', marginTop:'5%',marginBottom:'5%'}}>Big Saving Zone</h1>
    <CardGroup>   
    <Card  className='zone1' style={{border:'none',Width:'30%',marginRight:'2%', marginLeft:'5%'}}>
      {/*<img src={zone1} alt=''/>*/}
        <Card.Body>
         <Card.Text> 
         <h1 style={{color:'white', marginTop:'20px'}}>Hawaiian <br></br>Shirts</h1> 
         <p style={{color:'white', marginTop:'15px'}}>Dress up in summer vibe</p>
         <h5 style={{color:'white', marginTop:'20px'}}>UPTO 50% OFF</h5>
         <button style={{backgroundBorder:'back', marginTop:'70px',borderRadius:'8px'}}>SHOP NOW</button>
         </Card.Text>
        </Card.Body> 
      </Card>
      <Card  className='zone2' style={{border:'none',Width:'30%',marginRight:'2%'}}> 
      {/*<img src={zone2} alt=''/>*/} 
        <Card.Body>
          <Card.Text>
            <button style={{background:'#3C4242',marginLeft:'68%',marginTop:'5%',borderRadius:'8px'}}>Limited Stock</button>
          <h1 style={{color:'white', marginTop:'20px',marginLeft:'62%'}}>Printed <br></br>T-Shirt</h1> 
          <p style={{color:'white', marginTop:'15px', marginLeft:'48%'}}>New Designs Every Week</p>
          <h5 style={{color:'white', marginTop:'20px',marginLeft:'60%'}}>UPTO 40% OFF</h5>
          <button style={{backgroundBorder:'back', marginTop:'70px',marginLeft:'65%',borderRadius:'8px'}}>SHOP NOW</button>
          </Card.Text>
        </Card.Body> 
      </Card> 
      <Card className='zone3' style={{border:'none',Width:'30%',marginRight:'7%'}}> 
      {/*<img src={zone3} alt=''/>*/}
        <Card.Body> 
          <Card.Text>
          <h1 style={{color:'#3C4242', marginTop:'30px',marginLeft:'55%'}}>Cargo<br></br>Joggers</h1>
          <h6 style={{color:'#3C4242', marginTop:'15px', marginLeft:'42%'}}>Move with style & comfort</h6>
          <h5 style={{color:'#3C4242', marginTop:'20px',marginLeft:'50%'}}>UPTO 40% OFF</h5>
          <button style={{backgroundBorder:'back', marginTop:'70px',marginLeft:'65%',borderRadius:'8px'}}>SHOP NOW</button>
          </Card.Text>
        </Card.Body> 
      </Card>
  
      </CardGroup>
      
    </div>
    <div>
    <CardGroup> 
    <Card className='zones4' style={{border:'none',Width:'40%',marginRight:'5%',marginLeft:'5%'}}>
      {/*<img src={zone4} alt=''/>*/}
        <Card.Body>
         <Card.Text>
         <h1 style={{color:'#3C4242', marginTop:'30px',marginLeft:'66%'}}>Urban<br></br>Shirts</h1>
         <h6 style={{color:'#3C4242', marginTop:'15px', marginLeft:'66%'}}>Live In Confort</h6>
         <h5 style={{color:'#3C4242', marginTop:'20px',marginLeft:'66%'}}>FLAT 60% OFF</h5>
         <button style={{backgroundBorder:'back', marginTop:'90px',marginLeft:'66%',borderRadius:'8px'}}>SHOP NOW</button>
         </Card.Text> 
        </Card.Body>
      </Card> 
      <Card className='zones5' style={{border:'none',Width:'40%',marginRight:'7%'}}>
      {/*<img src={zone5} alt=''/>*/}
        <Card.Body>
          <Card.Text>
          <h1 style={{color:'#3C4242', marginTop:'30px',marginLeft:'57%'}}>Oversized<br></br>T-Shirts</h1>
         <h6 style={{color:'#3C4242', marginTop:'15px', marginLeft:'57%'}}>Street Style Icon</h6>
         <h5 style={{color:'#3C4242', marginTop:'20px',marginLeft:'57%'}}>FLAT 60% OFF</h5>
         <button style={{backgroundBorder:'back', marginTop:'90px',marginLeft:'57%',borderRadius:'8px'}}>SHOP NOW</button>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
    <div>
    <CardGroup>
    <Card  className='zones6'style={{border:'none',Width:'40%',marginRight:'5%',marginLeft:'5%',marginTop:'3%'}}>
      {/*<img src={zone6} alt=''/>*/}
        <Card.Body>
         <Card.Text>
         <h1 style={{color:'white', marginTop:'100px',marginLeft:'2%'}}>WE MADE YOUR EVERYDAY <br></br>FASHION BETTER!</h1>
         <p style={{color:'white', marginTop:'15px', marginLeft:'2%'}}>In our journey to improve everyday fashion,<br></br>euphoria presents EVERYDAY wear range -<br></br>  Comfortable & Affordable fashion 24/7</p>
         <button style={{backgroundBorder:'back', marginTop:'90px',marginLeft:'2%',borderRadius:'8px'}}>SHOP NOW</button>
         </Card.Text>
        </Card.Body>
      </Card>
      <Card className='zones7' style={{border:'none',Width:'40%',marginRight:'7%',marginTop:'3%'}}> 
      <img src={zone7} alt=''/>
        <Card.Body> 
        </Card.Body> 
      </Card>
    </CardGroup>
    </div>
    <div>
     <img src={barre2} alt=''style={{marginLeft:'55px', position:'absolute', top:'554%'}}/>
      <h1 style={{marginLeft:'66px', marginTop:'3%',marginBottom:'3%'}}>Categories For Men</h1> 
    <CardGroup>
      <Card  style={{border:'none', Width:'20%',marginLeft:'5%',marginRight:'2%'}}>
        <img className='imag1'src={categori1} alt=''/>   
        <Card.Body>
        <h5>Shirts</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img className='imag1'src={categori2} alt=''/>
        <Card.Body>
        <h5>Printed T-Shirts</h5>
        <p>Explore Now!</p>
        </Card.Body> 
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img src={categori3} alt=''/>
        <Card.Body>
        <h5>Plain T-Shirt</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'7%'}}> 
      <img src={categori4} alt=''/>
        <Card.Body> 
       <h5>Polo T-Shirt</h5>
       <p>Explore Now!</p>
        </Card.Body> 
      </Card>
    </CardGroup>
  
    </div>
    <div>
    <CardGroup>
      <Card  style={{border:'none', Width:'20%',marginLeft:'5%',marginRight:'2%'}}>
        <img className='imag1'src={categori5} alt=''/>   
        <Card.Body>
        <h5>Hoodies & Sweetshirt</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img className='imag1'src={categori6} alt=''/>
        <Card.Body>
        <h5>Jeans</h5>
        <p>Explore Now!</p>
        </Card.Body> 
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img src={categori7} alt=''/>
        <Card.Body>
        <h5>Activewear</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'7%'}}> 
      <img src={categori8} alt=''/>
        <Card.Body> 
       <h5>Boxers</h5>
       <p>Explore Now!</p>
        </Card.Body> 
      </Card>
    </CardGroup>
  
    </div>
    <div>
     <img src={barre3} alt=''style={{marginLeft:'55px', position:'absolute', top:'741%'}}/>
      <h1 style={{marginLeft:'66px', marginTop:'3%',marginBottom:'3%'}}>Categories For Men</h1> 
    <CardGroup>
      <Card  style={{border:'none', Width:'20%',marginLeft:'5%',marginRight:'2%'}}>
        <img className='imag1'src={women1} alt=''/>   
        <Card.Body>
        <h5>Hoodies & Sweetshirt</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img className='imag1'src={women2} alt=''/>
        <Card.Body>
        <h5>Coats & Parkas</h5>
        <p>Explore Now!</p>
        </Card.Body> 
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'2%'}}>
      <img src={women3} alt=''/>
        <Card.Body>
        <h5>Tees & T-Shirt</h5>
        <p>Explore Now!</p>
        </Card.Body>
      </Card>
      <Card  style={{border:'none',Width:'20%',marginRight:'7%'}}> 
      <img src={women4} alt=''/>
        <Card.Body> 
       <h5>Boxers</h5>
       <p>Explore Now!</p>
        </Card.Body> 
      </Card>
    </CardGroup>
  
    </div>
    </div>
    
  );
}

export default Slider;






