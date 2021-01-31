import React from 'react';
import ImageCard from './components/ImageCard';

class ImagesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageArray: []
        }
    }


    render() {

        fetch("https://api.unsplash.com/photos/?client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs")
        .then( (FetchedJson)=> FetchedJson.json())
        .then( (ApiData)=> {
            for (let i = 0; i < ApiData.length; i++) {
                this.setState({ImageArray: this.state.ImageArray.concat(ApiData[i].urls.small)});
            }
        });

        return (
            <React.Fragment>
                <section id="ImagesSection">
                    <br/>
                    <div className="container" >
                        <br/>
                        <h3 className="font-weight-bold">Popular Images</h3>
                        <br/>
                        <div className="d-flex flex-lg-grow-0 flex-md-grow-1">
                            <div className="flex-column">
                                <ImageCard ImageAddress={this.state.ImageArray[1]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[2]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[3]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[4]}/>
                            </div>
                            <div className="flex-column">
                                <ImageCard ImageAddress={this.state.ImageArray[4]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[5]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[6]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[7]}/>
                            </div>
                            <div className="flex-column">
                                <ImageCard ImageAddress={this.state.ImageArray[8]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[9]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[10]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[11]}/>
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