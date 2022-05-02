import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDevelopers } from "./utils/api";

const App = () => {
  const [developers, loading, error] = useDevelopers();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the developers...</h1>

  return (
    <Router>
      <Switch>
        <Route path="/">
          <h1>Xenah Dev Portal</h1>
          <div>
            {developers.map((developer, index) => (
              <div style={{padding: "1em", border: "solid 1px black", margin: "1em"}} key={index}>
                {JSON.stringify(developer)}
              </div>
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  ) 
}

export default App;
