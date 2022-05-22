import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ReactComponent as XenahLogo } from "./Xenah Logos/SVG/xenah_logo-full.svg"
import AdminProjectsView from "./components/AdminProjectsView";
import BrowseDevelopers from "./components/BrowseDevelopers";
import Button from '@mui/material/Button';
import { useUserState } from "./utils/firebase";
import Login from "./components/Login";

const App = () => {
 
const [user] = useUserState()

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
              {
                user ? <AdminProjectsView/> :  <Redirect to = "/login"/>
              }
            </Route>
            <Route path="/navigate">
              <Redirect to = "/projects"/>
            </Route>
            <Route path="/login">
              <Login/>
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
