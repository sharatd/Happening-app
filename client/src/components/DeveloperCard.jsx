import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";

const DeveloperCard = ({ developer }) => {

  return(
    <Card style={{ margin: '1em', width: 'fit-content' }}>
      <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Avatar
          alt={developer.name + ' avatar'}
          sx={{ bgcolor: deepPurple[500] }}
        >
          { developer.name.substr(0, 1)}
        </Avatar>
        <Typography variant={"h5"}>{ developer.name }</Typography>
        <Typography>{developer.school}</Typography>
        <Typography>Languages:</Typography>
        <div>
          {
            developer.technologies.sort((dev1, dev2) => dev2.rating - dev1.rating).map((technology, index) => (
              <Chip key={index} label={`${technology.name} ${technology.rating}★`}/>
            ))
          }
        </div>
        <Typography>Preferred Topics:</Typography>
        <div>
          {developer.preferredTopics.map((topic, index) => (
            <Chip key={index} label={topic}/>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DeveloperCard