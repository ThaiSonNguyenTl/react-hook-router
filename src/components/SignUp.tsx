import React from 'react';
function SignUp() {
  return (
    <form style={{border: '1px solid #ccc'}}>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      <label>
        <input type="checkbox" name="remember" style={{marginBottom: '15px'}} /> Remember me
      </label>
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
  </form>
  );
}

export default SignUp;
