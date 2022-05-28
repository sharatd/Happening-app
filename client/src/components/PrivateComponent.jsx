import React, { useEffect, useState } from "react";
import { login } from '../utils/api';
import AdminComponent from "./AdminComponent";
import DeveloperComponent from './DeveloperComponent';
import ModifyDeveloperForm from "./ModifyDeveloperForm";
import NavBar from "./NavBar";
import { adminEmails } from '../utils/adminEmails';

const PrivateComponent = ({user}) => {
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    if (adminEmails.includes(user.email)) {
      setAccountInfo({ role: 'admin'});

    } else {
      login(user.email)
        .then((devInfo) => {
          setAccountInfo(devInfo);
        });
    }
  }, [user]);
  

  if (accountInfo === null)
    return (
      <>
        <NavBar user={user} accountInfo={accountInfo}/>
        <div style={{marginTop: '1em'}}>
          <ModifyDeveloperForm user={user} accountInfo={null}/>;
        </div>
      </>
    )

  return (
    <div>
      <NavBar user={user} accountInfo={accountInfo}/>
      <div style={{marginTop: "1em"}}>
        { accountInfo.role === 'admin' ? <AdminComponent/> : <DeveloperComponent user={user} accountInfo={accountInfo}/> }
      </div>
    </div>
  );
}

export default PrivateComponent;

