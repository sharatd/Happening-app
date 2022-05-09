import React from 'react';
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";

const DeveloperInfo = ({ show, onClose, developer }) => {
  return (
    <Modal open={show} onClose={onClose}>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{width: 'auto' }}>
            <Avatar
              alt={developer.name + ' avatar'}
              sx={{ bgcolor: deepPurple[500], height: 80, width: 80 }}
            >
              { developer.name.substr(0, 1)}
            </Avatar>
          </div>
          <div style={{ marginLeft: '1em' }}>
            <h2>{ developer.name }</h2>
            <p>{ developer.email }</p>
            <p>Available { developer.timeCommitment }hr/wk </p>
          </div>
        </div>
        <Typography>{developer.school}</Typography>
        <Typography>Languages:</Typography>
        {developer.technologies.sort((dev1, dev2) => dev2.rating - dev1.rating).map((technology, index) => (
          <Chip key={index} label={`${technology.name} ${technology.rating}★`}/>
        ))}
        <br/>
        <Typography variant={"body"}>
          Projects:
          {developer.projects.map((project, index) => (
            <a href="/">{project.name}</a>
          ))}
        </Typography>
        <br/>
        <Chip label={developer.availability ? "Available" : "Unavailable"}></Chip>
        <br/>
        <Typography>Available for {developer.timeCommitment} hours per week</Typography>
        <Typography>Preferred Topics:</Typography>
        {developer.preferredTopics.map((topic, index) => (
          <Chip key={index} label={topic}/>
        ))}
        <Typography>Preferred Languages</Typography>
        {developer.preferredLanguages.map((language, index) => (
          <Chip key={index} label={language}/>
        ))}

        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default DeveloperInfo;
