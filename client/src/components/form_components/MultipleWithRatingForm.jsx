import React, { useState } from "react";
import BasicSelectForm from "./BasicSelectForm";
import Button from '@mui/material/Button';
import Chip from "@mui/material/Chip";

const MultipleWithRatingForm = ({ options, state, setState, name, pluralName }) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedRating, setSelectedRating] = useState('1');
    const addObject = () => {
        const newItem = {name: selectedItem, rating: selectedRating}
        if (state.some(item => item.name === selectedItem)) {
          const updatedList = state.map(item => item.name === selectedItem ? {...item, rating: selectedRating} : item)
          setState(updatedList)
        } else {
          const updatedList = [...state, newItem]
          setState(updatedList)
        }
      }
    
      const removeObject = (e) => {
        const elem = e.currentTarget
        const itemName = elem.dataset.itemId
        const newArray = state.filter(item => item.name !== itemName)
        setState(newArray)
      }

    return(
        <div style={{margin: '1em 0 1em 0'}}>
        <div style={{margin: '1em 0 0 1em'}}>
          <h3 style={{margin: '0'}}>{`Add/Remove ${pluralName} (1 - lowest, 7 - highest)`}</h3>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1em'}}>
            <h5>Current {pluralName}: </h5>
            {state.map((item, index) => <Chip key={index} data-item-id={item.name} onClick={(e) => removeObject(e)} label={`X ${item.name} ${item.rating}★`}/>)}
          </div>
        </div>
        <BasicSelectForm options={options} state={selectedItem} setState={setSelectedItem} label={`${name}`}/>
        <BasicSelectForm options={[...Array(7).keys()].map( i => i+1)} state={selectedRating} setState={setSelectedRating} label={`Rating for ${name}`}/>
        <Button onClick={() => addObject()} style={{margin: '0.5em 0 1em 1em', color: 'white', backgroundColor: 'blue'}}>Update {pluralName}</Button>
      </div>
    )
}

export default MultipleWithRatingForm;