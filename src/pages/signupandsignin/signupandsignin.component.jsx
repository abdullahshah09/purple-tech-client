import React from 'react';

import SignUp from '../../components/signup/signup.component';
import SignIn from '../../components/signin/signin.component';

import './signupandsignin.styles.scss';

const SignUpAndSignIn = ( {match}) => {
   console.log(match)
   return (
      <div className="signup-and-signin">
         <SignIn />
         <SignUp />
      </div>
   )
}

export default SignUpAndSignIn;