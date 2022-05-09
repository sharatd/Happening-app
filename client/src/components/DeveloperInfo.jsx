import React from 'react';
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";

import AttributeSliderGroup from './AttributeSliderGroup';

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
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2em' }}>
          <div style={{width: 'auto' }}>
            <Avatar
              alt={developer.name + ' avatar'}
              sx={{ bgcolor: deepPurple[500], height: 80, width: 80 }}
            >
              { developer.name.substr(0, 1) } 
            </Avatar>
          </div>
          <div style={{ marginLeft: '1em' }}>
            <div style={{display: 'flex'}}>
              <h2 style={{ margin: 0}}>{ developer.name }</h2>
              <Chip label={developer.school}/>
            </div>
            <p style={{ margin: 0}}>{ developer.email }</p>
            <p style={{ margin: 0}}>Available { developer.timeCommitment }hr/wk </p>
          </div>
        </div>
        <AttributeSliderGroup attributes={ developer.technologies.map((technology) => [technology.name, technology.rating / 7]) }/>

        <Typography>Languages:</Typography>
        {developer.technologies.sort((dev1, dev2) => dev2.rating - dev1.rating).map((technology, index) => (
          <Chip key={index} label={`${technology.name} ${technology.rating}★`}/>
        ))}
        <br/>
        <Typography variant={"body"}>
          Projects:
          {developer.projects.map((project, index) => (
            <a href="/" key={index}>{project.name}</a>
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
