import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HomeSection from './HomeSection';
import LatestImageSection from './LatestImageSection';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {

    AOS.init({
        delay: 300,
        duration: 500
    });
    
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeSection}/>
                    <Route exact path="/images" component={LatestImageSection}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
