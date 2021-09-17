import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container, NavItem,} from "react-bootstrap"
import logo from './logo.svg';

export const Heading = () => {
    return (
        <div className="container">
        <Navbar bg="dark" variant="dark" className="mt-5">
    <Container>
    <Navbar.Brand href="/">
    <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="me">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/add">Features</Nav.Link>

      <NavItem><Link className="btn btn-primary" to="/add">Add User</Link></NavItem>
    </Nav>
    </Container>
  </Navbar>
  </div>
    )
}
