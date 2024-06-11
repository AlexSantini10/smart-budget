import React from 'react'

import {DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
        NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea} from '../components'
const ProveJem = () => {
  return (
    <div style={{ width: "60vh", height: "100vh", margin:'auto', display: 'flex', flexDirection: 'column'}}>
      <TopArea/>
      <div style={{height: "15%", position: 'relative', top:0}}></div>

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
export default ProveJem