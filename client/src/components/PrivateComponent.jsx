import React, { useEffect, useState } from "react";
//import { useUserState } from '../utils/firebase';
import { login } from '../utils/api';
import AdminComponent from "./AdminComponent";
import DeveloperComponent from './DeveloperComponent';
import ModifyDeveloperForm from "./ModifyDeveloperForm";
import NavBar from "./NavBar";

const PrivateComponent = ({user}) => {
  //const [user] = useUserState();
  const [accountInfo, setAccountInfo] = useState(null);
  //console.log('USER BELOW')
  //console.log(user.email)

  useEffect(() => {
    const adminEmails = ['will@xenah.dev', 'quintonnickum2022@u.northwestern.edu', 'jacksonmiller2023@u.northwestern.edu', 'yabiayele2023@u.northwestern.edu','rutujakajave2022@u.northwestern.edu'];
    if (adminEmails.includes(user.email)) {
      console.log("entered if branch")
      setAccountInfo({ role: 'admin'});

    } else {
      console.log(user.email)
      login(user.email)
        .then((devInfo) => {
          console.log('devinfo', devInfo);
          setAccountInfo(devInfo);
        });
    }
  }, [user]);
  

  if (accountInfo === null)
    return (
      <>
        <NavBar user={user} accountInfo={accountInfo}/>
        <div style={{marginTop: '1em'}}>
          <ModifyDeveloperForm/>;
        </div>
      </>
    )

  return (
    <div>
      <NavBar user={user} accountInfo={accountInfo}/>
      <div style={{marginTop: "1em"}}>
        { accountInfo.role === 'admin' ? <AdminComponent/> : <DeveloperComponent/> }
      </div>
    </div>
  );
}

export default PrivateComponent;

