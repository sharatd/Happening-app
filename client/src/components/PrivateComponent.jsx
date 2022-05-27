import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import BrowseDevelopers from "./BrowseDevelopers";
import AdminProjectsView from "./AdminProjectsView";
import { useUserState } from '../utils/firebase';
import { login } from '../utils/api';

const PrivateComponent = () => {
  const [user] = useUserState();
  const [accountInfo, setAccountInfo] = useState('loading');

  useEffect(() => {
    const adminEmails = ['will@xenah.dev'];
    if (adminEmails.includes(user.email)) {
      setAccountInfo({ role: 'admin'});

    } else {

      login(user.email)
        .then((devInfo) => {
          console.log('devinfo', devInfo);
          setAccountInfo(devInfo);
        });
    }
  }, [user]);

  if (accountInfo === 'loading')
    return <h1>Loading...</h1>;

  if (!accountInfo) {
    // Show sign-up form
    // Have callback to setAccountInfo when submitting form
    return <h1>Dev sign up form...</h1>
  }

  return (
    <Switch>
      <Route path="/projects" component={AdminProjectsView}/> 
      <Route path="/" component={BrowseDevelopers}/> 
    </Switch>
  );
}

export default PrivateComponent;

