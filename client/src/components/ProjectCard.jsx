import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const ProjectCard = ({ title, description} ) => {
    return(
        <>
          <Card style={{ margin: '1em', width: '20em' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column'}}>
                <h3> { title } </h3>
                <div>
                    <p> Description: </p>
                    <p> { description } </p>
                </div>
            </CardContent>
          </Card>
          
        </>
      )
}

export default ProjectCard; 