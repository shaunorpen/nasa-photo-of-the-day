import React from 'react';
// import StComp from 'styled-components';

// const StyledDateSelector = StComp.div`
//     border: 1px solid grey;
//     padding: 1rem;
  
//     h3 {
//         font-size: 2rem;
//         margin-bottom: 1rem;
//     }
  
//     input {
//         font-size: 2rem;
//     }
// `;

function DateSelector (props) {

    return (
        <div>
            <h3 className="text-lg">Get an image from a different date!</h3>
            <input 
                type="date" 
                defaultValue={props.photoDate} 
                max={props.dateToday}
                min="1995-06-16"
                onChange={() => props.setPhotoDate(document.querySelector('input').value)}
                className="text-base text-gray-700 mt-4"
                 />
        </div>
    )
}

export default DateSelector