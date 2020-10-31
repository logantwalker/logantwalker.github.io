import React from 'react';
import { Divider, Row, Col } from 'react-materialize';
import Fade from 'react-reveal/Fade';
import 'materialize-css';
import "./about.css";

import avatar from './assets/profile-img.JPG';

const About = (props) => {
    return (
        <React.Fragment>
            <Divider />
            <Row className='section-body'>
                <Fade left >
                    <Col s={12}>
                        <h3 className='section-head'>ABOUT ME</h3>
                    </Col>
                </Fade>
                <Fade bottom>
                    <Col className='section-content' s={10}>
                        <Row>
                            <Col className='profile-img' s={12} m={6}>
                                <img width='300px' src={avatar} alt='profile pic' />
                            </Col>
                            <Col s={12} m={6}>
                                <p>Description</p>
                            </Col>
                        </Row>
                    </Col>
                </Fade>

            </Row>
            <Divider />
        </React.Fragment>
    )
};

export default About;