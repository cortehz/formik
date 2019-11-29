import React from 'react';
import { useFormik } from "formik";
import { FaCheck } from 'react-icons/fa';
import "./styles.css";
import {Link} from 'react-router-dom';

const validate = values => {
  const errors = {};


  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.checkbox) {
    errors.checkbox = "You need to accept our terms and condition to proceed";
  }
 
  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email:"",
      password:"",
      checkbox: false
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 style={{textAlign:"center", fontSize:"35px", fontWeight: 500}}>Sign Up</h1>
      <label htmlFor="fullName">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div className="errorDiv">{formik.errors.username}</div>
      ) : formik.touched.username && !formik.errors.username ? (
        < FaCheck/>
      ) : null}
<label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="errorDiv">{formik.errors.email}</div>
      ) : formik.touched.email && !formik.errors.email ? (
        < FaCheck/>
      ) : null}

      <label htmlFor="address">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="errorDiv">{formik.errors.password}</div>
      ) : formik.touched.password && !formik.errors.password ? (
        < FaCheck/>
      ) : null}
<div style={{display:"flex", alignItems:"center", marginTop:"10px"}}>
<input
        id="checkbox"
        name="checkbox"
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.checkbox}
      /><div>I agree to terms and conditions</div>
</div>
{formik.touched.checkbox && formik.errors.checkbox ? (
        <div className="errorDiv">{formik.errors.checkbox}</div>
      ) : null}
      <button style={{marginTop:"10%"}} type="submit">Create Account</button>

      <p style={{textAlign:"center"}}>Have an account <Link to="/signin">Click here</Link> </p>
      <p style={{textAlign:"center"}}>Have an account <Link to="/register">Click here</Link> </p>
    </form>
  );
};





export default SignUp;
