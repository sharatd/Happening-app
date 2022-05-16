import React, { useState } from 'react';
import { useDevelopers } from '../utils/api';
import DeveloperCard from './DeveloperCard';
import FilterForm from './FilterForm';
import Button from '@mui/material/Button';


const BrowseDevelopers = () => {
  const [developers, loading, error] = useDevelopers();
  const [filters, setFilters] = useState({});
  const [showFilterForm, setShowFilterForm] = useState(false);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>;

  /*const numElementsShared = (arr1, arr2) => (
    arr2.length === 0 ? 1: arr1.reduce((acc, val) => (arr2.includes(val.name) ? acc + 1 : acc), 0)
  );

  const developerResults = developers
    .filter(developer => developer.timeCommitment >= hoursFilter)
    .map(developer => [numElementsShared(developer.technologies, filters), developer])
    .filter(([count, _]) => count > 0)
    .map(([_, developer]) => developer);*/

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Button onClick={() => setShowFilterForm(true) } style={{ backgroundColor: 'green', color: 'white', alignSelf: 'center', width: '15%' }}>Show Filter Form</Button>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developers.map((developer, index) => (
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
