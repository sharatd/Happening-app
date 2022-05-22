import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeveloperInfo from "./DeveloperInfo";

const ProjectDeveloperCard = ({ developer, projectId }) => {
  const [showDeveloperInfo, setShowDeveloperInfo] = useState(false);

  const handleDeleteDeveloper = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `https://xenah-dev-portal.herokuapp.com/projects/${projectId}/modifyDevelopers/${developer._id}`, false);
    xhttp.send();

    alert('Deleted developer!');
    window.location.reload()
  }

  return(
    <>
      <Card style={{ margin: '1em', width: '20em' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1em'}}>
          <div style ={{ display: 'flex', flexDirection: 'row', width: '97%'}}>
            <Button onClick={() => handleDeleteDeveloper()} style={{width: 'fit-content', padding: '0.5em', color: 'red', marginLeft: 'auto'}}>X</Button>
          </div>
          <Avatar
            alt={developer.name + ' avatar'}
            sx={{ bgcolor: '#263448' }}
          >
            { developer.name.substr(0, 1)}
          </Avatar>
          <Typography variant={"h5"}>{ developer.name }</Typography>
          <Typography>{developer.school}</Typography>
          <Button onClick={() => {setShowDeveloperInfo(true)}} style={{width: 'fit-content', padding: '0.5em', color: 'blue'}}>See Developer Info</Button>
        </CardContent>
      </Card>
      
      <DeveloperInfo
        developer={developer}
        show={showDeveloperInfo}
        onClose={() => setShowDeveloperInfo(false)}
      />
    </>
  )
}

export default ProjectDeveloperCard