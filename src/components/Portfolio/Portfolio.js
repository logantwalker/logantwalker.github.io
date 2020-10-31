import React from 'react';
import { Icon, CardTitle, Card, Row, Col } from 'react-materialize';
import 'materialize-css';
import './portfolio.css';

const Portfolio = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col s={12}>
                    <h3 className='section-head'>PORTFOLIO</h3>
                </Col>
                <div className='portfolio-container'>
                    
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                    <Col s={10} m={6} l={4}>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Card Title"
                        >
                            <p>
                                <a href="!#">
                                    This is a link
                            </a>
                            </p>
                        </Card>
                    </Col>
                </div>

            </Row>
        </React.Fragment>
    )
}

export default Portfolio;