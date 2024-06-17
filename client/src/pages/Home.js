import React, { act, useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

import {
  DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
  NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome
} from '../components'
const Home = () => {

  const { saldo, saldoPassato, getSaldo, getTransazioni, transazioni, deleteTransazione } = useAppContext();

  const [firstLabels, setFirstLabels] = React.useState([]);
  const [secondLabels, setSecondLabels] = React.useState([]);
  const [componentsA, setComponentsA] = React.useState([]);
  const [componentsB, setComponentsB] = React.useState([]);

  //var ComponentA = <PulsanteImmagine Img="coin.svg"/>;
  //var ComponentB = <PulsanteImmagine Img="CestinoElimina.svg"/>;

  useEffect(() => {
    getSaldo();
    getTransazioni();
  }
    , []);

  useEffect(() => {

    var firstLabels = [];
    var secondLabels = [];


    for (var i = 0; i < transazioni.length; i++) {
      let act_firstLabels = firstLabels;
      let act_secondLabels = secondLabels;
      let act_componentsA = componentsA;
      let act_componentsB = componentsB;

      let act_ID = transazioni[i].ID;

      let actDate = new Date(transazioni[i].data);

      let dataString = actDate.getDate() + "/" + (actDate.getMonth() + 1) + "/" + actDate.getFullYear();

      act_firstLabels.push(transazioni[i].nome + ' - ' + dataString);
      act_secondLabels.push((transazioni[i].tipo_movimento === 1 ? '+' : (transazioni[i].tipo_movimento === 2 ? '-' : '')) + transazioni[i].importo + "€ (" + transazioni[i].nomeConto + (transazioni[i].tipo_movimento === 3 ? " -> " + transazioni[i].nomeConto2 : "") + ")");
      act_componentsA.push(<PulsanteImmagine Img="PennaModifica.svg" action={() => modificaTransazione(act_ID)} />);
      act_componentsB.push(<PulsanteImmagine Img="CestinoElimina.svg" action={() => eliminaTransazione(act_ID)} />);

      setFirstLabels(act_firstLabels);
      setSecondLabels(act_secondLabels);
      setComponentsA(act_componentsA);
      setComponentsB(act_componentsB);
    }

    getSaldo();
  }
    , [transazioni]);

  const eliminaTransazione = (id) => {
    console.log("Elimino la transazione con id: ", id);
    deleteTransazione(id);
  }

  const modificaTransazione = (id) => {
    // TODO: implementare la chiamata al server
    console.log("Modifico la transazione con id: ", id);

  }

  return (
    <div style={{ width: "60vh", height: "100vh", margin: 'auto', display: 'flex', flexDirection: 'column' }}>
      <TopArea />
      <div style={{ height: "15%", position: 'relative', top: 0, margin: 'auto' }}><SaldoHome saldoAttuale={saldo} saldoPassato={saldoPassato} valutaRiferimento={'€'} /></div>

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
export default Home