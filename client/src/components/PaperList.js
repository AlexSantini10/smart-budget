import * as React from 'react';
import MyPaper from './MyPaper';
import Box from '@mui/material/Box';
import PulsanteImmagine from './PulsanteImmagine';

const testFirstLabels = ["1Label1", "2Label1", "3Label1", "4Label1", "5Label1", "6Label1", "7Label1", "8Label1", "9Label1", "10Label1", "11Label1", "12Label1", "13Label1", "terzultimoLabel1", "penultimoLabel1", "ultimoLabel1"];
const testSecondLabels = ["1Label2", "2Label2", "3Label2", "4Label2", "5Label2", "6Label2", "7Label2", "8Label2", "9Label2", "10Label2", "11Label2", "12Label2", "13Label2", "terzultimoLabel2", "penultimoLabel2", "ultimoLabel2"];
const cA = <PulsanteImmagine Img="coin.svg"/>;
const cB = <PulsanteImmagine Img="CestinoElimina.svg"/>;

export default function PaperList({firstLabels = testFirstLabels, secondLabels = testSecondLabels, ComponentA = cA, ComponentB = cB}) { // firstLabels e secondLabels sono due array di stringhe
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
        <MyPaper key={label} label={label} label2={secondLabels[index]} componentA={ComponentA} componentB={ComponentB}/>
      ))
      }
    </Box>
  );
}