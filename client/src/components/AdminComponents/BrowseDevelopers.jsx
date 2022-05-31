import React, { useState } from 'react';
import { useDevelopers } from '../../utils/api';
import DeveloperCard from './DeveloperCard';
import FilterForm from './FilterForm';
import Button from '@mui/material/Button';


const BrowseDevelopers = () => {
  const [developers, loading, error] = useDevelopers();
  const [filters, setFilters] = useState({
    levels: [],
    technologies: [],
    topics: [],
    universities: [],
    preferredLanguage: '',
    available: '',
    timeAvailability: 0,
  });
  const [showFilterForm, setShowFilterForm] = useState(false);

  if (error) return <div></div>;
  if (loading) return <h1 style={{margin: '1em'}}>Loading the developers...</h1>;

  const numElementsShared = (arr1, arr2) => (
    arr2.length === 0 ? 1: arr1.reduce((acc, val) => (arr2.includes(val.name) ? acc + 1 : acc), 0)
  );

  let developerResults = developers;

  if (filters.levels.length > 0) {
    developerResults = developerResults.filter(developer => filters.levels.includes(developer.level))
  }

  if (filters.technologies.length > 0) {
    developerResults = developerResults.map(developer => 
        [numElementsShared(developer.technologies, filters.technologies), developer]
      )
      .filter(([count, _]) => count > 0)
      .map(([_, developer]) => developer);
  }

  if (filters.topics.length > 0) {
    developerResults = developerResults.map(developer => 
        [numElementsShared(developer.preferredTopics, filters.topics), developer]
      )
      .filter(([count, _]) => count > 0)
      .map(([_, developer]) => developer);
  } 

  if (filters.universities.length > 0) {
    developerResults = developerResults.filter(developer => filters.universities.includes(developer.school))
  }

  if (filters.preferredLanguage !== '') {
    developerResults = developerResults.filter(developer => developer.preferredLanguages.includes(filters.preferredLanguage));
  }

  if (filters.preferredLanguage !== '') {
    developerResults = developerResults.filter(developer => developer.preferredLanguages.includes(filters.preferredLanguage));
  }

  if (filters.available !== '') {
    developerResults = developerResults.filter(developer => developer.availability === (filters.available === 'Yes'));
  }

  if (filters.timeAvailability > 0) {
    developerResults = developerResults.filter(developer => developer.timeCommitment > filters.timeAvailability);
  }


  // developerResults = developers
  //   //.filter(developer => developer.timeCommitment >= hoursFilter)
  //   .map(developer => [numElementsShared(developer.technologies, filters.technologies), developer])
  //   .filter(([count, _]) => count > 0)
  //   .filter(([_, developer]) => filters.levels.includes(developer.level))
  //   .map(([_, developer]) => [numElementsShared(developer.topics, filters.topics), developer])
  //   .filter(([count, _]) => count > 0)
  //   .filter(([_, developer]) => filters.universities.includes(developer.university))
  //   .map(([_, developer]) => developer);

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row', width: '97%'}}>
        <Button onClick={() => setShowFilterForm(true) } style={{ backgroundColor: 'green', color: 'white', alignSelf: 'center', width: '5%', marginLeft: 'auto', fontSize: '4em', height: '1em', textAlign: 'center'}}>⌕</Button>
      </div>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developerResults.length === 0 ? <h4>No Developers Matched Filters</h4> : developerResults.map((developer, index) => (
            <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
      </div>
      <FilterForm
        showFilterForm={showFilterForm} 
        onClose={() => setShowFilterForm(false)}
        setFilters={setFilters}
        />
    </div>
  );
}

export default BrowseDevelopers;
