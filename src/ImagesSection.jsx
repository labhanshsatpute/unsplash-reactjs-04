import React from 'react';
import ImageCard from './components/ImageCard';

class ImagesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageArray: []
        }
    }

    FetchData =()=> {
        fetch("https://api.unsplash.com/photos/?client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs")
        .then( (FetchedJson)=> FetchedJson.json())
        .then( (ApiData)=> {
            console.log(ApiData.length);
            for (let i = 0; i < ApiData.length; i++) {
                this.setState({ImageArray: this.state.ImageArray.concat(ApiData[i].urls.small)});
            }
        });
    }

    render() {
        let i = 1;
        return (
            <React.Fragment>
                <section id="ImagesSection" onMouseEnter={this.FetchData}>
                    <br/>
                    <div className="container">
                        <br/>
                        <h2 className="font-weight-bold text-center">Latest Images</h2>
                        <hr/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[i++]}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    };
}

export default ImagesSection;