import React from 'react';

const ImageCard =(props)=> {
    return (
        <React.Fragment>
            <div className="p-2">
                <div className="card">
                    <img src={props.ImageAddress} alt="Popular-Image" className="img-fluid"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImageCard;