import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImage from '../BannerImage/BannerImage';
import About from '../About/About';
import 'materialize-css'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            <BannerImage/>
            <About/>
        </React.Fragment>
    )
}

export default Layout;