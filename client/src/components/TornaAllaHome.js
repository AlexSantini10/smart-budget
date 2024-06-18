import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MyIcon from './MyIcon';
import { useNavigate } from 'react-router-dom';

export default function TornaAllaHome(defaultValue = "Home") {

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/home');
  };

  return (
    <div style={{position: 'relative'}}>
        <BottomNavigation sx={{
            height: "100%",
            width: "100%",
            background: "#38A0FF",
            color: "#FFF",
            }} onClick={handleClick}>
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
            label="Home"
            value="Home"
            icon={<MyIcon Img="Home.svg" sx={{}}/>}
        />
        </BottomNavigation>
    </div>
  );
}