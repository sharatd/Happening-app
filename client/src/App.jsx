import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminProjectsView from "./components/AdminProjectsView";
import BrowseDevelopers from "./components/BrowseDevelopers";
import Button from '@mui/material/Button';

const App = () => {
 
  return (
    <Router>
      <div style={{ marginTop: '4em' }}>
      <nav style={{ display: 'flex', flexDirection: 'row', width: "100%", position: "fixed", top: "0", backgroundColor: "purple"}}>
        <h3 style={{margin: '0', padding: '0.5em', color: 'white' }}> Xenah Dev Portal </h3>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px'}}>
            <a href="/"><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Developers</Button></a>
            <a href="/projects"><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>View Projects</Button></a>
        </div>
      </nav>

    
      <Switch>
        <Route path="/projects">
          <AdminProjectsView/>
        </Route>
        <Route path="/">
          <BrowseDevelopers/>
        </Route>
      </Switch>
      </div>
    </Router>
  ) 
}

export default App;
