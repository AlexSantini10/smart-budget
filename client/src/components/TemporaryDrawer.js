import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import OptionsIcon from './OptionsIcon';
import MyIcon from './MyIcon';
import { ProfileImage } from '.';

export default function TemporaryDrawer({nome = "Nome",cognome = "Cognome"}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#38A0FF' }} role="SideBar" onClick={toggleDrawer(false)}>
      <div style={{position: 'relative', top:5, display:'flex', flexDirection:'row', height:'100%', maxHeight:'10px'}}>
        <div style={{marginLeft:'8px'}}><ProfileImage/></div>
        <div style={{display:'flex', flexDirection:'column', width:'100%', marginLeft:'10px', marginTop:'-10px'}}>
          <p style={{color: '#38A0FF',
                      fontFamily: 'Roboto',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '100%', /* 16px */
                      letterSpacing: '-0.32px',
          }}>{nome}</p>
          <p style={{color: '#38A0FF',
                      fontFamily: 'Roboto',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '100%', /* 16px */
                      letterSpacing: '-0.32px',
                      marginTop: -15,
          }}>{cognome}</p>
        </div>
      </div>
      <List>
        {['Il mio profilo', 'Categorie', 'Budgets', 'Debiti/Crediti', 'Contatti'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                index == 0 ? <MyIcon Img="settings.svg"/> :
                index == 1 ? <MyIcon Img="category.svg"/> :
                index == 2 ? <MyIcon Img="coin.svg"/> :
                index == 3 ? <MyIcon Img="watch.svg"/> :
                index == 4 ? <MyIcon Img="Contatti.svg"/> : 
                <MailIcon />
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div>
        <ListItemButton sx={{position: 'relative', bottom: 5}}>
          <ListItemIcon>
            <MyIcon Img="export.svg" />
          </ListItemIcon>
          <ListItemText primary={'Esporta Dati'} />
        </ListItemButton>
      </div>  
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><OptionsIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}