import React from 'react';
import { useFormik } from "formik";
import { CountryDropdown } from 'react-country-region-selector';
import { FaCheck } from 'react-icons/fa';
import "./styles.css";
import {Link} from 'react-router-dom';

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Must be greater than 3 characters";
  }

  if (!values.address) {
    errors.address = "Required";
  } else if (values.address.length > 25) {
    errors.address = "Must be 25 characters or less";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length < 2 ) {
    errors.city = "Please Enter a Valid City Name";
  }

  if (!values.state) {
    errors.state = "Required";
  } else if (values.state.length < 2 ) {
    errors.state = "Please Enter a Valid State Name";
  }

  if (!values.country) {
    errors.country = "Required";
  }
  
  if (!values.checkbox) {
    errors.checkbox = "You need to accept our terms and condition to proceed";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      email: "",
      state:"",
      country: "",
      city: "",
      checkbox: false
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 style={{textAlign:"center", fontSize:"35px", fontWeight: 500}}>Register</h1>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
      />
      {formik.touched.fullName && formik.errors.fullName ? (
        <div className="errorDiv">{formik.errors.fullName}</div>
      ) : formik.touched.fullName && !formik.errors.fullName ? (
        < FaCheck/>
      ) : null}

      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      {formik.touched.address && formik.errors.address ? (
        <div className="errorDiv">{formik.errors.address}</div>
      ) : formik.touched.address && !formik.errors.address ? (
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

<label htmlFor="address">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city ? (
        <div className="errorDiv">{formik.errors.city}</div>
      ) : formik.touched.city && !formik.errors.city ? (
        < FaCheck/>
      ) : null}


      
<label htmlFor="address">State/County</label>
      <input
        id="state"
        name="state"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
      />
      {formik.touched.state && formik.errors.state ? (
        <div className="errorDiv">{formik.errors.state}</div>
      ) : formik.touched.state && !formik.errors.state ? (
        < FaCheck/>
      ) : null}
     
      <label htmlFor="email">Country</label>
      <CountryDropdown name="country" value={formik.values.country}
    	onChange={(_, e) => formik.handleChange(e)} onBlur={formik.handleBlur} />
       {formik.touched.country && formik.errors.country ? (
        <div className="errorDiv">{formik.errors.country}</div>
      ) : formik.touched.country && !formik.errors.country ? (
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

      <button type="submit">Create Account</button>

      <p style={{textAlign:"center"}}>Have an account <Link to="/signin">Click here</Link> </p>
    </form>
  );
};





export default SignUp;
