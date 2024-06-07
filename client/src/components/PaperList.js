import * as React from 'react';
import MyPaper from './MyPaper';
import Box from '@mui/material/Box';

export default function PaperList() {
  return (
    <Box component="div" sx={{ 
      position: 'relative',
      overflow: 'auto',
      top: '0',
      width: '95%',
      height: '75%',
      margin: 'auto',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
     }}>
      <MyPaper label2="1"/>
      <MyPaper label2="2"/>
      <MyPaper label2="3"/>
      <MyPaper label2="4"/>
      <MyPaper label2="5"/>
      <MyPaper label2="6"/>
      <MyPaper label2="7"/>
      <MyPaper label2="8"/>
      <MyPaper label2="9"/>
      <MyPaper label2="10"/>
      <MyPaper label2="11"/>
      <MyPaper label2="12"/>
      <MyPaper label2="13"/>
      <MyPaper label2="terzultimo"/>
      <MyPaper label2="penultimo"/>
      <MyPaper label2="ultimo"/>
    </Box>
  );
}
/*
<div style={{ 
      position: 'sticky',
      top: '0',
      marginTop: 0,
    }}>
*/