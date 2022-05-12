import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from "@mui/material/colors";

import DeveloperInfo from "./DeveloperInfo";

const ProjectDeveloperCard = ({ developer }) => {
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