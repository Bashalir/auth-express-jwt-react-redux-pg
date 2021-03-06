import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SignUp = props => {
  console.log("login", props);
  const [values, setValues] = useState({ email: "", password: "" });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.signUpAction(values);
  };

  return (
    <>
    
      {props.user && <Redirect to="/" />}
      {console.log('tutu', props)}
      <form onSubmit={onSubmit}>
        <h1>Sign Up Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SignUp;
