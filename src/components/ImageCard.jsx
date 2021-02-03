import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';

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
            <div className="p-2" data-aos="fade-up">
                <div className="card ImageCard" onMouseEnter={ShowCardBody} onMouseLeave={HideCardBody}>
                    <img src={props.ImageAddress} alt="Card-Image" className="img-fluid"/>
                    <div className="card-body bg-transparent w-100" style={{display: hide}}>
                        <a href={props.DownloadLocation} target="_blank" className="btn btn-primary">Download<img src="icons/download.svg" alt="download" className="ml-1"/></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ImageCard;