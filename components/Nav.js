import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
    return (
        <Navbar className="nav">
            <Container>
                <Navbar.Brand href="#home" className="logo justify-content-start bold">87LUX</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="#">Themes</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Apps</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Assets</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Contact us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;