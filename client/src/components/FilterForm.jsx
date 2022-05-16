import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const FilterForm = ({ showFilterForm, onClose, filters, setFilters}) => {
  const technologyOptions = ['Swift', 'React', 'React Native', 'JavaScript', 'HTML', 
                            'CSS', 'Flask', 'Django', 'nodeJS', 'Python', 'TensorFlow',
                            'PyTorch', 'AWS', 'Firebase', 'SQL']
  
  const topicOptions = ['App Dev', 'Web App Dev', 'Web Dev']

  const handleChange = (event) => {
    const {
      target: {technology}
    } = event;
    console.log(event.target.value)
    setFilters({...filters, technologies: [...filters.technologies, ...event.target.value]});
  };
  console.log(filters)


  //stolen styling code
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

  /*function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }*/

  
  return(
    <Modal open={ showFilterForm } onClose={ onClose }>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
       <FormControl fullWidth>
        <InputLabel>Technologies</InputLabel>
        <Select
          multiple
          value={filters.technologies}
          label="Technology"
          onChange={handleChange}
          input={<OutlinedInput label="Technology" />}
          MenuProps={MenuProps}
        >
          {technologyOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
    </Modal>
  )
};

export default FilterForm;