import React from 'react'
import {DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, CestinoElimina, PennaModifica} from '../components'
const ProveJem = () => {
  return (
    <div>
        <div><DropDown>Cacca</DropDown></div>
        <div><Logo></Logo></div>
        <div><LogoAndTitle></LogoAndTitle></div>
        <PrimaryButton labelText={"Crea Account"}> </PrimaryButton>
        <TextInput labelText={"Nome"}></TextInput>
        <OutlinedButton labelText={"+ Aggiungi"}></OutlinedButton>
        <Header></Header>
        <PulsanteConfermaAzzurro labelText={"Conferma"}></PulsanteConfermaAzzurro>
        <PulsanteConfermaRosso labelText={"Conferma"}></PulsanteConfermaRosso>
        <PulsanteAnnulla labelText={"Annulla"}></PulsanteAnnulla>
        <CestinoElimina/>
        <PennaModifica/>
    </div>
  )
}

export default ProveJem