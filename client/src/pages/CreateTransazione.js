import React, { act, useEffect } from 'react'
import { LogoutButton } from '../widgets'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

import {
  DropDown, Logo, LogoAndTitle, PrimaryButton, TextInput, OutlinedButton, Header, PulsanteConfermaAzzurro, PulsanteConfermaRosso, PulsanteAnnulla, PulsanteImmagine,
  NavBar, MyIcon, TopArea, PaperList, TornaAllaHome, ButtonArea, SaldoHome
} from '../components'
import Categorie from './Categorie'
import MyAlert from '../components/MyAlert'
const CreateTransazione = () => {

  const { getConti, conti, getCategorie, categorie, createTransazione, displayAlert, alertText, alertType } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    getConti();
    getCategorie();
  }, []);

  const act_date = new Date();

  const initFormData = {
    nome: '',
    importo: 0,
    tipo_movimento: '',
    data: `${act_date.getFullYear()}-${act_date.getMonth() + 1}-${act_date.getDate()}`,
    ora: `${act_date.getHours()}:${act_date.getMinutes()}`,
    id_conto_1: '',
    id_conto_2: '',
    id_categoria: ''
  }

  const [formData, setFormData] = React.useState(initFormData);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.nome === '' || formData.importo === 0 || formData.tipo_movimento === '' || formData.id_categoria === '' || formData.id_conto_1 === '') {
      displayAlert('Compilare tutti i campi', 'error');
      return;
    }

    let to_send_data = formData;
    if (formData.tipo_movimento === 3 && formData.id_conto_2 === '') {
      to_send_data.id_conto_2 = null;
    }

    createTransazione(to_send_data);

    // Refresh the app
    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 1000);
  }

  return (
    <div>
      <div style={{ width: "60vh", height: "100vh", margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        <TextInput name="nome" labelText="Nome transazione" textType="text" style={{margin:'10px'}} onChange={handleChange} />
        <TextInput name="importo" labelText="Importo" textType="number" style={{margin:'10px'}} onChange={handleChange} />
        <DropDown name="tipo_movimento" labelText="Tipo movimento" textType="text" style={{margin:'10px'}} onChange={handleChange} elements={[
          {ID: 1, nome: 'Entrata'},
          {ID: 2, nome: 'Uscita'},
          {ID: 3, nome: 'Trasferimento'}
        
        ]} />
        <DropDown name="id_categoria" labelText="Categoria" textType="text" style={{margin:'10px'}} onChange={handleChange} elements={categorie} />
        <DropDown name="id_conto_1" labelText="Conto" textType="text" style={{margin:'10px'}} onChange={handleChange} elements={conti} />

        {formData.tipo_movimento === 3 && <DropDown name="id_conto_2" labelText="Conto 2" textType="text" onChange={handleChange} elements={conti} style={{margin:'10px'}}/>}

        <PrimaryButton name="id_conto_2" labelText="Conferma" style={{margin:'10px'}} onClick={handleSubmit} />
        
        <MyAlert message={alertText} severity={alertType} />
        
        <TornaAllaHome />
      </div>

    </div>
  )
}
/*
  
*/
export default CreateTransazione