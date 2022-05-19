import React, { useState } from "react";
import BasicSelectForm from "./form_components/BasicSelectForm";
import MultipleSelectForm from "./form_components/MultipleSelectForm";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

const FilterForm = ({ showFilterForm, onClose, setFilters }) => {
  const levelOptions = ['L1', 'L2', 'L3', 'L4', 'L5']

  const technologyOptions = ['Swift', 'React', 'React Native', 'JavaScript', 'HTML', 
                            'CSS', 'Flask', 'Django', 'nodeJS', 'Python', 'TensorFlow',
                            'PyTorch', 'AWS', 'Firebase', 'SQL']

  const timeOptions = ['3+', '5+', '7+', '9+']
  
  const topicOptions = ['App Dev', 'Web App Dev', 'Web Dev']

  const universityOptions = ['Northwestern University', 'University of Chicago', 'Duke University', 'Dartmouth College']


  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [universities, setUniversities] = useState([]);

  const applyFilters = () => {
    const filters = {
      levels: selectedLevels,
      technologies: selectedTechnologies,
      preferredLanguage: preferredLanguage,
      available: isAvailable,
      timeAvailability: parseInt(selectedTime.slice(0, -1)),
      topics: selectedTopics,
      universities: universities
    }

    setFilters(filters)
  }

  const clear = () => {
    setSelectedLevels([])
    setSelectedTechnologies([])
    setPreferredLanguage('')
    setIsAvailable('')
    setSelectedTime('')
    setSelectedTopics([])
    setUniversities([])

    const emptyFilters = {
      levels: [],
      technologies: [],
      preferredLanguage: '',
      available: '',
      timeAvailability: '',
      topics: [],
      universities: []
    }

    setFilters(emptyFilters)
  }

  
  return(
    <Modal open={ showFilterForm } onClose={ onClose }>
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
      <MultipleSelectForm options={levelOptions} state={selectedLevels} setState={setSelectedLevels} label='Levels'/>
      <MultipleSelectForm options={technologyOptions} state={selectedTechnologies} setState={setSelectedTechnologies} label='Technologies'/>
      <BasicSelectForm options={technologyOptions} state={preferredLanguage} setState={setPreferredLanguage} label='Preferred Language'/>
      <BasicSelectForm options={['Yes', 'No']} state={isAvailable} setState={setIsAvailable} label='Available'/>
      <BasicSelectForm options={timeOptions} state={selectedTime} setState={setSelectedTime} label='Hours per Week'/>
      <MultipleSelectForm options={topicOptions} state={selectedTopics} setState={setSelectedTopics} label='Interested Topics'/>
      <MultipleSelectForm options={universityOptions} state={universities} setState={setUniversities} label='Universities'/>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em'}}>
        <Button onClick={() => onClose()} style={{ backgroundColor: 'red', color: 'white'}}>Close</Button>
        <div>
          <Button onClick={() => clear()} style={{ backgroundColor: 'blue', color: 'white', marginRight: '1em'}}>Clear</Button>
          <Button onClick={() => applyFilters()} style={{ backgroundColor: 'green', color: 'white'}}>Apply Filters</Button>
        </div>
      </div>
      </Box>
    </Modal>
  )
};

export default FilterForm;