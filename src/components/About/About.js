import React from 'react';
import { Divider, Row, Col } from 'react-materialize';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import 'materialize-css';
import "./about.css";

import avatar from './assets/profile-img.JPG';

const About = (props) => {
    return (
        <React.Fragment>
            <Element name="about">
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
                                    <img src={avatar} alt='profile pic' />
                                </Col>
                                <Col className='profile-desc's={12} m={6}>
                                    <h4>Hi! I'm Logan Walker!</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Fade>

                </Row>
                <Divider />
            </Element>
        </React.Fragment>
    )
};

export default About;