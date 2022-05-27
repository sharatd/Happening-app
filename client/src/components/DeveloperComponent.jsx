import React from "react";
import { Switch, Route } from 'react-router-dom';
import ModifyDeveloperForm from "./ModifyDeveloperForm";

const DeveloperComponent = () => {

  return(
    <div>
      <Switch>
        <Route path="/" component={ModifyDeveloperForm}/> 
      </Switch>
    </div>
  )
}

export default DeveloperComponent;