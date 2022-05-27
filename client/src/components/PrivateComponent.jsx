import React, { useEffect, useState } from "react";
import { useUserState } from '../utils/firebase';
import { login } from '../utils/api';
import AdminComponent from "./AdminComponent";
import DeveloperComponent from './DeveloperComponent';

const PrivateComponent = () => {
  const [user] = useUserState();
  const [accountInfo, setAccountInfo] = useState(null);
  console.log('USER BELOW')
  console.log(user.email)

  useEffect(() => {
    const adminEmails = ['will@xenah.dev', 'quintonnickum2022@u.northwestern.edu'];
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

  console.log('Account info', accountInfo)
  if (accountInfo === null)
    return <h1>Loading...</h1>;

  return (
    <div>
      { accountInfo.role === 'admin' ? <AdminComponent/> : <DeveloperComponent/> }
    </div>
  );
}

export default PrivateComponent;

