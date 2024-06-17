import React, {useEffect, useState} from 'react'
import { TextInput, LogoAndTitle, DropDown, PrimaryButton } from '../components'
import { Form, redirect, useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import MyAlert from '../components/MyAlert'
import { Loading } from '../components'

const Register = () => {
  const navigate = useNavigate();
  const {user, isUserLoading, displayAlert, alertText, alertType, registerUser} = useAppContext();

  const initialState = {
    nome: (user && user.nome) || '',
    cognome: (user && user.cognome) || '',
    email: (user && user.email) || '',
    password: '',
  }
  
  const [values, setValues] = useState(initialState);

  const handleChange = (key, value) => {
    setValues({...values, [key]: value});
  }

  const handleSubmit = () => {

    if (!values.nome || !values.cognome || !values.email || !values.password) {
      displayAlert('Tutti i campi sono obbligatori', 'warning');
      return;
    }

    registerUser(values);
  }

  useEffect(() => {
    if (user) {
      displayAlert('Registrazione avvenuta con successo', 'success');

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.nome && user.cognome && user.email) {
      displayAlert('Utente  già loggato', 'success');
  
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  }, []);


  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px' }}>
        <LogoAndTitle />
          <TextInput labelText="Nome" textValue={values.name} onChange={handleChange} />
          <TextInput labelText="Cognome" textValue={values.surname} onChange={handleChange} />
          <TextInput labelText="Email" textType="email" textValue={values.email} onChange={handleChange} />
          <TextInput labelText="Password" textType="password" textValue={values.password} onChange={handleChange} />
          <MyAlert message={alertText} severity={alertType} />
          <PrimaryButton  labelText="Registrati" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Register
