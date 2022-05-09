import React from 'react';

const AttributeSlider = ({ label, percentage}) => {
    return (
        <div style={{ display: 'flex'}}>
            <span>{ label }</span>
            <div style={{ backgroundColor: 'grey'}}>
                <div style={{ backgroundColor: 'blue', width: Math.round(percentage * 100).toString() + '%'}}>

                </div>
            </div>
        </div>
    );
}