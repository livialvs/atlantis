import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import '../../styles/global.css';
import './sidebar.css'; 

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Navbar expand="lg" className="bg-body-tertiary sidebar">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="Logo" width="150" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
            <Nav.Link as={Link} to="/reservas">Reservas</Nav.Link>
            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cadastro/titular">Titular</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cadastro/dependente">Dependente</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div className="sidebar-footer">
        <Nav className="flex-column">
          <Nav.Link className="mt-auto" style={{ color: 'white'}}>Sair</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
