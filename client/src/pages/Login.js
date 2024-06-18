import React, {useEffect, useState} from 'react'
import { TextInput, LogoAndTitle, DropDown, PrimaryButton } from '../components'
import { Form, redirect, useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import MyAlert from '../components/MyAlert'

const Login = () => {
  const navigate = useNavigate();
  const {user, isUserLoading, displayAlert, alertText, alertType, loginUser, getCurrentUser} = useAppContext();

  const initialState = {
    email: (user && user.email) || '',
    password: '',
  }
  
  const [values, setValues] = useState(initialState);

  const handleChange = (key, value) => {
    setValues({...values, [key]: value});
  }

  const handleSubmit = () => {

    if (!values.email || !values.password) {
      displayAlert('Tutti i campi sono obbligatori', 'warning');
      return;
    }

    loginUser(values);
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
    if (user) {
      displayAlert('Login avvenuto con successo', 'success');

      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  }, [user]);

  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px', display:'flex', flexDirection:'column', alignContent: 'center' }}>
        <LogoAndTitle />
          <p style={{ 
            color: 'rgba(51, 52, 55, 0.80)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal'
            }}>Benvenuto</p>
          <p style={{ 
            color: 'rgba(51, 52, 55, 0.80)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginTop: '-10px'
            }}>Accedi per continuare</p>
          <div style={{marginLeft: '10%'}}>
          <TextInput labelText="Email" textType="email" textValue={values.email} onChange={handleChange} />
          <TextInput labelText="Password" textType="password" textValue={values.password} onChange={handleChange} />
          <MyAlert message={alertText} severity={alertType} />
          <div style={{width:'100%'}}>
            <PrimaryButton  labelText="Accedi" onClick={handleSubmit} sx={{width: '100%', height: '10%'}} />
          </div>
          <div style={{textAlign: 'left', marginTop: '10px', color: 'rgba(51, 52, 55, 0.80)', fontFamily: 'Inter', fontSize: '18px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal'}}>
            Non hai un account? <Link to="/" style={{ textDecoration: 'none', color: '#38A0FF' }}>Registrati</Link>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default Login