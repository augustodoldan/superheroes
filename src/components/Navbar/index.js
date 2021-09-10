import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Search = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Link to="/"> <Navbar.Brand to="/">ALKEHEROES</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <Link to="/" className="navbar-brand linkNavbar"> <Nav>Equipo</Nav> </Link>
             <Link to="/agregar" className="navbar-brand linkNavbar"> <Nav>Agregar Heroe</Nav></Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} to="#memes">
              Sobre mi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Search;
