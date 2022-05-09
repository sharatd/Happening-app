import React from 'react';

/**
 * 
 * @param {Array[string, number]} attributes
 * @returns 
 */
const AttributeSliderGroup = ({ attributes }) => {
  const labels = attributes.map(([label,]) => label);
  const percentages = attributes.map(([, percentage]) => percentage);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <div>
        {
          labels.map((label, idx) => (
            <div key={idx}>{ label }</div>
          ))
        }
      </div>

      <div style={{ width: '10em', paddingLeft: '1em' }}>
        {
          percentages.map((percentage, idx) => (
            <div key={idx} style={{ width: '100%' }}>
              <div
                style={{
                  backgroundColor: 'blue',
                  height: '100%',
                  width: Math.round(percentage * 100).toFixed(0) + '%'
                }}
              />
            </div>
          ))
        }
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', width: '10em' }}>
      <span>{ label }</span>

      <div style={{ backgroundColor: 'grey', flex: 1, marginLeft: '0.2em' }}>
        <div
          style={{
            backgroundColor: 'blue',
            height: '100%',
            width: Math.round(percentage * 100).toFixed(0) + '%'
          }}
        />
      </div>
    </div>
  );
}

export default AttributeSliderGroup;
