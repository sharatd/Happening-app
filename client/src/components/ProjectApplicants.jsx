import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ProjectDeveloperCard from "./ProjectDeveloperCard";

const ProjectApplicants = ({ project, onClose, showProjectApplicants }) => {

  return(
    <Modal open={showProjectApplicants} onClose={ onClose }>
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
        <h2 style={{ textAlign: 'center' }}>{project.developers.length === 0 ? 'No Developers' : 'Developers:'}</h2>
        <div style={{display:'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
          {project.developers.map((developer, index) => (
            <ProjectDeveloperCard developer={developer}/>
          ))}
        </div>
      </Box>
    </Modal>
  )
}

export default ProjectApplicants