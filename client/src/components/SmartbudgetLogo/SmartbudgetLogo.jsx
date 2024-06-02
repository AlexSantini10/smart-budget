/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SmartbudgetLogo = ({ className, divClassName }) => {
  return (
    <div className={`smartbudget-logo ${className}`}>
      <div className="div">
        <img className="icon" alt="caca" src="../../static/img/icon.png"/>
        <div className={`text-wrapper ${divClassName}`}>SmartBudget</div>
      </div>
    </div>
  );
};
