import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/Logo.png';
// import { NavLink } from "react-router-dom";
import {
FaHeart,
FaUser,
FaShopify


 
}from "react-icons/fa"; 

function Home() {
  return ( 
    
        <Navbar   expand="lg" className="nav bg-body-tertiary" style={{marginTop:'px', marginBottom:'1%',textDecoration:'none' }}> 
      <Container fluid>
       <img src={logo} alt='' style={{marginLeft:'35px'}}/> 
        <Navbar.Brand ></Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-5 my-lg-0"
            style={{ maxHeight: '100px'}} 
            navbarScroll
          >
            <Nav.Link href="#action1" style={{marginLeft:'35px', textDecoration:'none'}}>
                <Link to="/Shop"  style={{textDecoration:'none', color:'black'}} >Shop</Link>
                </Nav.Link> 
            <Nav.Link href="#action2" style={{marginLeft:'35px'}}> 
                <Link to="/Men" style={{textDecoration:'none', color:'black'}}>Men</Link>
                </Nav.Link>
            <Nav.Link href="#action3" style={{marginLeft:'35px'}}>
               <Link to="/women" style={{textDecoration:'none', color:'black'}}>Women</Link>
                </Nav.Link>
            <Nav.Link href="#action4" style={{marginLeft:'35px'}}>Combos</Nav.Link> 
            <Nav.Link href="#action5" style={{marginLeft:'35px'}}>Joggers</Nav.Link>
          </Nav>
          <Form className="d-flex"> 
            <Form.Control
              type="search"
              placeholder="Search" 
              className="me-2"
              aria-label="Search"
            />
         <FaHeart style={{background:'#F6F6F6',width:'50px', height:'40px', fontSize:'8px', marginRight:'17px', marginLeft:'20px', borderRadius:'8px', padding:'10px'}}/>

          <Link to="/User"><FaUser style={{background:'#F6F6F6',width:'50px', height:'40px', fontSize:'3px', marginRight:'15px' , borderRadius:'8px', padding:'10px'}}/></Link>
           <Link to="/Panier"><FaShopify style={{background:'#F6F6F6',width:'50px', height:'40px', fontSize:'3px', borderRadius:'8px', padding:'10px'}}/></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default Home;