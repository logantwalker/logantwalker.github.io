import React from 'react';
import { Divider, Row, Col } from 'react-materialize';
import './contact.css'
import 'materialize-css';

const Contact = () => {
    return (
        <React.Fragment>
            <Divider/>
            <footer className="page-footer">
                <div className="container footer-content">
                    <div className="row">
                        <div className="col l5 s12">
                            <h5 className="white-text">Contact Me</h5>
                            <p className="grey-text text-lighten-4">If you want to work together or just learn more about me, check out these links!.</p>
                        </div>
                        <div className="col l4 offset-l3 s12">
                            <h5 className="white-text">Social Media:</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/logantwalker" target="_blank"><i
                                    className='material-icons tiny'>computer</i> GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/logantwalker37/"
                                    target="_blank"><i class='material-icons tiny'>account_box</i> LinkedIn</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!"><i className='material-icons tiny'>folder</i> Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center-align">
                        Logan Walker © 2020
                </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Contact;