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
        <div>
          { user ? <PrivateComponent user={user}/> : <PublicComponent/> }
        </div>
      </div>
    </Router>
  ) 
}

export default App;
