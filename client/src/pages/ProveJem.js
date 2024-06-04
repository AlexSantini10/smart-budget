import React from 'react'
import {DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header,} from '../components'
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
    </div>
  )
}

export default ProveJem