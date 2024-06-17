import * as React from 'react';
import MyPaper from './MyPaper';
import Box from '@mui/material/Box';
import PulsanteImmagine from './PulsanteImmagine';
export default function PaperList({firstLabels, secondLabels, ComponentA, ComponentB}) { // firstLabels e secondLabels sono due array di stringhe
  
  React.useEffect(() => {
    
  }, [firstLabels, secondLabels]);
  
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
      {
      firstLabels.map((label, index) => (
        <MyPaper key={index} label={label} label2={secondLabels[index]} componentA={ComponentA[index]} componentB={ComponentB[index]}/>
      ))
      }
    </Box>
  );
}