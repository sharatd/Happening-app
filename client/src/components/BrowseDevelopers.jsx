import React from 'react';
import { useDevelopers } from '../utils/api';
import DeveloperCard from './DeveloperCard';


const BrowseDevelopers = () => {
  const [developers, loading, error] = useDevelopers();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>;

  return (
    <div>
      <h1>Developers</h1>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {developers.map((developer, index) => (
            <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
    </div>
  );
}

export default BrowseDevelopers;