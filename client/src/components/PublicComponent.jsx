import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Login";

const PublicComponent = () => {
  
  return (
    <Switch>
      <Redirect to='/login'/>
      <Route path="/login" component={Login} />
      <Redirect to='/' />
    </Switch>
  )
}

export default PublicComponent;