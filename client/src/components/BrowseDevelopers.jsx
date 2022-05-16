import React, { useState } from 'react';
import { useDevelopers } from '../utils/api';
import DeveloperCard from './DeveloperCard';
import FilterDevs from './FilterDevs';
import FilterForm from './FilterForm';
import TextField from "@mui/material/TextField";


const BrowseDevelopers = () => {
  const [developers, loading, error] = useDevelopers();
  const [filters, setFilters] = useState({});
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [hoursFilter, setHoursFilter] = useState(0);
  const filterOptions = ['Swift', 'React', 'React Native', 'JavaScript', 'HTML', 
                        'CSS', 'Flask', 'Django', 'nodeJS', 'Python', 'TensorFlow',
                        'PyTorch', 'AWS', 'Firebase', 'SQL', 'App Dev', 'Web App Dev', 'Web Dev']

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>;

  console.log(developers)

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
      <div style={{ display: 'flex' }}>
        <TextField style={{backgroundColor: 'white'}} variant="filled" size="small" label="Filter Hours" value={hoursFilter} onChange={(e)=>setHoursFilter(e.target.value)}/>
        <button onClick={() => setShowFilterForm(true) }></button>
      </div>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developerResults.map((developer, index) => (
            <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
      <FilterForm
        showFilterForm={showFilterForm} 
        onClose={() => setShowFilterForm(false)}
        filters={filters}
        setFilters={setFilters}
        />
    </div>
  );
}

export default BrowseDevelopers;
