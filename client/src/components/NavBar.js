import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MyIcon from './MyIcon';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{position: 'Relative'}}>
        <BottomNavigation sx={{
            width: "100%",
            background: "#38A0FF",
            color: "#FFF",
            }} value={value} onChange={handleChange}>
        <BottomNavigationAction sx = {{color: "#FFF"}}
            label="Home"
            value="Home"
            icon={<MyIcon Img="Home.svg" sx={{}}/>}
        />
        <BottomNavigationAction sx = {{color: "#FFF"}}
            label="Transazioni"
            value="Transazioni"
            icon={<MyIcon Img="Transazioni.svg" sx={{}}/>}
        />
        <BottomNavigationAction sx = {{color: "#FFF"}}
            label="Conti"
            value="Conti"
            icon={<MyIcon Img="Conti.svg" sx={{}}/>}
        />
        <BottomNavigationAction sx = {{color: "#FFF"}}
        label="Statistiche"
        value="Statistiche"
        icon={<MyIcon Img="Statistiche.svg" sx={{}}/>} />
        </BottomNavigation>
    </div>
  );
}