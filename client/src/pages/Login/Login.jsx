import React from "react";
import { SmartbudgetLogo } from "../../components/SmartbudgetLogo";
import "./style.css";

export const Login = () => {
    return (
        <div className="login">
            <div className="div">
                <div className="text-wrapper-2">Non hai un account?</div>
                <div className="text-wrapper-3">Registrati</div>
                <div className="text-wrapper-4">Accedi per continuare</div>
                <div className="text-wrapper-5">Bentornato!</div>
                <div className="pulsante-accesso">
                    <div className="div-wrapper">
                        <div className="text-wrapper-6">Accedi</div>
                    </div>
                </div>
                <div className="input-password">
                    <div className="overlap">
                        <div className="accedi-button" />
                        <div className="rectangle" />
                        <div className="text-wrapper-7">Password</div>
                    </div>
                </div>
                <div className="input-email">
                    <div className="overlap-2">
                        <div className="accedi-button-2" />
                        <div className="rectangle-2" />
                        <div className="text-wrapper-7">Email</div>
                    </div>
                </div>
                <SmartbudgetLogo
                    className="smartbudget-logo-instance"
                    divClassName="design-component-instance-node"
                    icon="image.png"
                />
            </div>
        </div>
    );
};
