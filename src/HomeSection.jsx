import React from 'react';
import ImageCard from './components/ImageCard';

class HomeSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageArray: [],
            DownloadArray: [],
            page: 1,
            searchQuery: '',
            SearchDataStyle: 'none',
            SearchImageStyle: 'none',
            SearchTitle: '',
            ResultStatusImg: 'images/showing-result.png'
        }
    }

    SearchImage =()=> {

        this.setState({ImageArray: []});
        this.setState({DownloadArray: []});

        this.setState({SearchTitle: ('Showing result for ' + this.state.searchQuery)});

        const url = "https://api.unsplash.com/search/photos?page=" + this.state.page +"&query=";
        const id = "&client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs"
        const fetchUrl = (url + this.state.searchQuery + id);

        fetch(fetchUrl).
        then( (FetchedJson)=> {
            return FetchedJson.json();
        }).then( (ApiData)=> {
            console.log(ApiData.results.length);
            if (ApiData.results.length == 0) {
                this.setState({SearchTitle: 'Opps...! Result not found!'});
                this.setState({SearchDataStyle: 'block'});
                this.setState({SearchImageStyle: 'none'});
                this.setState({ResultStatusImg: 'images/not-found.png'});
            }
            else {
                this.setState({ResultStatusImg: 'images/showing-result.png'});
                for (let i = 0; i < ApiData.results.length; i++) {
                    this.setState({ImageArray: this.state.ImageArray.concat(ApiData.results[i].urls.small)});
                    this.setState({DownloadArray: this.state.DownloadArray.concat(ApiData.results[i].links.download)});
                }  
                this.setState({SearchDataStyle: 'block'});
                this.setState({SearchImageStyle: 'block'});
            }    
        }).catch( (error)=> {
            throw(error);
        });
        
        
        
    }

    SearchFormSubmit =(e)=> {
        e.preventDefault();
        let searchText = document.getElementById('search-text').value;
        if (searchText == "") {
            alert(" Please Enter Something ");
        }
        else {
            this.setState({searchQuery: searchText});
            this.setState({page : 1});
            setTimeout( ()=> {
                this.SearchImage();
            },300);
        }
    }

    NextPage =()=> {
        let PageIncrement = (this.state.page) + 1;
        this.setState({page : PageIncrement});
        setTimeout( ()=> {
            this.SearchImage();
        },300);
    }

    PreviousPage =()=> {
        if (this.state.page > 1) {
            let PageDrecement = (this.state.page) - 1;
            this.setState({page : PageDrecement});
            setTimeout( ()=> {
                this.SearchImage();
            },300);
        }
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
                            <h1 className="text-color-02">Search Images</h1>
                            <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, odit minus accusamus sequi impedit deserunt consectetur totam et obcaecati fugit. Alias vitae ullam aut. Sapiente numquam culpa assumenda id ullam.</p>
                        </div>
                        <div className="card-body text-left">
                            <form className="form-group" id="search-box" onSubmit={this.SearchFormSubmit}>
                                <div className="input-group-append">
                                    <input type="text" name="search" id="search-text" className="input-group-text w-100 text-left font-weight-bold" placeholder="Search here"/>
                                    <img src="icons/search.svg" alt="search" className="input-group-text"/>
                                </div>
                                <button type="submit" id="searchButton" className="btn my-3 px-5 font-weight-bold btn-outline-light">Search</button>
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
                    <br/>
                    <div className="container" align="center">
                        <img src={this.state.ResultStatusImg} alt="status-img" id="status-img" className="p-3"/>
                        <h2>{this.state.SearchTitle}</h2>
                    </div>
                    <div className="container px-4" style={{display: this.state.SearchImageStyle}}>
                        <hr/>
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
                        <hr/>
                        <p className="text-center font-weight-bold">Pages</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn mx-1 px-3 py-2 btn-outline-light border-0 " onClick={this.PreviousPage}><img src="icons/previous.svg" alt="pervious" className="mt-n1 mr-2"/>{this.state.page - 1}</button>
                            <button className="btn mx-1 px-4 py-2 btn-outline-light border-0 ">{this.state.page}</button>
                            <button className="btn mx-1 px-3 py-2 btn-outline-light border-0 " onClick={this.NextPage}>{this.state.page + 1}<img src="icons/next.svg" alt="next" className="mt-n1 ml-2"/></button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </section>
                {/* Searched Image Section (Start) */}
            </React.Fragment>
        );
    }
}

export default HomeSection;