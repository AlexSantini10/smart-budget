import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

const TopArea = () => {
    return (
        <div style={{ height: '200px', display: 'flex', flexDirection: 'column'}}>
            <Header />
            <NavBar />
        </div>
    );
};

export default TopArea;
