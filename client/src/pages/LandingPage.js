import React from 'react'
import { TextInput, Logo, LogoAndTitle } from '../components'

const LandingPage = () => {
  return (
    <div style={{ padding: '10px'}}>
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop:'50px' }}>
        <LogoAndTitle />
      </div>
      <TextInput />
      <Logo />
    </div>
  )
}

export default LandingPage
