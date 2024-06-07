import React from 'react';
import Button from '@mui/material/Button';
import MyIcon from './MyIcon';

const PulsanteImmagine = ({ Img }) => {
  return (
    <Button>
      <MyIcon Img={Img}/>
    </Button>
  );
};

export default PulsanteImmagine;
