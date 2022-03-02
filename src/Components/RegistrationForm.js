import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControls from "./FromikControls";
function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Id").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords Must Match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
    anotherEmail: Yup.string().when("modeOfContact", {
      is: "emailmoc",
      then: Yup.string().email("Invalid Email Id").required("Required"),
    }),
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
            <FromikControls
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FromikControls
              control="radio"
              label="Mode OF Contact"
              name="modeOfContact"
              options={options}
            />
            {formik.values.modeOfContact === "telephonemoc" ? (
              <FromikControls
                control="input"
                type="text"
                label="Telephone"
                name="phone"
              />
            ) : (
              <FromikControls
                control="input"
                type="text"
                label="Email"
                name="anotherEmail"
              />
            )}

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

export default RegistrationForm;
