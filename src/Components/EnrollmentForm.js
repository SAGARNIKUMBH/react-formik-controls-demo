import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControls from "./FromikControls";

function EnrollmentForm() {
  const dropdownOptions = [
    { key: "Select You Course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascipt", value: "javascipt" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: "",
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.string().required("Required").nullable(),
    skills: Yup.array().required("Required"),
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
            <FromikControls control="textarea" label="Bio" name="bio" />
            <FromikControls
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FromikControls
              control="checkbox"
              label="Your Skills"
              name="skills"
              options={checkboxOptions}
            />
            <FromikControls
              control="date"
              label="Course Date"
              name="courseDate"
            />

            <input className="btn btn-primary" type="reset" value="Reset" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
