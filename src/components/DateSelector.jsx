import React from 'react';

function DateSelector (props) {

    return (
        <div className='date-selector'>
            <h3>Get an image from a different date!</h3>
            <input 
                type="date" 
                defaultValue={props.photoDate} 
                max={props.dateToday}
                min="1995-06-16"
                onChange={() => props.setPhotoDate(document.querySelector('input').value)}
                 />
        </div>
    )
}

export default DateSelector