import React from 'react';
import { useFormik } from "formik";
import { FaCheck } from 'react-icons/fa';
import "./styles.css";
import {Link} from 'react-router-dom';

const validate = values => {
  const errors = {};


  if (!values.email) {
    errors.email = "Required";
  } 

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.checkbox) {
    errors.checkbox = "You need to accept our terms and condition to proceed";
  }
 
  return errors;
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      checkbox: false
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 style={{textAlign:"center", fontSize:"35px", fontWeight: 500}}>Log In</h1>
      <label htmlFor="fullName">Username or Email</label>
      <input
        id="email"
        name="email"
        type="text"
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
      <button style={{marginTop:"10%"}} type="submit">Login</button>

      <p style={{textAlign:"center"}}>Don't have an account <Link to="/signup">Click here</Link> </p>
    </form>
  );
};





export default SignIn;
