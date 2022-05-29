import React from "react";
import { Switch, Route } from 'react-router-dom';
import ModifyDeveloperForm from "./ModifyDeveloperForm";
import DevProjectsView from "./DevProjectsView";

const DeveloperComponent = ({user, accountInfo}) => {
  return(
    <div>
      <Switch>
        <Route path="/myinfo" render={() => (<ModifyDeveloperForm user={user} accountInfo={accountInfo}/>)}/> 
        <Route path="/" component={DevProjectsView}/> 
      </Switch>
    </div>
  )
}

export default DeveloperComponent;