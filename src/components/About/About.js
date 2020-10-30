import React from 'react';
import { Divider, Row, Col } from 'react-materialize';
import 'materialize-css';
import "./about.css";

import avatar from './assets/profile-img.JPG';

const About = (props) => {
    return (
        <React.Fragment>
            <Divider />
            <Row className='section-body'>
                <Col s={12}>
                    <h3 className='section-head'>ABOUT ME</h3>
                </Col>

                <Col className='section-content' s={10}>
                    <Row>
                        <Col s={12} m={6}>
                            <img height='300px' src={avatar} alt='profile pic' />
                            <p>Description</p>
                        </Col>
                        <Col s={12} m={6}>
                            <p>Image Carousel?</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
        </React.Fragment>
    )
};

export default About;