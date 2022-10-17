import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Header.css";

export default function Header(){
    return(
        <Navbar className = "navbar-color" expand="lg">
          <Container fluid>
              <Navbar.Brand>
                <img
                src="/my_dog.png"
                width="0"
                height="0"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
      </Navbar>
    );
}