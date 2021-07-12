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
            ResultStatus: 'none'
        }
    }

    SearchImage =()=> {

        this.setState({ImageArray: []});
        this.setState({DownloadArray: []});

        this.setState({SearchTitle: ('Showing result for ' + this.state.searchQuery)});

        const url = "https://api.unsplash.com/search/photos?page=" + this.state.page +"&query=";
        const id = "&client_id=qqHpKrnb6hMyEeX8OIgZc72EpWoCR9jM6yfZXtXruo8";
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
                this.setState({ResultStatus: 'block'});
            }
            else {
                this.setState({ResultStatus: 'none'});
                console.log(ApiData);
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
            },100);
        }
    }

    KeyUp = () => {
        let searchText = document.getElementById('search-text').value;
        if (searchText == "") {
            alert(" Please Enter Something ");
        }
        else {
            this.setState({searchQuery: searchText});
            this.setState({page : 1});
            setTimeout( ()=> {
                this.SearchImage();
            },100);
        }
    }

    NextPage =()=> {
        let PageIncrement = (this.state.page) + 1;
        this.setState({page : PageIncrement});
        setTimeout( ()=> {
            this.SearchImage();
        },100);
    }

    PreviousPage =()=> {
        if (this.state.page > 1) {
            let PageDrecement = (this.state.page) - 1;
            this.setState({page : PageDrecement});
            setTimeout( ()=> {
                this.SearchImage();
            },100);
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
                        <div className="card-body text-left pb-0">
                            <h1 className="text-color-01 font-weight-bold">Search Images</h1>
                            <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Alias vitae ullam aut. Sapiente numquam culpa assumenda id ullam.</p>
                        </div>
                        <div className="card-body text-left">
                            <form className="form-group" id="search-box" onSubmit={this.SearchFormSubmit}>
                                <div className="input-group-append">
                                    <img src="icons/search.svg" alt="search" className="btn"/>
                                    <input type="text" name="search" onKeyUp={this.KeyUp} id="search-text" className="input-group-text" placeholder="Search here"/>
                                    <button type="submit" id="searchButton" className="btn d-none"></button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <br/>
                </section>
                {/* Search Image Section (End) */}

                {/* Searched Image Section (Start) */}
                <section style={{display: this.state.SearchDataStyle}}>
                    <br/>
                    <br/>
                    <div className="container" align="center">
                        <img src="images/not-found.png" style={{display: this.state.ResultStatus}} alt="status-img" id="status-img" className="status-img"/>
                        <h2 className="font-weight-bold">{this.state.SearchTitle}</h2>
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
                            <button className="btn mx-1 px-3 py-2 button" onClick={this.PreviousPage}><img src="icons/previous.svg" alt="pervious" className="mt-n1 mr-2"/>{this.state.page - 1}</button>
                            <button className="btn mx-1 px-4 py-2 button">{this.state.page}</button>
                            <button className="btn mx-1 px-3 py-2 button" onClick={this.NextPage}>{this.state.page + 1}<img src="icons/next.svg" alt="next" className="mt-n1 ml-2"/></button>
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