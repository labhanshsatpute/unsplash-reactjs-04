import React, { useState } from 'react';

const ImageCard =(props)=> {

    const [hide, show] = useState('none');

    const ShowCardBody =()=> {
        show('block');
    }
    const HideCardBody =()=> {
        show('none');
    }

    return (
        <React.Fragment>            
            <div className="p-2" data-aos="zoom-in">
                <div className="card ImageCard" onMouseEnter={ShowCardBody} onMouseLeave={HideCardBody}>
                    <img src={props.ImageAddress} alt="Card-Image" className="img-fluid"/>
                    <div className="card-body card-body-2 bg-transparent w-100" style={{display: hide}}>
                        <a href={props.DownloadLocation} target="_blank" className="btn btn-outline-light border-0">Download<img src="icons/download.svg" alt="download" className="ml-1"/></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImageCard;