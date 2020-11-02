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
                                <Col className='profile-desc' s={12} m={6}>
                                    <h4 className='intro'>Hi! I'm Logan Walker!</h4>
                                    <p className='desc'>
                                        I'm a Georgia Tech engineer turned web developer with a passion for problem solving and an addiction to motorcycles.
                                    </p>
                                    <p className='desc'>
                                        I graduated in 2019 with a B.S. in Mechanical Engineering, but my interest in coding conviced me to go back to school. I will be graduating from Georgia Tech's Fullstack Coding Bootcamp in November, and my goal is to get accepted into Georgia Tech's Computer Science Masters Program in 2021.
                                    </p>
                                    <p className='desc'>
                                        I am currently searching for a Software Engineering position
                                        in Atlanta, GA!
                                    </p>
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