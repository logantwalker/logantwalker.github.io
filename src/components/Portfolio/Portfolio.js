import React from 'react';
import { Icon, CardTitle, Card, Row, Col } from 'react-materialize';
import { Element } from 'react-scroll';
import 'materialize-css';
import './portfolio.css';

//portfolio images
import CRSimg from './src-img/CRSimg.png';
import budgetImg from './src-img/budgetImg.png';
import directoryImg from './src-img/directoryImg.png';
import youFo from './src-img/youFo.png'
import workoutImg from './src-img/workoutImg.png';
import weatherImg from './src-img/weatherImg.png'


const Portfolio = (props) => {
    return (
        <React.Fragment>
            <Element name="portfolio">
                <Row>
                    <Col s={12}>
                        <h3 className='section-head'>PORTFOLIO</h3>
                    </Col>
                    <div className='portfolio-container'>

                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={CRSimg} reveal waves="light" />}
                                reveal={<p>Currently under construction.. A MERN stack website built for Career Recruiting Specialists. This website allows the user to list job postings, accept applications, and manage applicant information.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Career Recruiting Specialists"
                            >
                                <p>
                                    <a href="https://github.com/logantwalker/career-recruiting-specialists">
                                        View Source Code
                                    </a>
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={budgetImg} reveal waves="light" />}
                                reveal={<p>This Progressive Web Application allows a user to keep track of their finances even without an internet connection.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Progressive Budget App"
                            >
                                <p>
                                    <a href="https://evening-taiga-48535.herokuapp.com/">
                                        See it in action!
                            </a>
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={directoryImg} reveal waves="light" />}
                                reveal={<p>This React.js Directory allows a user to filter out employees by name and sort them alphabetically.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Employee Directory"
                            >
                                <p>
                                    <a href="https://logantwalker.github.io/HW-19-EmployeeDirectory/">
                                    See it in action!
                            </a>
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={youFo} reveal waves="light" />}
                                reveal={<p>YouFO is a site where you can search for UFO sightings around the world. This site was using built node.js, express.js, mysql and sequelize.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="YouFo"
                            >
                                <p>
                                    <a href="https://youfo.herokuapp.com/">
                                    See it in action!
                            </a>
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={workoutImg} reveal waves="light" />}
                                reveal={<p>Fitness Tracker is a node/express app that uses MongoDB and Mongoose to store and retrieve workout data. This website allows you to record your workouts and view your exercise statistics.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Fitness Tracker"
                            >
                                <p>
                                    <a href="https://calm-waters-17256.herokuapp.com/">
                                    See it in action!
                            </a>
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={6}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={weatherImg} reveal waves="light" />}
                                reveal={<p>Look up weather forecasts for any place in the world.</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Weather Dashboard"
                            >
                                <p>
                                    <a href="https://logantwalker.github.io/HW-06-WeatherDashboard/">
                                    See it in action!
                            </a>
                                </p>
                            </Card>
                        </Col>
                    </div>

                </Row>
            </Element>
        </React.Fragment>
    )
}

export default Portfolio;