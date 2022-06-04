import React from "react";
import { ReactComponent as XenahLogo } from '../assets/xenah-logo/SVG/xenah_logo-full.svg';
import Button from "@mui/material/Button";
import { signInWithGoogle } from '../utils/firebase';

const Login = () => {

  const onSignIn = () => {
    signInWithGoogle();
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <XenahLogo style={{width: "15em", padding: '0.5em', marginTop: "10vh"}}/>

        <h6 data-cy='test' style={{ textAlign: 'center', margin: '0'}}>
          Please sign in with your email
        </h6>

        <Button variant="outlined"
          onClick={onSignIn}
          sx={{
            width: '10em',
            color: '#263448',
            borderColor: '#263448',
            fontWeight: 'bold',
            marginTop: '1em'
          }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;