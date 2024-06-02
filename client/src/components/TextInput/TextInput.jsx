/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextInput = ({ className, inputType = "email" }) => {
  return (
    <div className={`text-input ${className}`}>
      <div className="overlap-group">
        <div className="accedi-button" />
        <div className="rectangle" />
        <input className="email" placeholder="Email" type={inputType} />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  inputType: PropTypes.string,
};
