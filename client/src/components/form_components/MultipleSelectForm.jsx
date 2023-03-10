import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const MultipleSelectForm = ({ options, state, setState, label }) => {
    //Code for form from Material UI multiple select documentation
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setState(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return(
      <FormControl sx={{ m: 1, width: '98%' }}>
          <InputLabel>{label}</InputLabel>
          <Select
            multiple
            value={state}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label={label} />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} color={'primary'}/>
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
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

  export default MultipleSelectForm;