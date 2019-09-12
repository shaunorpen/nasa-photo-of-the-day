import React from 'react';
import StComp from 'styled-components';

const StyledH2 = StComp.h2`
    font-size: 3.5rem;
    margin-bottom: 1rem;
`;

function Title (props) {
    return (
        <StyledH2>{props.photoDate}: {props.titleText}</StyledH2>
    );
}

export default Title;