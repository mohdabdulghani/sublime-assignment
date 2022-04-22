import React from "react";
import "./styles.css";

const EmailComponent = (props) => {
  const updateValue = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <input
        className="Layout"
        type="text"
        placeholder="Enter your email"
        onChange={(e) => updateValue(e)}
      />
    </div>
  );
};

export default EmailComponent;
