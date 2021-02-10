import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Image from 'next/image';
import Container from "react-bootstrap/Container";


const Themes = () => {
    return (
        <div className="Team--container my-5 py-5">
            <Container className="images">
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile1.jpeg"
                        alt="Picture of the author"
                        width="185px"
                        height="185px"
                    />
                </div>
                
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile2.jpeg"
                        alt="Picture of the author"
                        width="80px"
                        height="80px"
                    />
                </div>

                 
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile3.jpeg"
                        alt="Picture of the author"
                        width="135px"
                        height="135px"
                    />
                </div>

                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile4.jpeg"
                        alt="Picture of the author"
                        width="80px"
                        height="80px"
                    />
                </div>
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile5.jpeg"
                        alt="Picture of the author"
                        width="132px"
                        height="132px"
                    />
                </div>
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile6.jpeg"
                        alt="Picture of the author"
                        width="80px"
                        height="80px"
                    />
                </div>
                
                
                <div className="team-img">
                    <Image
                        className="img"
                        src="/assets/profile7.jpeg"
                        alt="Picture of the author"
                        width="80px"
                        height="80px"
                    />
                </div>
                <h3>Meet the team</h3>
            </Container>
        </div>
    )

}

export default Themes;