import React from 'react';
import SignIn from '../components/SignIn';
function SignInPage() {
  return (
    <div className="row">
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <SignIn/>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
 </div>
    );
}

export default SignInPage;
