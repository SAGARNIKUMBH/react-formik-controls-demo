import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControls from "./FromikControls";

function FromikContainer() {
  const dropdownOptions = [
    { key: "select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: "",
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FromikControls
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FromikControls
            control="textarea"
            label="Description"
            name="description"
          />
          <FromikControls
            control="select"
            label="Select a Value"
            name="selectOption"
            options={dropdownOptions}
          />

          <FromikControls
            control="radio"
            label="Select Radio Button"
            name="radioOption"
            options={radioOptions}
          />
          <FromikControls
            control="checkbox"
            label="CheckBox topics"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FromikControls control="date" label="Pick a date" name="birthDate" />
          <input className="btn btn-primary " type="reset" value="Reset" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FromikContainer;
