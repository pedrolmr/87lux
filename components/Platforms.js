import React, { Component } from 'react';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'next/image';

const Platforms = () => {
    return (
        <Container className="platform--container my-5">
            <p>Platforms</p>
            <div className="images">
                <Image
                    className="img"
                    // src="/../public/assets/shopify.png"
                    src="/assets/shopify.png"
                    alt="Picture of the author"
                    width="173px"
                    height="72px"
                />
                <Image
                    className="img"
                    // src="/../public/assets/wordpress.png"
                    src="/assets/wordpress.png"
                    alt="Picture of the author"
                    width="173px"
                    height="72px"
                />
                <Image
                    className="img"
                    // src="/../public/assets/bigcommerce.png"
                    src="/assets/bigcommerce.png"
                    alt="Picture of the author"
                    width="173px"
                    height="72px"
                />
                <Image
                    className="img"
                    // src="/../public/assets/wix.png"
                    src="/assets/wix.png"
                    alt="Picture of the author"
                    width="173px"
                    height="72px"
                />
            </div>
        
        </Container>
    )

}

export default Platforms;