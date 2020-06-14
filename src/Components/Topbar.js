import React from 'react'
import {Navbar, NavDropdown, Form, FormControl, Nav , Button } from 'react-bootstrap'
import data from '../Constant/data'

const Topbar =()=>{
    return(
       <div>
          <Navbar bg="info" expand="lg"  style={{backgroundColor:'blue'}}>
        <img
        src={require('../Assets/images/logo.png')}
        width="40"
        height="30"
        className="d-inline-block align-top"
      />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
            {data.map(obj =>
              <NavDropdown.Item href="#action/3.1">{obj.about}</NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link href="#Staff">Staff</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
       </div>
        )
    }

    export default Topbar;
    
    
    
    
    
    
    
 