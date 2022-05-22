import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import DeveloperInfo from "./DeveloperInfo";
import AddDevToProjectForm from "./AddDevToProjectForm";

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
  const [showProjectForm, setShowProjectForm] = useState(false);

  return(
    <>
      <Card style={{ margin: '1em', width: '20em' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Chip style={{marginLeft: 'auto'}} label={developer.level}/>
          <Avatar
            alt={developer.name + ' avatar'}
            sx={{ bgcolor: '#263448' }}
          >
            { developer.name.substr(0, 1)}
          </Avatar>
          <Typography variant={"h5"}>{ developer.name }</Typography>
          <Typography>{developer.school}</Typography>
          <DeveloperTechnologies topLanguage={developer.topLanguage} technologies={developer.technologies}/>
          <Typography>Preferred Topics:</Typography>
          <div>
            {developer.preferredTopics.map((topic, index) => (
              <Chip style={{margin: '0.1em 0.2em'}} key={index} label={topic.name}/>
            ))}
          </div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em', gap: '1em', justifyContent: 'space-between'}}>
            <Button onClick={() => {setShowDeveloperInfo(true)}} style={{ color: 'white', backgroundColor: 'blue'}}>Info</Button>
            <Button onClick={() => {setShowProjectForm(true)}} style={{ color: 'white', backgroundColor: 'green'}}>Add To Project</Button>
          </div>
        </CardContent>
      </Card>
      
      <AddDevToProjectForm showProjectForm={showProjectForm} onClose={() => setShowProjectForm(false)}/>
      {
        showDeveloperInfo && (
          <DeveloperInfo
            developer={developer}
            show={showDeveloperInfo}
            onClose={() => setShowDeveloperInfo(false)}
          />
        )
      }
    </>
  )
}

export default DeveloperCard