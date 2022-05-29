import React from "react";
import { ReactComponent as XenahLogo } from "../Xenah Logos/SVG/xenah_logo-full.svg"
import Button from '@mui/material/Button';
import { firebaseSignOut } from "../utils/firebase";


const NavBar = ({user, accountInfo}) => {
  return (
    <nav style={{ justifyContent: 'space-between', padding: '10px 0px 10px 0px', display: 'flex', flexDirection: 'row', width: "100%", top: "0", backgroundColor: "#263448", Zindex: '1000'}}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
        <XenahLogo style={{width: "10em", padding: '0.5em'}}/>
        { accountInfo?.role === 'admin' &&
          <>
            <a href="/" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Developers</Button></a>
            <a href="/projects" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>View Projects</Button></a>
          </>
        }
        { accountInfo?.role === 'developer' &&
          <>
            <a href="/myinfo" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Modify My Info</Button></a>
            <a href="/" style={{textDecoration: 'none'}}><Button style={{width: 'fit-content', padding: '0.5em', color: 'white'}}>Apply To Projects</Button></a>
          </>
        }
      </div>
      {
        user && <Button style={{width: 'fit-content', padding: '0em 2em 0em 0em', margin: '0em', color: 'white'}} onClick={() => window.confirm("Are you sure you want to sign out?") && firebaseSignOut()}>Sign Out</Button>
      }
    </nav>
  )
}

export default NavBar;