import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProjectApplicants = ({ project, onClose }) => {

    return(
        <Modal open={showDeveloperInfo} onClose={() => setShowDeveloperInfo(false)}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Button onClick={() => setShowDeveloperInfo(false)}>Close</Button>
        </Box>
      </Modal>
    )
}