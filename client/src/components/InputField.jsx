import React from 'react';

const styles = {
  inputField: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    textColor: '#333437',
    opacity: 0.7,
    width: '30%',
    marginBottom: -6,
    backgroundColor: 'white',
    zIndex: 5,
  },
  input: {
    border: '1px solid #333437',
    Opacity: 0.5,
    padding: 8,
    borderRadius: 4,
    width: '100%',
    zIndex: -1,
  },
};

const InputField = ({ label, value, onChange, ...props }) => {
  return (
    <div style={styles.inputField}>
      <label htmlFor={props.id} style={styles.label}>{label}</label>
      <input
        type="text"
        id={props.id}
        value={value}
        onChange={onChange}
        {...props}
        style={styles.input}
      />
    </div>
  );
};

export default InputField;