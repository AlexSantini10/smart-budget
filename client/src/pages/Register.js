import React, {useState} from 'react'
import { TextInput, LogoAndTitle, DropDown, PrimaryButton } from '../components'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Register = () => {
  const navigate = useNavigate();
  const {user, isUserLoading, showAlert, alertText, alertType, registerUser} = useAppContext();

  const initialState = {
    nome: (user && user.nome) || '',
    cognome: (user && user.cognome) || '',
    email: (user && user.email) || '',
    password: '',
  }
  
  const [values, setValues] = useState(initialState);

  if (user !== null)
    navigate('/');

  const handleChange = (key, value) => {
    setValues({...values, [key]: value});
  }

  const handleSubmit = () => {
    registerUser(values);
  }

  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px' }}>
        <LogoAndTitle />
        <TextInput labelText="Nome" textValue={values.name} onChange={handleChange} />
        <TextInput labelText="Cognome" textValue={values.surname} onChange={handleChange} />
        <TextInput labelText="Email" textType="email" textValue={values.email} onChange={handleChange} />
        <TextInput labelText="Password" textType="password" textValue={values.password} onChange={handleChange} />
        <PrimaryButton labelText="Registrati" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Register
