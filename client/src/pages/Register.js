import React, {useEffect, useState} from 'react'
import { TextInput, LogoAndTitle, DropDown, PrimaryButton } from '../components'
import { Form, redirect, useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import MyAlert from '../components/MyAlert'
import { Loading } from '../components'

let isUserAlreadyLogged = false;

const Register = () => {
  const navigate = useNavigate();
  const {user, isUserLoading, displayAlert, alertText, alertType, registerUser, getCurrentUser, isUserSetupLoading} = useAppContext();

  const initialState = {
    nome: (user && user.nome) || '',
    cognome: (user && user.cognome) || '',
    email: (user && user.email) || '',
    password: '',
  }
  
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = () => {

    if (!values.nome || !values.cognome || !values.email || !values.password) {
      displayAlert('Tutti i campi sono obbligatori', 'warning');
      return;
    }

    registerUser(values);
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (user && isUserLoading) {
      navigate('/home');
    }
  }, [user]);


  useEffect(() => {
    if (user && !isUserLoading) {
      displayAlert('Registrazione avvenuta con successo', 'success');

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  }, [isUserLoading]);

  

  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px', display:'flex', flexDirection:'column', alignContent: 'center' }}>
        <div style={{marginLeft:'15%'}}>
        <LogoAndTitle />
        </div>
        <p style={{ 
            color: 'rgba(51, 52, 55, 0.80)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            }}>Benvenuto</p>
          <br/>
          <div style={{marginLeft: '10px', width: '100%'}}>
          <p style={{ 
            color: 'rgba(51, 52, 55, 0.80)',
            textAlign: 'left',
            fontFamily: 'Inter',
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginLeft: '7px'
            }}>Crea un account per iniziare</p>

          <div style={{marginLeft: '20px'}}>
          <div style={{display: 'flex', width: '80%'}}>
          <TextInput name="nome" labelText="Nome" textValue={values.name} onChange={handleChange} />
          <TextInput name="cognome" labelText="Cognome" textValue={values.surname} onChange={handleChange} />
          </div>
          <div style={{width: '85%'}}>
          <TextInput name="email" labelText="Email" textType="email" textValue={values.email} onChange={handleChange} sx={{width:'100%'}}/>
          <TextInput name="password" labelText="Password" textType="password" textValue={values.password} onChange={handleChange} />
          </div>
          </div>
          <MyAlert message={alertText} severity={alertType} />
          <PrimaryButton  labelText="Registrati" onClick={handleSubmit} />
          <div style={{textAlign: 'left', marginTop: '10px', color: 'rgba(51, 52, 55, 0.80)', fontFamily: 'Inter', 
            fontSize: '18px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal',
            }}>
          Hai già un account? <Link to="/login" style={{ textDecoration: 'none', color: '#38A0FF' }}>Accedi</Link>
          </div>

          </div>

      </div>
    </div>
  )
}

export default Register
