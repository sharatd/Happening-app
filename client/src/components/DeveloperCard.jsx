import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import DeveloperInfo from "./DeveloperInfo";

const DeveloperTechnologies = ({ topLanguage, technologies }) => {
  const sortedTechnologies = technologies.sort((dev1, dev2) => dev2.rating - dev1.rating).slice(0, 6)

  return(
    <div>      
      <Typography style={{textAlign:'center' }}>Technologies</Typography>
      <div style={{display: 'flex', justifyContent: 'center', flexFlow: 'wrap'}}>
          {
            sortedTechnologies.map((technology, index) => (
             <Chip style={{margin: '0.1em 0.2em'}} color={technology.name === topLanguage ? 'primary': 'default'} key={index} label={`${technology.name} ${technology.rating}★`}/>
            ))
          }
      </div>
    </div>
  )
}

const DeveloperCard = ({ developer }) => {
  const [showDeveloperInfo, setShowDeveloperInfo] = useState(false);

  return(
    <>
      <Card style={{ margin: '1em', width: '20em' }} onClick={() => {setShowDeveloperInfo(true)}}>
        <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Avatar
            alt={developer.name + ' avatar'}
            sx={{ bgcolor: deepPurple[500] }}
          >
            { developer.name.substr(0, 1)}
          </Avatar>
          <Typography variant={"h5"}>{ developer.name }</Typography>
          <Typography>{developer.school}</Typography>
          <DeveloperTechnologies topLanguage={developer.topLanguage} technologies={developer.technologies}/>
          <Typography>Preferred Topics:</Typography>
          <div>
            {developer.preferredTopics.map((topic, index) => (
              <Chip style={{margin: '0.1em 0.2em'}} key={index} label={topic}/>
            ))}
          </div>
        </CardContent>
      </Card>
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
          <DeveloperInfo developer={developer}></DeveloperInfo>
          <Button onClick={() => setShowDeveloperInfo(false)}>Close</Button>
        </Box>
      </Modal>
    </>
  )
}

export default DeveloperCard