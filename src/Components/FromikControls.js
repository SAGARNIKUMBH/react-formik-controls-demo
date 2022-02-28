import React from "react";
import Input from "./Input";

function FromikControls(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "redio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FromikControls;
