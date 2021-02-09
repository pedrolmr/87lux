import React, { Component } from 'react';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'next/image';

// const images = [
//     {
//         url: ""
//     }
// ]

const Platforms = () => {
    return (
        <Container className="platform--container my-5">
            <Image
                src="/../public/assets/shopify.png"
                alt="Picture of the author"
                width="173px"
                height="72px"
            />
        </Container>
    )

}

export default Platforms;