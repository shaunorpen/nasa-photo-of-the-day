import React from 'react';
import StComp from 'styled-components';

const StyledH1 = StComp.h1`
    font-size: 5rem;
    margin-bottom: 1rem;
`;

function Header (props) {
    return (
        <StyledH1>Astronomy Photo of the Day</StyledH1>
    );
}

export default Header;