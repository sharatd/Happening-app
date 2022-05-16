import React, { useState } from 'react';
import { useDevelopers } from '../utils/api';
import DeveloperCard from './DeveloperCard';
import FilterDevs from './FilterDevs';


const BrowseDevelopers = () => {
  const [developers, loading, error] = useDevelopers();
  const [filters, setFilters] = useState([]);
  const filterOptions = ['Swift', 'React', 'React Native', 'JavaScript', 'HTML', 
                        'CSS', 'Flask', 'Django', 'nodeJS', 'Python', 'TensorFlow',
                        'PyTorch', 'AWS', 'Firebase', 'SQL', 'App Dev', 'Web App Dev', 'Web Dev']

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>;

  console.log(developers)

  const numElementsShared = (arr1, arr2) => (
    arr2.length === 0 ? 1: arr1.reduce((acc, val) => (arr2.includes(val) ? acc + 1 : acc), 0)
  );

  const developerResults = developers
    .map(developer => [numElementsShared(developer.technologies.name, filters), developer])
    .filter(([count, _]) => count > 0)
    .map(([_, developer]) => developer);
  console.log(filters)

  return (
    <div>
      <FilterDevs filters={ filters } setFilters={ setFilters } filterOptions={ filterOptions }/>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developerResults.map((developer, index) => (
            <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
    </div>
  );
}

export default BrowseDevelopers;
