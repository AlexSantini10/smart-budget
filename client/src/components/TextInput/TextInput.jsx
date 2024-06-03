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
        <input type="text" className="accedi-button"></input>
        <div className="rectangle" />
        <label className="email">Email</label>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  inputType: PropTypes.string,
};