import React from 'react';
import StComp from 'styled-components';

const StyledPhoto = StComp.div`
    img {
        width: 100%;
    }
`;

function Photo (props) {
    if (props.mediaType === 'image') {
        return (
            <StyledPhoto>
                <img src={props.url} alt={props.alt} />
            </StyledPhoto>
        );
    } else {
        return (
            <StyledPhoto>
                <h2>This app does not support video</h2> 
                <p>
                    <a href="{props.url}">Click here to view the video</a>
                </p>
            </StyledPhoto>
        );
    }
}

export default Photo;