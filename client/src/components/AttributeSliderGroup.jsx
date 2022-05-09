import React from 'react';

/**
 * 
 * @param {Array[string, number]} attributes
 * @returns 
 */
const AttributeSliderGroup = ({ attributes }) => {
  
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(auto-fill, 120px)', gridTemplateColumns: 'max-content 10em'}}>
      {attributes.map(([label, percentage]) => (
        <>
          <div>
            { label }
          </div>
          <div style={{ width: '100%', height: '1em', backgroundColor: 'grey' }}>
            <div
              style={{
                backgroundColor: 'blue',
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
