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


  return (
    <div>
      <FilterDevs filters={ filters } setFilters={ setFilters } filterOptions={ filterOptions }/>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developers.map((developer, index) => (
            <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
    </div>
  );
}

export default BrowseDevelopers;
