import React from 'react';
import ImageCard from './components/ImageCard';

class HomeSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageArray: [],
            DownloadArray: [],
            SearchDataStyle: 'none'
        }
    }

    SearchImage =(e)=> {

        this.setState({ImageArray: []});
        this.setState({DownloadArray: []});

        e.preventDefault();

        let searchQuery = document.getElementById('search').value;
        const url = "https://api.unsplash.com/search/photos?page=1&query=";
        const id = "&client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs"
        const fetchUrl = (url + searchQuery + id);

        fetch(fetchUrl).
        then( (FetchedJson)=> {
            return FetchedJson.json();
        }).then( (ApiData)=> {
            for (let i = 0; i < ApiData.results.length; i++) {
                this.setState({ImageArray: this.state.ImageArray.concat(ApiData.results[i].urls.small)});
                this.setState({DownloadArray: this.state.DownloadArray.concat(ApiData.results[i].links.download)});
            }            
        }).catch( (error)=> {
            throw(error);
        });

        this.setState({SearchDataStyle: 'block'});
    }

    render() {
        let ImageCount = 0;
        let DownloadCount = 0;
        return (
            <React.Fragment>

                {/* Search Image Section (Start) */}
                <section id="HomeSection">
                    <br/>
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="card-body text-left pb-0">
                            <h1 className="text-white">Search Images</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, odit minus accusamus sequi impedit deserunt consectetur totam et obcaecati fugit. Alias vitae ullam aut. Sapiente numquam culpa assumenda id ullam.</p>
                        </div>
                        <div className="card-body text-left">
                            <form className="form-group" id="search-box" onSubmit={this.SearchImage}>
                                <div className="input-group-append">
                                    <input type="text" name="search" id="search" className="input-group-text w-100 text-left font-weight-bold" placeholder="Search here"/>
                                    <img src="icons/search.svg" alt="search" className="input-group-text"/>
                                </div>
                                <button id="searchButton" className="btn my-3 px-5 font-weight-bold">Search</button>
                            </form>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#5603ad" fill-opacity="1" d="M0,64L1440,192L1440,320L0,320Z"></path></svg>
                    <br/>
                </section>
                {/* Search Image Section (End) */}

                {/* Searched Image Section (Start) */}
                <section style={{display: this.state.SearchDataStyle}}>
                    <br/>
                    <div className="container">
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
                {/* Searched Image Section (Start) */}
            </React.Fragment>
        );
    }
}

export default HomeSection;