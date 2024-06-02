import React from 'react';

const styles = {
  textField: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
    marginRight: 14,
    paddingRight: 14,
  },
  labelBackground: {
    
    marginBottom: -6,
    
    position: 'relative',
    bottom: '50%',
    zIndex: 3,
  },
  label: {
    backgroundColor: 'white',
    width: '30%',
    fontSize: 14,
    textColor: '#333437',
    opacity: 0.7,
    paddingLeft: 8,
    paddingRight: 1.5,
    marginBottom: -6,
    zIndex: 2,
  },
  input: {
    border: '1px solid rgba(51,52,55,0.5)',
    Opacity: 0.5,
    padding: 8,
    borderRadius: 8,
    width: '100%',
    zIndex: 1,
  },
};

const textField = ({ label, value, onChange, placeHolder, ...props }) => {
  return (
    <div name="textField" style={styles.textField}>
      
      <label htmlFor={props.id} style={styles.label}>
        {label}
      </label>
      <input type="text" id={props.id} value={value} onChange={onChange} placeholder={placeHolder} {...props} style={styles.input}
      />
    </div>
  );
};

export default textField;