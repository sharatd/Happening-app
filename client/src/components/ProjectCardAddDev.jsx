import React, {useState} from "react";
import ProjectApplicants from "./ProjectApplicants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Chip from "@mui/material/Chip";


const ProjectCardAddDev = ({ project, developer }) => {
  const [showProjectApplicants, setShowProjectApplicants] = useState(false)
  const [isInProject, setIsInProject] = useState(project.developers.some(dev => dev._id === developer._id))

  const handleAddDeveloper = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", `https://xenah-dev-portal.herokuapp.com/projects/${project._id}/modifyDevelopers/${developer._id}`, false);
    xhttp.send();

    alert(`Added ${developer.name} to ${project.title}`);
    setIsInProject(true);
    window.location.reload()
  }

  const handleDeleteDeveloper = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `https://xenah-dev-portal.herokuapp.com/projects/${project._id}/modifyDevelopers/${developer._id}`, false);
    xhttp.send();

    alert(`Removed ${developer.name} from ${project.title}`);
    setIsInProject(false);
    window.location.reload()
  }

  const AddButton = () => {
      return(<Button onClick={() => handleAddDeveloper()} style={{width: 'fit-content', padding: '0.5em', backgroundColor: 'green', color: 'white'}}
             >
                Add {developer.name} To Project
             </Button>)
  }

  const DeleteButton = () => {
    return(<Button onClick={() => handleDeleteDeveloper()} style={{width: 'fit-content', padding: '0.5em', backgroundColor: 'red', color: 'white'}}
    >
       Remove {developer.name} From Project
    </Button>)
  }

    return(
        <>
          <Card style={{ margin: '1em 0em 1em 0em', width: '100%'}}>
            <CardContent style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                  <h3 style={{margin: '0', padding: '0.5em'}}> { project.title } </h3>
                  <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row', gap: '5px'}}>
                    {
                        isInProject ? <DeleteButton  /> : <AddButton />
                    }
                  </div>
                </div>
                <div style={{display: 'flex', flexFlow: 'wrap', alignItems: 'center'}}>
                  {
                    project.technologies.map((technology, index) => (
                      <Chip style={{margin: '0.1em 0.2em'}} color='default' key={index} label={`${technology}`}/>
                    ))
                  }
                </div>
                <div style={{padding: '0.5em'}}>
                    <p> Description: </p>
                    <p style={{marginLeft: '2em'}}> { project.description } </p>
                </div>
            </CardContent>
          </Card>
          <ProjectApplicants project={project} onClose={() => setShowProjectApplicants(false)} showProjectApplicants={showProjectApplicants}/>  
        </>
      )
}

export default ProjectCardAddDev; 