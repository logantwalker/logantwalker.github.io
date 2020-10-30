import React from 'react';
import classes from './Navbar.module.css';
import 'materialize-css';

import BrandLogo from './assets/logo512.png'
import { Col, Row } from 'react-materialize';
import NavItem from "./NavItem/NavItem"

const Navbar = (props) => {
    return (
        <React.Fragment>
            <div className={classes.customNavbar}>
                <div className='nav-content'>
                    <Row>
                        <Col>
                            <img height='75px' src={BrandLogo} alt='LW Logo' />
                        </Col>
                        <Col>
                            <NavItem>Home</NavItem>
                        </Col>
                        <Col>
                            <NavItem>About</NavItem>
                        </Col>
                        <Col>
                            <NavItem>Portfolio</NavItem>
                        </Col>
                        <Col>
                            <NavItem>Contact</NavItem>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar