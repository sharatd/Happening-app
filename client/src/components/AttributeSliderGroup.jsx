import React from 'react';

/**
 * 
 * @param {Array[string, number]} attributes
 * @returns 
 */
const AttributeSliderGroup = ({ attributes, backgroundColor = 'lightgray', sliderColor = 'lightblue' }) => {
  
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(auto-fill, 1em)', gridTemplateColumns: 'max-content 7em', rowGap: '.4em', columnGap: '.4em' }}>
      {attributes.map(([label, percentage]) => (
        <>
          <div>
            { label }
          </div>
          <div style={{ width: '100%', height: '100%', backgroundColor: backgroundColor }}>
            <div
              style={{
                backgroundColor: sliderColor,
                height: '100%',
                width: Math.round(percentage * 100).toFixed(0) + '%'
              }}
            />
          </div>
        </>
      ))} 
    </div>
  );
}

export default AttributeSliderGroup;
