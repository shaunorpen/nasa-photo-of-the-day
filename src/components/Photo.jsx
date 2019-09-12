import React from 'react';

function Photo (props) {
    if (props.mediaType === 'image') {
        return (
            <div>
                <img src={props.url} alt={props.alt} />
            </div>
        );
    } else {
        return (
            <div>
                <h2>Video is not supported.</h2> 
            </div>
        );
    }
}

export default Photo;