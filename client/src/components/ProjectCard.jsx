import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button'

const ProjectCard = ({ project }) => {
    return(
        <>
          <Card style={{ margin: '1em', width: '90%'}}>
            <CardContent style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                  <h3 style={{margin: '0', padding: '0.5em'}}> { project.title } </h3>
                  <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row', gap: '5px'}}>
                    <Button style={{width: 'fit-content', padding: '0.5em', color: ''}}>Applicants</Button>
                    <Button style={{width: 'fit-content', padding: '0.5em'}}>Edit</Button>
                    <Button style={{width: 'fit-content', padding: '0.5em', color: 'red'}}>X</Button>
                  </div>
                </div>
                <div>
                    <p> Description: </p>
                    <p style={{marginLeft: '2em'}}> { project.description } </p>
                </div>
            </CardContent>
          </Card>
          
        </>
      )
}

export default ProjectCard; 