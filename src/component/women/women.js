// import React  from 'react';
import React, { useState } from "react";

import './Women.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';





import Rectangle25black from '../../assets/Rectangle25black.png';
import Rectangle25white from '../../assets/Rectangle25white.png';
import Rectangle25levender from '../../assets/Rectangle25levender.png';
import Rectangle25whitegrop from '../../assets/Rectangle25whitegrop.png';
import Rectangle25leaves from '../../assets/Rectangle25leaves.png';
import Rectangle25blackshort from '../../assets/Rectangle25blackshort.png';
import Rectangle25barboreat from '../../assets/Rectangle25barboreat.png';
import Rectangle25yellow from '../../assets/Rectangle25yellow.png';
import Rectangle25flower from '../../assets/Rectangle25flower.png';
import Rectangle25idont from '../../assets/Rectangle25idont.png';
import Rectangle25blueflower from '../../assets/Rectangle25blueflower.png';
import Rectangle25linepatter from '../../assets/Rectangle25linepatter.png';


function Body() {

  return (

        <div className="container  " >
         <div className='row  '>
          <div className='div1 col-2 col-12 col-lg-2 '>
          <Navbar.Brand className="filter" href="#home">Filter</Navbar.Brand>
          <FontAwesomeIcon icon={faFilter } className='icon '/>
          
          <hr/>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* <div className='accordion'>
         <span>Tops</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Printed T-shirts</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Plain T-shirts</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Kurti</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Boxers</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Full sleeve T-shirts</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Joggers</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    <div className='accordion'>
         <span>Payjamas</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
    
    <div className='accordion'>
         <span>Jeans</span>
         <FontAwesomeIcon icon={faChevronRight } className='icon'/>
    </div>
     */}

    <hr/>

    <Accordion defaultActiveKey="0" flush
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header
        >Price</Accordion.Header>
        <Form.Range />
        <div className='col-12 d-flex ' >
            <Button  variant="white">$77.00</Button>
      <Button className='b2' variant="white">$77.00</Button>
            </div>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Colors</Accordion.Header>
        <Accordion.Body>
        <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='tcards ' >
        <Button className='purple'variant=""></Button>
        <h6 className='tcolor'>Purple</h6>
        </div>
        
        <div className='tcards ' >
        <Button className="black" variant=""></Button>
        <h6 className='tcolor'>Black</h6>
        </div>               
        <div className='tcards ' >
        <Button className="red" variant=""></Button>
        <h6 className='tcolor'>Red</h6>
        </div>
        <div className='tcards ' >
        <Button className="orange"variant=""></Button>
        <h6 className='tcolor'>Orange</h6>
        </div>
        </div>
      </div>
      <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='tcards ' >
        <Button className="navy" variant=""></Button>
        <h6 className='tcolor'>Navy</h6>
        </div>
        
        <div className='tcards ' >
        <Button  className="white"variant=""></Button>
        <h6 className='tcolor'>White</h6> 
        </div>               
        <div className='tcards ' >
        <Button className="broom"variant=""></Button>
        <h6 className='tcolor'>Broom</h6> 
        </div>
        <div className='tcards ' >
        <Button className="green"variant=""></Button>
        <h6 className='tcolor'>Green</h6> 
        </div>
        </div>
      </div>
      <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='tcards ' >
        <Button className="yellow"variant=""></Button>
        <h6 className='tcolor'>Yellow</h6>
        </div>
        
        <div className='tcards ' >
        <Button className="grey" variant=""></Button>
        <h6 className='tcolor'>Grey</h6>
        </div>               
        <div className='tcards ' >
        <Button className="pink"variant=""></Button>
        <h6 className='tcolor'>Pink</h6>
        </div>
        <div className='tcards ' >
        <Button className="blue"variant=""></Button>
        <h6 className='tcolor'>Blue</h6> 
        </div>
        </div>
      </div>
           
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
        <div className='col-12 d-flex'>
        <Button variant="">XXS</Button>{' '}
      <Button variant="">XL</Button>{' '}
      <Button variant="">XS</Button>
            </div>
            <div className='col-12 d-flex ' >
            <Button variant="">XXL</Button>{' '}
      <Button variant="">3XL</Button>{' '}
      <Button variant="">4XL</Button>
            </div>
           
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Dress Style</Accordion.Header>
        <Accordion.Body>
        <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Classic `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Casual `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Business `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Sport `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Elegant `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
      <div className="mb-2">
        {[ 'end'].map(
          (direction) => (
            <DropdownButton
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="white"
              title={` Formal (evening) `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}



      </div>
      
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

          </div>
          <div className='col-10 col-12 col-lg-10'>
          <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Women's Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ paddingLeft:'70%'}}className="">
            <Nav.Link className='new'  href="#home">New</Nav.Link>
            <Navbar.Brand href="#home">Recommended</Navbar.Brand>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    


<div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='cards ' >
        <img src={Rectangle25black } className="ima"  />
        <FontAwesomeIcon  icon={faHeart } className='icons '/>
           {/* <h5>Black Sweatshirt with ....</h5>
          <span>Jhanvi’s  Brand</span>  */}
                  <div className='text'>
                <Button  variant="white">Black Sweatshirt with ....</Button><br/>
          <Button variant="white">Jhanvi’s  Brand</Button>
          <Button className='prix' variant="white">$123.00</Button>
          </div>
        </div>
        
        <div className='cards '>
        <img src={Rectangle25white} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons2 '/>
       {/* <h5> White T-shirt</h5>
        <span>Helen’s  Brand</span> */}
        <div className='text'>
        <Button variant="white">White T-shirt</Button><br/>
        <Button variant="white">Helen’s  Brand</Button>
        <Button className='prix' variant="white">$11.00</Button>
        </div>
        </div>                 
<div className='cards' > 
<img src={Rectangle25levender} className="ima" />
<FontAwesomeIcon  icon={faHeart } className='icons3 '/>

{/* <h5>Levender Hoodie with ....</h5>
<span>Nike’s  Brand</span>  */}
<div className='text'>
<Button variant="white">Levender Hoodie with ....</Button><br/>
<Button variant="white">Nike’s  Brand</Button>
        <Button className='prix' variant="white">$119.00</Button>
          </div>     
        </div>
        
        </div>
      </div> 

      <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='cards ' >
        <img src={Rectangle25leaves } className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons4 '/>
        {/* <h5>Leaves Pattern White...</h5>
        <span>paypal’s  Brand</span>  */}
         <div className='text'>
        <Button variant="white">Leaves Pattern White...</Button><br/>
        <Button variant="white">paypal’s  Brand</Button>
        <Button className='prix' variant="white">$77.00</Button>
          </div>
        </div>
        
        <div className='cards '>
        <img src={Rectangle25whitegrop} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons5 '/>
        {/* <h5>White Graphic Crop Top</h5>
        <span>woden’s  Brand</span> */} 
        <div className='text'>
         <Button variant="white">White Graphic Crop Top</Button><br/>
         <Button variant="white">woden’s  Brand</Button>
        <Button className='prix' variant="white">$29.00</Button>
          </div>
        </div>                 
<div className='cards' > 
<img src={Rectangle25blackshort} className="ima" />
<FontAwesomeIcon  icon={faHeart } className='icons6 '/>
   {/* <h5>Black Shorts</h5>
   <span>MM’s  Brand</span> */}
   <div className='text'>
   <Button variant="white">Black Shorts</Button><br/>
   <Button  variant="white">MM’s  Brand</Button>
   <Button className='prix' variant="white">$37.00</Button>
          </div>
        </div>
        
        </div>
      </div> 

      <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='cards ' >
        <img src={Rectangle25barboreat} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons7 '/>
        {/* <h5>Barboreal Gray Sweats...</h5>
        <span>Priya’s  Brand</span> */}
           <div className='text'>
        <Button variant="white">Barboreal Gray Sweats...</Button><br/>
        <Button variant="white">Priya’s  Brand</Button> 
          <Button className='prix' variant="white">$77.00</Button>
          </div>
        </div>
        
        <div className='cards '>
        <img src={Rectangle25yellow} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons8 '/>
        {/* <h5>Yellow Sweatshirt</h5>
        <span>woden’s  Brand</span> */}
        <div className='text'>
        <Button variant="white">Yellow Sweatshirt</Button><br/>
        <Button variant="white">woden’s  Brand</Button>
        <Button className='prix' variant="white">$29.00</Button>
        </div>
        </div>                 
<div className='cards' > 
<img src={Rectangle25flower} className="ima" />
<FontAwesomeIcon  icon={faHeart } className='icons9 '/>
{/* <h5>Flower Pattern Black C...</h5>
<span>MM’s  Brand</span>   */}
<div className='text'>
<Button variant="white">Flower Pattern Black C...</Button><br/>
<Button variant="white">MM’s  Brand</Button> 
          <Button className='prix' variant="white">$37.00</Button>
          </div>     
        </div>
        
        </div>
      </div> 
      <div className="container " >
      <div className='cardss col d-flex justify-content-center' >    
        <div className='cards ' >
        <img src={Rectangle25idont} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons10 '/>
        {/* <h5>I Don’t Graphic T-shirt </h5>
        <span>Nisargi’s  Brand</span> */}
         <div className='text'>
        <Button variant="white">I Don’t Graphic T-shirt</Button><br/>
        <Button variant="white">Nisargi’s  Brand</Button>
          <Button className='prix' variant="white">$77.00</Button>
          
          </div>
        </div>
        
        <div className='cards '>
        <img src={Rectangle25blueflower} className="ima" />
        <FontAwesomeIcon  icon={faHeart } className='icons11 '/>
        {/* <h5>Blue Flower Print Crop ....</h5>
        <span>Mellon’s  Brand</span>  */}
        <div className='text'>
        <Button variant="white">Blue Flower Print Crop ....</Button><br/>
        <Button variant="white">Mellon’s  Brand</Button> 
          <Button className='prix' variant="white">$29.00</Button>
        
          </div>
        </div>                 
<div className='cards' > 
<img src={Rectangle25linepatter} className="ima" />
<FontAwesomeIcon  icon={faHeart } className='icons12 '/>
{/* <h5>line Pattern Black H...</h5>
<span>AS’s  Brand</span>   */}
<div className='text'>
<Button variant="white">line Pattern Black H...</Button><br/>
<Button variant="white">AS’s  Brand</Button> 
<Button className='prix' variant="white">$37.00</Button>
          </div>     
        </div>
        
        </div>
      </div> 
     
      </div> 
     
        
         
          
         </div>
        <div className='div2'>
         <h4 className='div21'> Clothing for Women Online in India</h4>
         <span>Reexplore Women's Clothing Collection Online at Euphoria</span>
         <p>Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, Euphoria has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.</p>
         <br/>
         <p>Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. </p>
        <span>One-Stop Destination to Shop Every Clothing for Women: Euphoria</span>
        <p>Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, Euphoria has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
        <p>Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, </p>
        <span>see more</span>
        </div>

        <div  className='div2 '>
         <h4 className='div21'> Buy Women's Clothing at Best Price</h4>
     
    {/* <Table  borderless className="dad bg-secondary">
      <thead >
        <tr>
          <th >Women's Clothing </th>
          <th >Best Price</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td >Pick Any 4- Womens Plain T-shirt Combo</td>
          <td>₹1099</td>
        </tr>
        <tr>
          <td>Pick Any 4- Plain Womens Boxer Combo</td>
          <td>₹1099</td>
        </tr>
        <tr>
          <td>Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</td>
          <td>₹1399</td>
        </tr>
        <tr>
          <td>Multicolor Checkered Long Casual Shirts for Women</td>
          <td>₹499</td>
        </tr>
        <tr>
          <td>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</td>
          <td>₹799</td>
        </tr>
        <tr>
          <td>Blue Floral Anarkali Kurti</td>
          <td>₹599</td>
        </tr>
        <tr>
          <td>Jade Black Narrow Cut Flexible Women Jeggings</td>
          <td>₹998</td>
        </tr>
        <tr>
          <td>Mustard-yellow Solid Straight-Fit Women Pant</td>
          <td>₹499</td>
        </tr>
        <tr>
          <td>Women Pants Combo - Pick Any 2</td>
          <td>₹800</td>
        </tr>
        <tr>
          <td>Pista Green Solid Boxy Casual Shirts for Women</td>
          <td>₹449</td>
        </tr>
        <tr>
          <td>Plain Burgundy Womens Boxer</td>
          <td>₹349</td>
        </tr>
        <tr>
          <td>Striped Front Tie Casual Shirts for Women</td>
          <td>₹499</td>
        </tr>
      </tbody>
    </Table> */}
    <div className="col-12 table d-flex bg-light ">
<div className="col-10 col-12 col-lg-10 womens">
<h4 >Women's Clothing </h4>
<p >Pick Any 4- Womens Plain T-shirt Combo</p>
<p >Pick Any 4- Plain Womens Boxer Combo</p>
<p >Pick Any 4 - Women Plain Full Sleeve T-shirt Combo</p>
<p >Multicolor Checkered Long Casual Shirts for Women</p>
<p >Pick Any 2: Plain Boxy Casual Shirts for Women Combo</p>
<p >Blue Floral Anarkali Kurti</p>
<p >Jade Black Narrow Cut Flexible Women Jeggings</p>
<p >Mustard-yellow Solid Straight-Fit Women Pant</p>
<p >Women Pants Combo - Pick Any 2</p>
<p >Pista Green Solid Boxy Casual Shirts for Women</p>
<p >Plain Burgundy Womens Boxer</p>
<p >Striped Front Tie Casual Shirts for Women</p>

</div>
<div className="col-2 col-12 col-lg-2 bestprice">
<h4 >Best Price</h4>
<p>₹1099</p>
<p>₹1099</p>
<p>₹1399</p>
<p>₹499</p>
<p>₹799</p>
<p>₹599</p>
<p>₹998</p>
<p>₹499</p>
<p>₹800</p>
<p>₹449</p>
<p>₹349</p>
<p>₹449</p>

</div>
</div>
        </div>
          </div>
       
   
  );
}

export default Body;


