import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";


const FilterForm = ({ showFilterForm, onClose, filters, setFilters, filterOptions }) => {
  const addFilter = (f) => setFilters([...filters, f]);
  const removeFilter = (f) => setFilters(filters.filter(selected => selected !== f));
  
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
        <p>something</p>
      </Box>
    </Modal>
  )
};

export default FilterForm;  
