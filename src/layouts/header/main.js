import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div>
         {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Indian Sports Room </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="Forms" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to="/sport-form" style={{color:'black',textDecoration:'none'}}>Sports</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/star-form" style={{color:'black',textDecoration:'none'}}>Stars</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/event-form" style={{color:'black',textDecoration:'none'}}>Events</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/record-form" style={{color:'black',textDecoration:'none'}}>Records</Link></NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/equipment-form" style={{color:'black',textDecoration:'none'}}>
                  Equipments
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to="/rules-and-format-form" style={{color:'black',textDecoration:'none'}}>
                  Rules & Format
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
