import React from 'react'

import {DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
        NavBar, MyIcon, TopArea, PaperList} from '../components'
const ProveJem = () => {
  return (
    <div style={{ width: "60vh", height: "100vh", margin:'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <TopArea/>
      <PaperList/>
      <div style={{backgroundColor: '#FFF', border: "1px solid black", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
        width: '100%', 
        height:'10%',
        position: 'relative',
        bottom: '0',
      }}>
      <OutlinedButton sx={{width: '150vw'}} labelText="+ Aggiungi" />
      </div>
    </div>
  )
}
/*
  
*/
export default ProveJem