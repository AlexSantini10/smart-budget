import React from 'react';

const styles = {
    heading: {
        color: '#333437',
        fontfamily: 'Roboto',
        font: 'Roboto, sans-serif',
        fontSize: '32px',
        fontWeight: 'bold'
      }
};

const TitoloLanding = ({ title }) => {
    return (
        <h1 style={styles.heading}>{title}</h1>
    );
};



export default TitoloLanding;