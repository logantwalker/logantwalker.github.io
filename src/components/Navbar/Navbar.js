import React, {useState} from 'react';
import './Navbar.css';
import 'materialize-css';

import MobileNav from '../Navbar/MobileNav/MobileNav';
import BrandLogo from './assets/logo512.png'
import { Icon, Col, Row } from 'react-materialize';
import NavItem from "./NavItem/NavItem";

import { animateScroll as scroll, scroller } from 'react-scroll';


const Navbar = (props) => {

    let mobileNav;
    const [mobileSate, setState] = useState({ showNav: false });
    let currentState = mobileSate.showNav;

    const mobileNavClick = () => {
        currentState = !currentState;
        setState({ showNav: currentState });
    }

    if (mobileSate.showNav) {

        mobileNav = (
           <MobileNav/>
        )
    }

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
                        <Col s={10} m={2}className='logoImage'>
                            <img height='75px' src={BrandLogo} alt='LW Logo' />
                        </Col>
                        <div className='navButtons hide-on-small-and-down'>
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
                        </div>
                        <div className='mobileButton hide-on-med-and-up'>
                            <Col className='right'>
                                <div className='menu-item valign-wrapper'>
                                    <a onClick={()=>mobileNavClick()}><Icon small>menu</Icon></a>
                                </div>

                            </Col>
                        </div>
                        {mobileNav}
                    </Row>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar