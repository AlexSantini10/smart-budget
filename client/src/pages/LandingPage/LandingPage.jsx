import React from "react";
import { SmartbudgetLogo } from "../../components/SmartbudgetLogo";
import { TextInput } from "../../components/TextInput";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="text-wrapper-2">Hai già un account?</div>
        <div className="text-wrapper-3">Accedi</div>
        <p className="p">Crea un account per iniziare</p>
        <div className="text-wrapper-4">Benvenuto!</div>
        <div className="pulsante">
          <div className="div-wrapper">
            <div className="text-wrapper-5">Crea Account</div>
          </div>
        </div>
        <div className="input-password">
          <div className="overlap">
            <div className="accedi-button-2" />
            <div className="rectangle-2" />
            <div className="text-wrapper-6">Password</div>
          </div>
        </div>
        <TextInput className="text-input-instance" />
        <div className="input-nome">
          <div className="overlap-2">
            <div className="accedi-button-3" />
            <div className="rectangle-3" />
            <div className="text-wrapper-7">Nome</div>
          </div>
        </div>
        <div className="input-cognome">
          <div className="overlap-3">
            <div className="accedi-button-4" />
            <div className="rectangle-4" />
            <div className="text-wrapper-8">Cognome</div>
          </div>
        </div>
        <SmartbudgetLogo className="smartbudget-logo-instance" divClassName="design-component-instance-node" />
      </div>
    </div>
  );
};
