import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    window.onscroll = function (e) {
        if (window.scrollY > 100) {
            document.getElementById('navbar').classList.add('active');
            document.getElementById('floating-buttons').classList.add('active');
        }
        else {
            document.getElementById('navbar').classList.remove('active');
            document.getElementById('floating-buttons').classList.remove('active');
        }
    }

    return (
        <React.Fragment>

            {/* Navigation Bar (Start) */}
            <nav className="navbar navbar-expand fixed-top card-body" id="navbar">
                <div className="container">
                    <Link to="/" style={{textDecoration: 'none'}}><a href="#" className="navbar-brand heading font-weight-bolder text-dark">Stock Images</a></Link>
                    
                    <div className="dropdown">
                        <button className="dropdown-toggler" data-toggle="dropdown" id="navbar-toggler">
                        <i class="fas fa-bars fa-2x"></i>
                        </button>
                        <div className="dropdown-menu shadow">
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <button className="dropdown-item btn rounded-0">Home</button>
                            </Link>
                            <Link to="/images" style={{textDecoration: 'none'}}>
                                <button className="dropdown-item btn rounded-0">Latest Images</button>
                            </Link>
                            <Link to="/categories" style={{textDecoration: 'none'}}>
                                <button className="dropdown-item btn rounded-0">Categories</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navigation Bar (Start) */}

            {/* Floating Button (Start) */}
            <div className="floating-button" id="floating-buttons">
                <button className="btn button shadow" onClick={()=>{
                    window.scroll({ top: 0, behavior: 'smooth'});
                }}><i class="fas fa-arrow-up"></i></button>
            </div>
            {/* Floating Button (End) */}


        </React.Fragment>
    );
};

export default Navbar;