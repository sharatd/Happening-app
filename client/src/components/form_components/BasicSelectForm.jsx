import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const BasicSelectForm = ({options, state, setState, label }) => {
    const handleChange = (event) => {
      setState(event.target.value);
    }
  
    return(
      <FormControl sx={{ m: 1, width: '98%' }}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={state}
          label={label}
          onChange={handleChange}
        >
          {options.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    )
}

export default BasicSelectForm;