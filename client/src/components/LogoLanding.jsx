import React from 'react';

import SBIcon from '../assets/images/SBIcon_gray.png';

const LogoLanding = () => {
    const styles = {
        width: '50px',
        height: 'auto'
    };

    return (
        <div>
            <img src={SBIcon} alt="SB Icon" style={styles} />
        </div>
    );
};

export default LogoLanding;