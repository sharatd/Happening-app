import React from "react";
//import BasicSelectForm from "./form_components/BasicSelectForm";
//import MultipleSelectForm from "./form_components/MultipleSelectForm";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
//import Button from '@mui/material/Button';

//This form will allow admins to add a dev to a project. Todo: call the useEffect to get project and render a list of projects
//to add the developer to 
const AddDevToProjectForm = ({ showProjectForm, onClose }) => {

  return(
    <Modal open={ showProjectForm } onClose={ onClose }>
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
        <h1>TODO: Add list of projects and buttons to add dev to project</h1>
      </Box>
    </Modal>
  )
};

export default AddDevToProjectForm;