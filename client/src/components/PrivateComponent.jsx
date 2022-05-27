import React from "react";
import { Switch, Route } from 'react-router-dom';
import BrowseDevelopers from "./BrowseDevelopers";
import AdminProjectsView from "./AdminProjectsView";

const PrivateComponent = () => {

  return (
    <Switch>
      <Route path="/projects" component={AdminProjectsView}/> 
      <Route path="/" component={BrowseDevelopers}/> 
    </Switch>
  );
}

export default PrivateComponent;

