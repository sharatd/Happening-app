import React from "react";
import { Switch, Route } from 'react-router-dom';
import AdminProjectsView from './AdminProjectsView';
import BrowseDevelopers from './BrowseDevelopers';

const AdminComponent = () => {

  return(
    <div>
      <Switch>
        <Route path="/projects" component={AdminProjectsView}/> 
        <Route path="/" component={BrowseDevelopers}/> 
      </Switch>
    </div>
  )
}

export default AdminComponent;