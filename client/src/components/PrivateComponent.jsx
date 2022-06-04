import React, { useEffect, useState } from "react";

import { login } from '../utils/api';
import AdminComponent from "./AdminComponents/AdminComponent";
import DeveloperComponent from './DeveloperComponents/DeveloperComponent';
import ModifyDeveloperForm from "./DeveloperComponents/ModifyDeveloperForm";
import NavBar from "./NavBar";
import environment from "../utils/environment";

const PrivateComponent = ({user}) => {
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    if (environment.ADMIN_EMAILS.includes(user.email)) {
      setAccountInfo({ role: 'admin'});

    } else {
      login(user.email)
        .then((devInfo) => {
          if (devInfo !== null) {
            const addRole = {...devInfo, role: 'developer'};
            setAccountInfo(addRole);
          } else {
            setAccountInfo(devInfo)
          }
        });
    }
  }, [user]);
  
  if (accountInfo === null)
    return (
      <div style={{marginBottom: '6em'}}>
        <NavBar user={user} accountInfo={accountInfo}/>
        <div style={{marginTop: '1em'}}>
          <ModifyDeveloperForm user={user} accountInfo={null}/>;
        </div>
      </div>
    )

  return (
    <div style={{marginBottom: '6em'}}>
      <NavBar user={user} accountInfo={accountInfo}/>
      <div style={{marginTop: "1em"}}>
        { accountInfo?.role === 'admin' ? <AdminComponent/> : <DeveloperComponent user={user} accountInfo={accountInfo}/> }
      </div>
    </div>
  );
}

export default PrivateComponent;

