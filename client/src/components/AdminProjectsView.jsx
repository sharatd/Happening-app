import React from "react";
import ProjectCard from "./ProjectCard"

const AdminProjectsView = () => {

    const projects = [
        {
            title: "Happening",
            description: "Mobile app to view events on campus for Northwestern"
        },
        {
            title: "Google Maps",
            description: "Mobile app to view events in Evanston"
        },
        {
            title: "Google Maps",
            description: "Mobile app to view events in Evanston"
        }
    ]

    return(
        <div>
            <h1 style={{ paddingLeft: '1.5em'}}>Projects</h1>
            <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default AdminProjectsView
