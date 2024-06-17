import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MyIcon from './MyIcon';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <div style={{position: 'Relative'}}>
        <BottomNavigation sx={{
            width: "100%",
            background: "#38A0FF",
            color: "#FFF",
            }} value={value} onChange={handleChange}>
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
            label="Home"
            value="Home"
            icon={<MyIcon Img="Home.svg" sx={{}}/>}
            onClick={() => {navigate('/home');}}
        />
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
            label="Transazioni"
            value="Transazioni"
            icon={<MyIcon Img="Transazioni.svg" sx={{}}/>}
            onClick={() => {navigate('/transazioni');}}
        />
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
            label="Conti"
            value="Conti"
            icon={<MyIcon Img="Conti.svg" sx={{}}/>}
            onClick={() => {navigate('/conti');}}
        />
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
        label="Statistiche"
        value="Statistiche"
        icon={<MyIcon Img="Statistiche.svg" sx={{}}/>} 
        onClick={() => {navigate('/statistiche');}}
        />
        </BottomNavigation>
    </div>
  );
}