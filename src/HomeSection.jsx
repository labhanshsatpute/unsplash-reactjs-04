import React from 'react';

class HomeSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    SearchImage =(e)=> {
        e.preventDefault();
        let searchQuery = document.getElementById('search').value;
        fetch("https://api.unsplash.com/photos/?client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs").then( (apiJson)=> {
            return apiJson.json();
        }).then( (apiData)=> {
            for (let i = 0; i < 20; i++) {
                console.log(apiData[i].urls.full);              
            }
        });
    }

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default HomeSection;