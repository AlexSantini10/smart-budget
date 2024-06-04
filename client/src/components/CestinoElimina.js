import React from 'react'
import Img from '../static/img/CestinoElimina.svg'
import Button from '@mui/material/Button';

const CestinoElimina = () => {
  return (
    <Button>
        <img src={Img} alt="Cestino" style={{height:'60px', width:'60px'}} />
    </Button>
  )
}

export default CestinoElimina