import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MyIcon from './MyIcon';

export default function TornaAllaHome(defaultValue = "Home") {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{position: 'Relative'}}>
        <BottomNavigation sx={{
            height: "100%",
            width: "100%",
            background: "#38A0FF",
            color: "#FFF",
            }} value={value} onChange={handleChange}>
        <BottomNavigationAction sx = {{color: "#FFF !important"}}
            label="Home"
            value="Home"
            icon={<MyIcon Img="Home.svg" sx={{}}/>}
        />
        </BottomNavigation>
    </div>
  );
}