import React from 'react';
import './Navbar.css';
import 'materialize-css';

import BrandLogo from './assets/logo512.png'
import { Col, Row } from 'react-materialize';
import NavItem from "./NavItem/NavItem";

import { animateScroll as scroll, scroller } from 'react-scroll';


const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const scrollToAbout = () => {
        scroller.scrollTo('about', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuart'
        })
    }
    const scrollToPortfolio = () => {
        scroller.scrollTo('portfolio', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuart'
        })
    }
    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <React.Fragment>
            <div className='customNavbar'>
                <div className='nav-content'>
                    <Row>
                        <Col>
                            <img height='75px' src={BrandLogo} alt='LW Logo' />
                        </Col>
                        <Col>
                            <NavItem click={() => scrollToTop()}>Home</NavItem>
                        </Col>
                        <Col>
                            <NavItem click={() => scrollToAbout()}>About</NavItem>
                        </Col>
                        <Col>
                            <NavItem click={() => scrollToPortfolio()}>Portfolio</NavItem>
                        </Col>
                        <Col>
                            <NavItem click={() => scrollToContact()}>Contact</NavItem>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar