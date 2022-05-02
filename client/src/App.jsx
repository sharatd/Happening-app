import React from "react";
import { useDevelopers } from "./utils/api";

const App = () => {
  const [developers, loading, error] = useDevelopers();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>

  return (
    <div>
      <h1>Xenah Dev Portal</h1>
      <div>
        {developers.map((developer, index) => (
          <div style={{padding: "1em", border: "solid 1px black", margin: "1em"}} key={index}>
            {JSON.stringify(developer)}
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default App;
