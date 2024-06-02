import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <img src="logo.png" alt="SmartBudget Logo" style={styles.logo} />
      <h1 style={styles.heading}>SmartBudget</h1>
      <h2 style={styles.subheading}>Bentornato!</h2>
      <p style={styles.description}>Accedi per continuare</p>
      <form style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.button}>Accedi</button>
      </form>
      <p style={styles.footer}>
        Non hai un account? <a href="/register" style={styles.link}>Registrati</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  logo: {
    width: '50px',
    height: '50px',
    marginBottom: '20px'
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold'
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  footer: {
    marginTop: '10px'
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none'
  }
};

export default Login;
