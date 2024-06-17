import React, { useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

import {DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
        NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome} from '../components'
const Home = () => {

  const {saldo, saldoPassato, getSaldo} = useAppContext();

  useEffect(() => {
    getSaldo();
  }
  , []);

  return (
    <div style={{ width: "60vh", height: "100vh", margin:'auto', display: 'flex', flexDirection: 'column'}}>
      <TopArea/>
      <div style={{height: "15%", position: 'relative', top:0, margin:'auto'}}><SaldoHome saldoAttuale={saldo} saldoPassato={saldoPassato} valutaRiferimento={'€'}/></div>

      <PaperList sx={{}}/>

      <div style={{height: "40%", position: 'relative', bottom:0, display: 'flex', flexDirection: 'column'}}>
        <ButtonArea/>
        <TornaAllaHome/>
      </div>
    </div>
  )
}
/*
  
*/
export default Home