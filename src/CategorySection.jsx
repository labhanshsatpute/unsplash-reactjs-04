import React from 'react';
import ImageCard from './components/ImageCard';

class CategorySection extends React.Component {

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

        this.setState({SearchTitle: (this.state.searchQuery)});

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
    
    SearchCategory =(category)=> {
        
        this.setState({searchQuery: category});
        this.setState({page : 1});
        setTimeout( ()=> {
            this.SearchImage();
        },100);
        
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
                <section id="CaterorySection">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="container">
                        <br/>
                        <h2 className="font-weight-bold text-center text-color-01">Categories</h2>
                        <hr className="w-25 mx-auto"/>
                        <br/>
                        <div className="container-fluid category-card-slider d-flex">
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Automobile')}>Automobile</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Action')}>Action</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Adventure')}>Adventure</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Sports')}>Sports</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Wallpapers')}>Wallpapers</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Nature')}>Nature</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Architecture')}>Architecture</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Fashion')}>Fashion</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Technology')}>Technology</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Travel')}>Travel</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Texture')}>Texture</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Animals')}>Animals</button>
                            <button className="btn d-inline-block m-2" onClick={ ()=> this.SearchCategory('Quotes')}>Quotes</button>
                        </div>
                    </div>
                    
                    <br/>
                </section>

                {/* Searched Image Section (Start) */}
                <section style={{display: this.state.SearchDataStyle}}>
                    <br/>
                    <div className="container" align="center">
                        <img src="images/not-found.png" style={{display: this.state.ResultStatus}} alt="status-img" id="status-img" className="p-3"/>
                        <h2 className="font-weight-bold text-color-01">{this.state.SearchTitle}</h2>
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
                            <button className="btn mx-1 px-3 py-2 btn-outline-light border-0" onClick={this.PreviousPage}><img src="icons/previous.svg" alt="pervious" className="mt-n1 mr-2"/>{this.state.page - 1}</button>
                            <button className="btn mx-1 px-4 py-2 btn-outline-light border-0">{this.state.page}</button>
                            <button className="btn mx-1 px-3 py-2 btn-outline-light border-0" onClick={this.NextPage}>{this.state.page + 1}<img src="icons/next.svg" alt="next" className="mt-n1 ml-2"/></button>
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

export default CategorySection;