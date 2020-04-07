import React from 'react';
// import StComp from 'styled-components';

// const StyledDescription = StComp.p`
//     text-align: left;
//     margin-bottom: 2rem;
// `;

function Description (props) {
    return (
        <p class="text-sm text-left text-gray-900">{props.descriptionText}</p>
    );
}

export default Description;