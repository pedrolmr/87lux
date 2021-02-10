import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'next/image';

const Themes = () => {
    return (
        <div className="Themes--container my-5 py-5" >
            <div className="bar"></div>
            <div className="images">
                <Image
                    className="img"
                    src="/assets/theme1.png"
                    alt="Picture of the author"
                    width="560px"
                    height="346px"
                />
                <Image
                    className="img"
                    src="/assets/theme2.png"
                    alt="Picture of the author"
                    width="560px"
                    height="346px"
                />
                <Image
                    className="img"
                    src="/assets/theme3.png"
                    alt="Picture of the author"
                    width="280px"
                    height="346px"
                />
            </div>

            <div className="buttons">
                <Button className="btn" variant="transparent" type="submit">
                    View Themes
                </Button>
                <Button className="btn" variant="transparent" type="submit">
                    View Apps
                </Button>
            </div>
        </div>
    )

}

export default Themes;