import React from 'react';

import Logo from '../components/LogoLanding';
import Titolo from '../components/TitoloLanding';
import InputField from '../components/InputField';

const Registrazione = () => {
  return (
    <div style={styles.container}>
      <p>
      <Logo/>
      <Titolo title="Smart Budget"/>
      </p>
      <h2 style={styles.subheading}>Benvenuto!</h2>
      <p style={styles.description}>Crea un account per iniziare</p>
      <form style={styles.form}>
        <div style={styles.row}>
          <InputField label="Nome" />
          <input type="text" placeholder="Cognome" style={styles.input} />
        </div>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.button}>Crea Account</button>
      </form>
      <p style={styles.footer}> Hai già un account? <a href="/login" style={styles.link}>Accedi</a></p>
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
  row: {
    display: 'flex',
    justifyContent: 'space-between'
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

export default Registrazione;
