import React from 'react';
// import StComp from 'styled-components';

// const StyledH2 = StComp.h2`
//     font-size: 3.5rem;
//     margin-bottom: 1rem;
// `;

function Title (props) {
    return (
        <h2 className="text-2xl text-gray-700 mb-5">{props.photoDate}: {props.titleText}</h2>
    );
}

export default Title;