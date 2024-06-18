import React, { act, useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

import {
  DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
  NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome
} from '../components'
const Error = () => {
  return (
    <div style={{ width: "60vh", height: "100vh", margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <img src={img} alt='not found' style={{marginTop:"30%"}} />
        <h3>Oh no! Page not found</h3>
        <p>We can't find the page you are looking for</p>
        <Link to='/'>Back Home</Link>
    </div>
  )
}
/*
  
*/
export default Error