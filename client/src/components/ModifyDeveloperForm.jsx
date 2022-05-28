import React, { useState } from "react";
import BasicSelectForm from "./form_components/BasicSelectForm";
import MultipleSelectForm from "./form_components/MultipleSelectForm";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { levelOptions, technologyOptions, topicOptions, universityOptions } from '../utils/devInfoOptions'

const ModifyDeveloperForm = ({user, accountInfo}) => {
  if (accountInfo === null) {
    accountInfo = {
      name: '',
      email: user.email,
      // Array of objects with name and rating
      technologies: [],
      // Array of objects with name and description
      projects: [],
      resume: "",
      availability: false,
      topLanguage: '',
      timeCommitment: 1,
      // Array of objects with name and rating
      preferredTopics: [],
      // Array of objects with name and rating
      preferredLanguages: [],
      school: '',
      level: 'L1'
    }
  }

  const [name, setName] = useState(accountInfo.name);
  const [selectedTechnologies, setSelectedTechnologies] = useState(accountInfo.technologies.map(tech => tech.name));
  //const [projects, setProjects] = useState(accountInfo.projects);
  //const [resume, setResume] = useState(accountInfo.resume);
  const [isAvailable, setIsAvailable] = useState(accountInfo.availability ? 'Yes' : 'No');
  const [selectedTopLanguage, setSelectedTopLanguage] = useState(accountInfo.topLanguage)
  const [selectedTime, setSelectedTime] = useState(accountInfo.timeCommitment);
  // topics needs name AND rating
  const [selectedTopics, setSelectedTopics] = useState(accountInfo.preferredTopics.map(topic => topic.name));
  // technologies need name AND rating
  const [preferredLanguages, setPreferredLanguages] = useState(accountInfo.preferredLanguages.map(language => language.name));
  const [university, setUniversity] = useState(accountInfo.university);
  const [selectedLevel, setSelectedLevel] = useState(accountInfo.level)


  return(
    <div style={{display: 'flex', flexDirection: 'column', width: '95%', overflowY: 'auto', margin: 'auto'}}>
      <h1>My Info:</h1>
      <TextField required  label="Name" value={name} onChange={(e)=>setName(e.target.value)} sx={{ m: 1, width: '98%' }}/>
      <MultipleSelectForm options={technologyOptions} state={selectedTechnologies} setState={setSelectedTechnologies} label='Technologies'/>
      <BasicSelectForm options={['Yes', 'No']} state={isAvailable} setState={setIsAvailable} label='Available'/>
      <BasicSelectForm options={technologyOptions} state={selectedTopLanguage} setState={setSelectedTopLanguage} label='Favorite Language' />
      <BasicSelectForm options={[...Array(15).keys()].map( i => i+1)} state={selectedTime} setState={setSelectedTime} label='Hours per Week'/>
      <MultipleSelectForm options={topicOptions} state={selectedTopics} setState={setSelectedTopics} label='Interested Topics'/>
      <MultipleSelectForm options={technologyOptions} state={preferredLanguages} setState={setPreferredLanguages} label='Preferred Languages'/>
      <BasicSelectForm options={universityOptions} state={university} setState={setUniversity} label='University'/>
      <BasicSelectForm options={levelOptions} state={selectedLevel} setState={setSelectedLevel} label='Level'/>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1em'}}>
        <Button style={{ marginRight: '1.5em', backgroundColor: 'green', color: 'white', width: '10em'}}>Update</Button>
      </div>
    </div>
  )
}

export default ModifyDeveloperForm;