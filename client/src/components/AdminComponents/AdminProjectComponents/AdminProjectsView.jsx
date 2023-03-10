import React, { useState } from "react";
import ProjectCard from "./ProjectCard"
import AddProject from "./AddProject"
import { useProjects } from '../../../utils/api';
import Button from '@mui/material/Button';

const AdminProjectsView = () => {

    let [projects, loading, error] = useProjects();
    const [showAddProject, setShowAddProject] = useState(false);
    
    if (error) return <div></div>;
    if (loading) return <h1 style={{margin: '1em'}}>Loading the projects...</h1>;
    
    return(
        <div>
            <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center', width: '90%', margin: 'auto'}}>
                <Button onClick={() => setShowAddProject(true)} style={{marginLeft: 'auto', backgroundColor: 'green', color: 'white'}}>Add New Project</Button>
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
                ))}
            </div>

            <AddProject onClose={() => setShowAddProject(false)} showAddProject={showAddProject} />
        </div>
    )
}

export default AdminProjectsView
