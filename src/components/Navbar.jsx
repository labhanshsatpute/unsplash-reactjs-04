import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const NavbarToggled =()=> {
        if (document.querySelector('#navbar-collapse').style.display == "block") {
            document.querySelector('#navbar-collapse').style.display = "none";


            document.querySelector('#toggler-icon-line-2').style.display = 'block';
            document.querySelector('#toggler-icon-line-1').style.transform = 'rotate(0deg)';
            document.querySelector('#toggler-icon-line-1').style.marginTop = '0px';
            document.querySelector('#toggler-icon-line-3').style.transform = 'rotate(0deg)';
            document.querySelector('#toggler-icon-line-1').style.marginBottom = '0px';   
            
            document.querySelector('#toggler-icon-line-1').style.width = '30px';
            document.querySelector('#toggler-icon-line-2').style.width = '20px';
            document.querySelector('#toggler-icon-line-3').style.width = '10px';
        }
        else {
            document.querySelector('#navbar-collapse').style.display = "block";

            document.querySelector('#toggler-icon-line-2').style.display = 'none';
            document.querySelector('#toggler-icon-line-1').style.transform = 'rotate(45deg)';
            document.querySelector('#toggler-icon-line-1').style.marginTop = '-9px';
            document.querySelector('#toggler-icon-line-3').style.transform = 'rotate(-45deg)';
            document.querySelector('#toggler-icon-line-1').style.marginBottom = '-9px';

            document.querySelector('#toggler-icon-line-1').style.width = '30px';
            document.querySelector('#toggler-icon-line-2').style.width = '30px';
            document.querySelector('#toggler-icon-line-3').style.width = '30px';
        }
        
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light border-dark fixed-top bg-white card-body">
                <div className="container">
                    <a href="index.html" className="navbar-brand font-weight-bold" style={{color: '#3c096c'}}>Unsplash API</a>

                    <button className="navbar-toggler" onClick={NavbarToggled} style={{outline: 'none'}} id="navbar-toggler">
                        <div className="toggler-icon-line" id="toggler-icon-line-1"></div>
                        <div className="toggler-icon-line" id="toggler-icon-line-2"></div>
                        <div className="toggler-icon-line" id="toggler-icon-line-3"></div>
                    </button>

                    <div className="navbar-collapse"  id="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <hr/>
                            <li className="nav-item mx-auto">
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <a href="#" className="nav-link" onClick={NavbarToggled} style={{color: '#3c096c'}}>Home</a>
                                </Link>
                            </li>
                            <hr/>
                            <li className="nav-item mx-auto">
                                <Link to="/images" style={{textDecoration: 'none'}}>
                                    <a href="#" className="nav-link" onClick={NavbarToggled} style={{color: '#3c096c'}}>Latest Images</a>
                                 </Link>
                            </li>
                            <hr/>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;