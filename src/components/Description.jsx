import React from 'react';
import StComp from 'styled-components';

const StyledDescription = StComp.p`
    text-align: left;
    margin-bottom: 2rem;
`;

function Description (props) {
    return (
        <StyledDescription>{props.descriptionText}</StyledDescription>
    );
}

export default Description;