import React from "react";
import { BrowserRouter as Router, Switch, Route, Navigate } from "react-router-dom";
import { ReactComponent as XenahLogo } from "./Xenah Logos/SVG/xenah_logo-full.svg"
import AdminProjectsView from "./components/AdminProjectsView";
import BrowseDevelopers from "./components/BrowseDevelopers";
import Button from '@mui/material/Button';

const App = () => {
 
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', padding: '10px', flexDirection: 'row', width: "100%", top: "0", backgroundColor: "#263448", Zindex: '1000'}}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
              <XenahLogo style={{width: "10em", padding: '0.5em'}}/>
              <a href="/" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Developers</Button></a>
              <a href="/projects" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>View Projects</Button></a>
          </div>
        </nav>

        <div style={{marginTop: '1em'}}>
          <Switch>
            <Route path="/projects">
              <AdminProjectsView/>
            </Route>
            <Route path="/navigate">
              <Navigate replace to = "/projects"/>
            </Route>
            <Route path="/">
              <BrowseDevelopers/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  ) 
}

export default App;
