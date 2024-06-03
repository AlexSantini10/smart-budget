import React from 'react';
import Logo from './Logo';

const LogoAndTitle = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Logo />
      <h1 style={{ marginLeft: '10px', color:'#333437' }}>SmartBudget</h1>
    </div>
  );
};

export default LogoAndTitle;
