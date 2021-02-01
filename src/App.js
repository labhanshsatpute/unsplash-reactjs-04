import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HomeSection from './HomeSection';
import ImagesSection from './ImagesSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

    AOS.init({
        delay: 300,
        duration: 500
    });
    
    return (
        <React.Fragment>
            <Navbar/>
            <main>
                <HomeSection/>
                <ImagesSection/>
            </main>
        </React.Fragment>
    );
}

export default App;
