import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HomeSection from './HomeSection';
import ImagesSection from './ImagesSection';

function App() {
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
