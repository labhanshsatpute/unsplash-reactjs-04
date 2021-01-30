import React from 'react';

class ImagesSection extends React.Component {

    FetchImages =()=> {
        fetch("https://api.unsplash.com/photos/?client_id=m7Xi0OEdk9W3P6ujqGuTWYrvKGLqNaLAC1Cg1b3GFOs").then( (FetchedJson)=> {
            return FetchedJson.json();
        }).then( (ImagesData)=> {
            for (let i = 0; i < 10; i++) {
                console.log(ImagesData);         
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <section id="ImagesSection" onLoadedData={this.FetchImages}>
                    <br/>
                    <div className="container">
                        <br/>
                        <h3 className="font-weight-bold">Popular Images</h3>
                        <br/>

                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    };
}

export default ImagesSection;