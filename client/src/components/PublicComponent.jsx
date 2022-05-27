import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./Login";

const PublicComponent = () => {
  
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default PublicComponent;