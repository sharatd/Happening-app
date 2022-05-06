import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const DeveloperInfo = ({ developer }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h5"}>{developer.name}</Typography>
        <Typography variant={"subtitle1"}>{developer.email}</Typography>
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
      </CardContent>
  </Card>
  );
}

export default DeveloperInfo;
