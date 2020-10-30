import React from 'react';
import { Row, Parallax } from 'react-materialize';
import 'materialize-css';
import './BannerImage.css'
import bannerImg1 from './banner-assets/bannerIMG4.jpg';

const BannerImage = () => {
    return (
        <React.Fragment>
            <Row>
                <Parallax
                    image={<img alt="" width='100%' src={bannerImg1} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                <div className='title-card'>
                    <h1 className='title-text'>LOGAN WALKER</h1>
                    <h6 className='subtitle-text'>ATLANTA BASED SOFTWARE DEVELOPER</h6>
                </div>
            </Row>
        </React.Fragment>

    )
}

export default BannerImage;

