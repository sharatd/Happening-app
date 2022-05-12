import React from "react";
import ProjectCard from "./ProjectCard"

const AdminProjectsView = () => {

    const jackson = {
        "name": "Jackson Miller",
        "email": "jacksonfire123@gmail.com",
        "technologies": [
            {
                "name": "C++",
                "rating": 4
            },
            {
                "name": "DSSL2",
                "rating": 7
            },
            {
                "name": "Python",
                "rating": 7
            }
        ],
        "projects": [
            {
                "name": "Horse Racing",
                "description": "Developed a system for predicting winners of horse races using information scraped from TwinSpires.com"
            },
            {
                "name": "Happening",
                "description": "Utilized agile methodologies to develop a web app in five weeks focused on finding and sharing student-run events"
            },
            {
                "name": "Summer Internship",
                "description": "Implemented a RESTful API for retrieving and updating product information"
            }
        ],
        "resume": "",
        "availability": false,
        "topLanguage": "DSSL2",
        "timeCommitment": 7,
        "preferredTopics": ["Backend", "Scripting"],
        "preferredLanguages": ["DSSL2", "Python"],
        "school": "Northwestern University"
    }

    const test_developers = [...Array(20).keys()].map(() => jackson)

    const projects = [
        {
            title: "Happening",
            description: "Mobile app to view events on campus for Northwestern",
            developers: [],
            topics: ["Backend", "Web Dev"],
            languages: ["JavaScript", "Python"]
        },
        {
            title: "Google Maps",
            description: "Mobile app to view events in Evanston",
            developers: test_developers,
            topics: ["Backend", "Web Dev"],
            languages: ["JavaScript", "Python"]
        },
        {
            title: "Google Maps",
            description: "Mobile app to view events in Evanston",
            developers: test_developers,
            topics: ["Backend", "Web Dev"],
            languages: ["JavaScript", "Python"]
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
