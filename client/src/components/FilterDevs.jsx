import React, { useState } from "react";
import Chip from "@mui/material/Chip";

const FilterButton = ({ text, color, ...props }) => {
  return(
      //<button style={{margin: ".2em", border: 'none'}} className={`badge rounded-pill bg-${variant}`} {...props}>{ text }</button>
      <Chip label={ text } {...props} color={ color }/>
  )
}

const FilterDevs = ({ filters, setFilters, filterOptions }) => {
  const [expanded, setExpanded] = useState(false);

  const addFilter = (f) => setFilters([...filters, f]);
  const removeFilter = (f) => setFilters(filters.filter(selected => selected !== f));

  return (
    <div style={{ background: 'white', border: "solid 1px #333", borderRadius: '5px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{flexGrow: '1'}}>
          {
            (filters.length > 0) ? (
              filters.map((f, idx) => <FilterButton key={idx} text={"✕ "+f} color={ 'success' }onClick={() => removeFilter(f)}/>)
            ) : ( 
              <button 
                style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left'}}
                onClick={() => setExpanded(!expanded)}
              >
                Add filters...
              </button>   
            )
          }
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{ background: 'none', border: 'none', borderLeft: 'solid 1px #333', flexGrow: '0'}}  
        >
          { expanded ? '▲' : '▼'}
        </button>
      </div>
          
      {
        (expanded) && (
          <div style={{ borderTop: '1px solid #333' }}>
            {
              filterOptions.filter(option => !filters.includes(option)).map((option, idx) => (
                <FilterButton key={idx} text={ option } color={ 'default' } onClick={() => addFilter(option)} />))
            }
          </div>
        )
      } 

    </div>
  );
};

export default FilterDevs;