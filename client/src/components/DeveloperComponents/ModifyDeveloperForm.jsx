import React, { useState } from "react";
import BasicSelectForm from "../form_components/BasicSelectForm";
import MultipleSelectForm from "../form_components/MultipleSelectForm";
import MultipleWithRatingForm from "../form_components/MultipleWithRatingForm";
import DevProjectsForm from "../form_components/DevProjectsForm";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { levelOptions, technologyOptions, topicOptions, universityOptions } from '../../utils/devInfoOptions'
import { addNewDeveloper, updateDeveloperInfo } from '../../utils/api'

const ModifyDeveloperForm = ({user, accountInfo}) => {
  let newUser = false
  if (accountInfo === null) {
    newUser = true
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
      // Array of strings
      preferredLanguages: [],
      school: '',
      level: ''
    }
  }

  const [name, setName] = useState(accountInfo.name);
  const [developerTechnologies, setDeveloperTechnologies] = useState(accountInfo.technologies)
  const [projects, setProjects] = useState(accountInfo.projects);
  //const [resume, setResume] = useState(accountInfo.resume);
  const [isAvailable, setIsAvailable] = useState(accountInfo.availability ? 'Yes' : 'No');
  const [selectedTopLanguage, setSelectedTopLanguage] = useState(accountInfo.topLanguage)
  const [selectedTime, setSelectedTime] = useState(accountInfo.timeCommitment);
  const [developerTopics, setDeveloperTopics] = useState(accountInfo.preferredTopics)
  const [preferredLanguages, setPreferredLanguages] = useState(accountInfo.preferredLanguages);
  const [school, setSchool] = useState(accountInfo.school);
  const [selectedLevel, setSelectedLevel] = useState(accountInfo.level)

  const submitForm = () => {
    if (name === '' || selectedTopLanguage === '' || preferredLanguages === [] || school === '' || selectedLevel === '') {
      alert('Please Finish Filling Out The Form');
      return;
    }

    const updatedInfo = {
      name: name,
      email: user.email,
      technologies: developerTechnologies,
      projects: projects,
      resume: "",
      availability: (isAvailable === 'Yes'),
      topLanguage: selectedTopLanguage,
      timeCommitment: selectedTime,
      preferredTopics: developerTopics,
      preferredLanguages: preferredLanguages,
      school: school,
      level: selectedLevel
    }

    if (newUser) {
      addNewDeveloper(updatedInfo)

      alert('Signed Up!');
      window.location.reload()
    } else {
      updateDeveloperInfo(updatedInfo, accountInfo._id)

      alert('Updated your info!');
    }
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', width: '95%', overflowY: 'auto', margin: 'auto'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', alignItems: 'center'}}>
        <h1>My Info:</h1>
        <Button onClick={() => submitForm()} style={{ marginRight: '1.5em', backgroundColor: 'green', color: 'white', width: '10em', height: 'fit-content'}}>{newUser ? 'Sign Up' : 'Update Info'}</Button>
      </div>
      <TextField required  label="Name" value={name} onChange={(e)=>setName(e.target.value)} sx={{ m: 1, width: '98%' }}/>
      <BasicSelectForm options={['Yes', 'No']} state={isAvailable} setState={setIsAvailable} label='Available This Quarter?'/>
      <BasicSelectForm options={technologyOptions} state={selectedTopLanguage} setState={setSelectedTopLanguage} label='Favorite Language' />
      <BasicSelectForm options={[...Array(15).keys()].map( i => i+1)} state={selectedTime} setState={setSelectedTime} label='Hours per Week'/>
      <MultipleSelectForm options={technologyOptions} state={preferredLanguages} setState={setPreferredLanguages} label='Preferred Languages'/>
      <BasicSelectForm options={universityOptions} state={school} setState={setSchool} label='University'/>
      <BasicSelectForm options={levelOptions} state={selectedLevel} setState={setSelectedLevel} label='Level'/>
      <MultipleWithRatingForm options={technologyOptions} state={developerTechnologies} setState={setDeveloperTechnologies} name={'Technology'} pluralName={'Technologies'}/>
      <MultipleWithRatingForm options={topicOptions} state={developerTopics} setState={setDeveloperTopics} name={'Preferred Topic'} pluralName={'Preferred Topics'} />
      <DevProjectsForm state={projects} setState={setProjects}/>
    </div>
  )
}

export default ModifyDeveloperForm;