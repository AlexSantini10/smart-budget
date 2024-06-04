import React from 'react'
import Button from '@mui/material/Button';
import Img from '../static/img/PennaModifica.svg'

const PennaModifica = () => {
  return (
    <Button>
        <img src={Img} alt="Penna" style={{height:'60px', width:'60px'}} />
    </Button>
  )
}

export default PennaModifica