import React from 'react';

const Footer =()=> {
    return (
        <React.Fragment>
            <footer id="footer" className="bg-light">
                <div className="container card-body">
                    <hr/>
                    <a href="#" className="card-link text-color-01 font-weight-bold mx-auto">Designed By Labhansh Satpute</a>
                    <div className="d-flex float-right">
                        <a href="#" className="mx-2"><img src="icons/facebook.svg" alt="facebook"/></a>
                        <a href="#" className="mx-2"><img src="icons/twitter.svg" alt="twitter"/></a>
                        <a href="#" className="mx-2"><img src="icons/linkedin.svg" alt="linkedin"/></a>
                    </div>

                    <hr/>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;