import React from "react";
import { Switch, Route } from 'react-router-dom';
import ModifyDeveloperForm from "./ModifyDeveloperForm";

const DeveloperComponent = ({user, accountInfo}) => {

  return(
    <div>
      <Switch>
        <Route path="/" render={() => {<ModifyDeveloperForm user={user} accountInfo={accountInfo}/>}}/> 
      </Switch>
    </div>
  )
}

export default DeveloperComponent;