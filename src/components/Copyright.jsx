import React from 'react';

function Copyright (props) {
    return (
        <p className="text-base m-3 text-center text-gray-500">(c) {props.copyrightOwner}</p>
    );
}

export default Copyright;