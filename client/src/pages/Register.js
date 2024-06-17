import React from 'react'
import { TextInput, LogoAndTitle, DropDown, PrimaryButton } from '../components'

const Register = () => {
  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px' }}>
        <LogoAndTitle />
        <TextInput labelText="Nome" />
        <TextInput labelText="Cognome" />
        <TextInput labelText="Email" textType="email" />
        <TextInput labelText="Password" textType="password" />
      </div>
      <DropDown labelText="Conto" elements={{1:'Conto Corrente', 2:'Conto Risparmio'}} />
      <PrimaryButton labelText="Registrati" />
    </div>
  )
}

export default Register
