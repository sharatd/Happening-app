import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const DevProjectsForm = ({state, setState}) => {
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')

    const addProject = () => {
        if (state.some(project => project.name === projectName)) {
            const updatedProjects = state.map(project => project.name === projectName ? {...project, description: projectDescription} : project)
            setState(updatedProjects)
          } else {
            const newProject = {name: projectName, description: projectDescription};
            const updatedProjects = [...state, newProject]
            setState(updatedProjects)
          }
    }

    const deleteProject = e => {
        const elem = e.currentTarget;
        const name = elem.dataset.projectId;
        const updatedProjects = state.filter(project => project.name !== name)
        setState(updatedProjects)
    }

    const renderProject = project => {
        return(
            <div key={project.name} style={{border: 'solid 1px #AAAAAA', display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '1em'}}>
                    <h3>{project.name}</h3>
                    <Button data-project-id={project.name} style={{color: 'red'}} onClick={(e) => deleteProject(e)}>Delete</Button>
                </div>
                <p style={{margin: '0 1em 2em 1em'}}>{project.description}</p>
            </div>
        )
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h3 style={{margin: '1em'}}>Add/Remove Prior Projects:</h3>
            <TextField label="Project Name" value={projectName} onChange={(e)=>setProjectName(e.target.value)} sx={{ m: 1, width: '98%' }}/>
            <TextField multiline rows={4} label="Project Description" value={projectDescription} sx={{ m: 1, width: '98%' }} onChange={(e)=>setProjectDescription(e.target.value)} />
            <Button style={{color: 'white', backgroundColor: 'blue', width: 'fit-content', margin: '0.5em 0 1em 1em', alignSelf: 'left'}} onClick={() => addProject()}>Add Project</Button>
            <div style={{display: 'flex', flexDirection: 'column', width:'98%', alignSelf: 'center'}}>
                {state.map(project => renderProject(project))}
            </div>
        </div>
    )
}

export default DevProjectsForm;