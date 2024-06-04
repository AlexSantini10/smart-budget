import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';
import Logo from './Logo';
import OptionsIcon from './OptionsIcon';
import ProfileImage from './ProfileImage';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="fixed" sx={{background: "#38A0FF" }}>
        <Toolbar>
        <Button><OptionsIcon/></Button> 
          <Typography variant="h6" component="div" sx={{
             flexGrow: 1, 
             color: "#FFF",
             textAlign: "center",
             fontFamily: "Roboto",
             fontSize: "30px",
             fontStyle: "normal",
             fontWeight: 600,
             lineHeight: "140%", /* oppure "28px" */
             letterSpacing: "-0.4px"
            }}>
            SmartBudget
          </Typography>
          <ProfileImage/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}