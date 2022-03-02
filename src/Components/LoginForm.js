import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControls from "./FromikControls";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FromikControls
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FromikControls
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <input className="btn btn-primary " type="reset" value="Reset" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
