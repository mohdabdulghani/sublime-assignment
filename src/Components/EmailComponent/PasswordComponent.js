import React from "react";
import "./styles.css";

const PasswordComponent = (props) => {
  const updateValue = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div>
      <input
        className="Layout"
        type="password"
        placeholder="Enter your password"
        onChange={(e) => updateValue(e)}
      />
    </div>
  );
};

export default PasswordComponent;
