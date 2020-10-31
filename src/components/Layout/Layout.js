import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImage from '../BannerImage/BannerImage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import 'materialize-css'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            <BannerImage intro={true}/>
            <About/>
            <Portfolio/>
            <BannerImage intro={false}/>
            <Contact/>
        </React.Fragment>
    )
}

export default Layout;