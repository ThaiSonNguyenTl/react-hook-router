import React from 'react';
function SignIn() {
  return (
      <React.Fragment>
           <h2>Login Form</h2>
        <form>
          
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="submit">Login</button>
           
          </div>
         
        </form>
    </React.Fragment>
  );
}

export default SignIn;
