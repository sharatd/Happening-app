import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { technologyOptions, topicOptions } from '../utils/devInfoOptions'

const ModifyProject = ({ onClose, showModifyProject, project }) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [technologies, setTechnologies] = useState(project.technologies)
  const [topics, setTopics] = useState(project.topics);

  const [checkedStateTopics, setCheckedStateTopics] = useState(
    //new Array(topicOptions.length).fill(false)
    topicOptions.map(topic => topics.some(value => topic === value) ? true : false)

  );

  const [checkedStateTechnologies, setCheckedStateTechnologies] = useState(
    //new Array(technologyOptions.length).fill(false)
    technologyOptions.map(technology => technologies.some(value => technology === value) ? true : false)
  );

  const RenderCheckBox = ({ options, checkedState, setCheckedState, setChoices} ) => {
    return(
      <ul style={{listStyle: "None", display: "flex", flexWrap: "wrap", padding: "0em"}}>
          {options.map((name, index) => {
          return (
            <li key={index} style={{margin: "0.5em"}}>
            <div className="formCheck">
              <div>
              <input
              className="formCheckInput"
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={name}
              value={name}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index, checkedState, setCheckedState, setChoices, options)}
              style={{marginRight: "1em"}}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
            </div>
          </div>
          </li>
        );
        })}
      </ul>
    )
  }

  const handleOnChange = (position, checkedState, setCheckedState, setChoices, options) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const selectedItems = updatedCheckedState.reduce(
      (filters, currentState, index) => {
        if (currentState === true) {
          return [...filters, options[index]]
        }
        return filters
      },
      []
    );
  
    setChoices(selectedItems);
  };

  const handleSubmit = () => {
    const newProject = {
        "title": title,
        "description": description,
        "technologies": technologies,
        "topics": topics,
        "developers": project.developers
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", `https://xenah-dev-portal.herokuapp.com/projects/${project._id}`, false);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(newProject));

    alert('Updated project!');

    onClose();
    window.location.reload()
}

  return(
    <Modal open={showModifyProject} onClose={ onClose }>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        <div style={{display: "flex", flexDirection: "column", gap: "1em", margin: '.5em'}}>
          <h1 style={{ margin: '0' }}>Update {project.title}</h1>
          <TextField required label="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <TextField required multiline rows={4} label="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
          <div>
            <text>Topics:</text>
            <RenderCheckBox options={topicOptions} 
                            checkedState={checkedStateTopics} 
                            setCheckedState={setCheckedStateTopics}
                            setChoices={setTopics}
            />
          </div>
          <div>
            <text>Technologies:</text>
            <RenderCheckBox options={technologyOptions} 
                            checkedState={checkedStateTechnologies} 
                            setCheckedState={setCheckedStateTechnologies}
                            setChoices={setTechnologies}
            />
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={() => onClose()} style={{backgroundColor: 'red', color: 'white'}}>Cancel</Button>
            <Button onClick={() => handleSubmit()} style={{backgroundColor: 'green', color: 'white'}}>Update Project</Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default ModifyProject;