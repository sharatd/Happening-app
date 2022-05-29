import React from "react";
import DevProjectCard from "./DevProjectCard"
import { useProjects } from '../utils/api';

const DevProjectsView = () => {

    let [projects, loading, error] = useProjects();
    
    if (error) return <div></div>;
    if (loading) return <h1 style={{margin: '1em'}}>Loading the projects...</h1>;
    
    return(
        <div>
            <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center', width: '90%', margin: 'auto'}}>
                {projects.map((project, index) => (
                <DevProjectCard key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default DevProjectsView;