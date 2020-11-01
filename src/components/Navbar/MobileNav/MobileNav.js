import React from 'react';
import 'materialize-css';
import './mobilenav.css';

import { Divider, Col, Row } from 'react-materialize';
import NavItem from "../NavItem/NavItem";

import { animateScroll as scroll, scroller } from 'react-scroll';

const MobileNav = (props) => {
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
        <Row className='nav-window hide-on-med-and-up'>
            <Col s={6} className='center'>
                <NavItem click={() => scrollToTop()}>Home</NavItem>
                <NavItem click={() => scrollToAbout()}>About</NavItem>
            </Col>
            <Col s={6} className='center'>
                <NavItem click={() => scrollToPortfolio()}>Portfolio</NavItem>
                <NavItem click={() => scrollToContact()}>Contact</NavItem>
            </Col>   
        </Row>
    )
}

export default MobileNav;