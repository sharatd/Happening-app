import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseDevelopers from "./components/BrowseDevelopers";

const App = () => {
 
  return (
    <Router>
      <Switch>
        <Route path="/">
          <BrowseDevelopers/>
        </Route>
      </Switch>
    </Router>
  ) 
}

export default App;
