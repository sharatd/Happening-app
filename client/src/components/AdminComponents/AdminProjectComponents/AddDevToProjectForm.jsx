import React from "react";
import { useProjects } from '../../../utils/api';
import ProjectCardAddDev from './ProjectCardAddDev';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

//This form will allow admins to add a dev to a project. Todo: call the useEffect to get project and render a list of projects
//to add the developer to 
const AddDevToProjectForm = ({ showProjectForm, onClose, developer }) => {
  let [projects, loading, error] = useProjects();
    
  if (error) return <div></div>;
  if (loading) return <div></div>;

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
        <div style={{ diplsay: 'flex', flexDirection: 'column' }}>
        {projects.map((project, index) => (
          <ProjectCardAddDev key={index} project={project} developer={developer}/>
        ))}
        </div>
      </Box>
    </Modal>
  )
};

export default AddDevToProjectForm;