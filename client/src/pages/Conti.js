import React, { act, useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

import {
  DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
  NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome
} from '../components'
const Conti = () => {

  const { saldo, saldoPassato, getSaldo, getTransazioni, transazioni, deleteTransazione, getConti, conti, deleteConto } = useAppContext();

  const [firstLabels, setFirstLabels] = React.useState([]);
  const [secondLabels, setSecondLabels] = React.useState([]);
  const [componentsA, setComponentsA] = React.useState([]);
  const [componentsB, setComponentsB] = React.useState([]);

  //var ComponentA = <PulsanteImmagine Img="coin.svg"/>;
  //var ComponentB = <PulsanteImmagine Img="CestinoElimina.svg"/>;

  useEffect(() => {
    getConti();
  }
    , []);

  useEffect(() => {

    var firstLabels = [];
    var secondLabels = [];


    for (var i = 0; i < conti.length; i++) {
      let act_firstLabels = firstLabels;
      let act_secondLabels = secondLabels;
      let act_componentsA = componentsA;
      let act_componentsB = componentsB;

      let act_ID = conti[i].ID;

      act_firstLabels.push(conti[i].nome);
      act_secondLabels.push(conti[i].saldo + "€");
      act_componentsA.push(<PulsanteImmagine Img="PennaModifica.svg" action={() => modificaConto(act_ID)} />);
      act_componentsB.push(<PulsanteImmagine Img="CestinoElimina.svg" action={() => eliminaConto(act_ID)} />);

      setFirstLabels(act_firstLabels);
      setSecondLabels(act_secondLabels);
      setComponentsA(act_componentsA);
      setComponentsB(act_componentsB);
    }

  }
    , [conti]);

  const eliminaConto = (id) => {
    console.log("Elimino la transazione con id: ", id);
    deleteConto(id);
  }

  const modificaConto = (id) => {
    // TODO: implementare la chiamata al server
    console.log("Modifico il conto con id: ", id);

  }

  return (
    <div style={{ width: "60vh", height: "100vh", margin: 'auto', display: 'flex', flexDirection: 'column' }}>
      <TopArea />

      <PaperList firstLabels={firstLabels} secondLabels={secondLabels} ComponentA={componentsA} ComponentB={componentsB} />

      <div style={{ height: "40%", position: 'relative', bottom: 0, display: 'flex', flexDirection: 'column' }}>
        <ButtonArea />
        <TornaAllaHome />
      </div>
    </div>
  )
}
/*
  
*/
export default Conti