import React from 'react'
import Button from '@mui/material/Button';


const OutlinedButton = ({labelText}) => (
    <Button variant="outlined"
    sx={{
        color: '#38A0FF',
        textTransform: 'capitalize',
        borderRadius: '100px',
        border: '1px solid #38A0FF',
        background: '#FFF',
      }}
    >
      {labelText}
    </Button>
)

export default OutlinedButton