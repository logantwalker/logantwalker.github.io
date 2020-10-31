import React from 'react';
import { Divider, Row, Parallax } from 'react-materialize';
import 'materialize-css';
import './BannerImage.css'
import bannerImg1 from './banner-assets/bannerIMG4.jpg';
import bannerImg2 from './banner-assets/bannerIMG5.jpg';

const BannerImage = (props) => {
    let bannerStyle = null;

    if (props.intro) {
        bannerStyle = (
            <React.Fragment>
                <Row>
                    <Parallax
                        image={<img alt="" width='100%' src={bannerImg1} />}
                        options={{
                            responsiveThreshold: 0
                        }}
                    />
                    <Divider/>
                    <div className='title-card'>
                        <h1 className='title-text'>LOGAN WALKER</h1>
                        <h6 className='subtitle-text'>ATLANTA BASED SOFTWARE DEVELOPER</h6>
                    </div>
                </Row>
            </React.Fragment>
        )
    }
    else {
        bannerStyle = (
            <React.Fragment>
                <Divider/>
                <Row className='margin-remove'>
                    <Parallax
                        image={<img alt="" width='100%' src={bannerImg2} />}
                        options={{
                            responsiveThreshold: 0
                        }}
                    />
                </Row>
            </React.Fragment>
        )
    }
    return (
        bannerStyle
    )
}

export default BannerImage;

