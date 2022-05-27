import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as XenahLogo } from "./Xenah Logos/SVG/xenah_logo-full.svg"
import Button from '@mui/material/Button';
import { useUserState, firebaseSignOut } from "./utils/firebase";
import PrivateComponent from "./components/PrivateComponent";
import PublicComponent from "./components/PublicComponent";

const App = () => {
 
const [user] = useUserState();

console.log(user);

if (user === 'loading') {
  return (
    <h1>
      loading user...
    </h1>
  )
}

  return (
    <Router>
      <div>
        <nav style={{ justifyContent: 'space-between', display: 'flex', padding: '10px', flexDirection: 'row', width: "100vw", top: "0", backgroundColor: "#263448", Zindex: '1000'}}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
              <XenahLogo style={{width: "10em", padding: '0.5em'}}/>
              <a href="/" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Developers</Button></a>
              <a href="/projects" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>View Projects</Button></a>
          </div>
          {
            user && <Button style={{width: 'fit-content', padding: '0 2em', color: 'white'}} onClick={() => window.confirm("Are you sure you want to sign out?") && firebaseSignOut()}>Sign Out</Button>
          }
        </nav>

        <div style={{marginTop: '1em'}}>
          { user ? <PrivateComponent/> : <PublicComponent/> }
        </div>
      </div>
    </Router>
  ) 
}

export default App;
