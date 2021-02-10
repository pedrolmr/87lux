import React, { Component } from 'react';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <Container className="header--container my-5">
            {/* <div className="header--container"> */}
                <Row>
                    <Col className="col">
                        <h1>We Give Your Business an Edge Over Your Competitors!</h1>
                        <p>Everything you need for your business: Themes, Apps, Assets and More..</p>

                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter your email address" />
                            </Form.Group>
                            <Button className="btn" variant="primary" type="submit">
                                Get Started
                            </Button>
                        </Form>
                    </Col>

                    <Col className="col">
                        <div class="shapes-container">
                            <div class="video-container">
                                <button class='play-button'>
                                    <img src="https://img.icons8.com/metro/26/000000/play.png"/>
                                </button>

                                <div class="video"></div>
                            </div>
                            <div class="shapes">
                                <div class="circle-1"></div>
                                <div class="triangle"></div>
                                <div class="circle-2"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            {/* </div> */}
        </Container>
    )

}

export default Header;