import React from 'react';
import ImageCard from './components/ImageCard';

class LatestImageSection extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ImageArray: [],
            DownloadArray: [],
        }
    }

    componentDidMount() {
        const url = "https://api.unsplash.com/photos/?client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs";
        fetch(url)
        .then( (FetchedJson)=> FetchedJson.json())
        .then( (ApiData)=> {
            for (let i = 0; i < ApiData.length; i++) {
                this.setState({ImageArray: this.state.ImageArray.concat(ApiData[i].urls.small)});
                this.setState({DownloadArray:this.state.DownloadArray.concat(ApiData[i].links.download)});
            }
            this.setState({isLoaded: true});
        }).catch( (error)=> {
            throw(error);
        });
    }

    render() {
        let ImageCount = 1;
        let DownloadCount = 1;
        return (
            <React.Fragment>
                <section id="ImagesSection">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="container px-4">
                        <br/>
                        <h2 className="font-weight-bold text-center text-color-01">Latest Images</h2>
                        <hr className="w-25 mx-auto"/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 p-0">
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                                <ImageCard ImageAddress={this.state.ImageArray[ImageCount++]} DownloadLocation={this.state.DownloadArray[DownloadCount++]}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        )
    }
}

export default LatestImageSection;