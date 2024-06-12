import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfileImage from './ProfileImage';
import TemporaryDrawer from './TemporaryDrawer';

export default function Header() {
  return (
    //<Box sx={{ flexGrow: 1,}}>
      <AppBar /*position="fixed"*/ sx={{position: 'relative', background: "#38A0FF", boxShadow: 'none' }}>
        <Toolbar>
        <TemporaryDrawer/>
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
    //</Box>
  );
}