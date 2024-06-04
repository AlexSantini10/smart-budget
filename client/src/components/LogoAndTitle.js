import React from 'react';
import Logo from './Logo';

const LogoAndTitle = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Logo />
      <h1 style={{
          color: "var(--Notion-title, #333437)",
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          paddingLeft: "10px",
      }}>SmartBudget</h1>
    </div>
  );
};

export default LogoAndTitle;
