import React from 'react';

const Footer =()=> {
    return (
        <React.Fragment>
            <footer id="footer" className="bg-light">
                <div className="container card-body text-center" align="center">
                    <hr/>
                    <a href="#" className="card-link text-dark font-weight-bold mx-auto">Designed By Labhansh Satpute</a>
                    <br/>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="https://www.facebook.com/labhansh.satpute.5/" target="_blank" className="mx-2"><img src="icons/facebook.svg" alt="facebook"/></a>
                        <a href="https://twitter.com/LabhanshSatpute" target="_blank" className="mx-2"><img src="icons/twitter.svg" alt="twitter"/></a>
                        <a href="https://www.linkedin.com/in/labhansh-satpute-0060911a0/" target="_blank" className="mx-2"><img src="icons/linkedin.svg" alt="linkedin"/></a>
                    </div>
                    <hr/>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;