import React from 'react';

class CategorySection extends React.Component {
    render() {
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
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                            <button className="btn py-4 px-5 m-2">Automobile</button>
                        </div>
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    }
} 

export default CategorySection;