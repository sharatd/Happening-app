import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";

const DeveloperTechnologies = ({ topLanguage, technologies }) => {

  const sortedTechnologies = technologies.sort((dev1, dev2) => dev2.rating - dev1.rating)

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

  return(
    <Card style={{ margin: '1em', width: '20em' }}>
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
  )
}

export default DeveloperCard