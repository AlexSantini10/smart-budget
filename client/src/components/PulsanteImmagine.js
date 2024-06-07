import React from 'react';
import Button from '@mui/material/Button';
import MyIcon from './MyIcon';

const PulsanteImmagine = ({ Img, action }) => {

  return (
    <Button onClick={action}>
      <MyIcon Img={Img}/>
    </Button>
  );
};

export default PulsanteImmagine;
