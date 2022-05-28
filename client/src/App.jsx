import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useUserState } from "./utils/firebase";
import PrivateComponent from "./components/PrivateComponent";
import PublicComponent from "./components/PublicComponent";

const App = () => {

  const [user] = useUserState();

  if (user === 'loading') {
    return (
      <div>
      </div>
    )
  }

  return (
    <Router>
      <div>
        <div style={{width: '100%'}}>
          { user ? <PrivateComponent user={user}/> : <PublicComponent/> }
        </div>
      </div>
    </Router>
  ) 
}

export default App;
