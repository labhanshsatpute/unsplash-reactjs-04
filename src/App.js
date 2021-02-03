import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import HomeSection from './HomeSection';
import ImagesSection from './ImagesSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImagePreview from './components/ImagePreview';
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
                    <Route exact path="/images" component={ImagesSection}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
