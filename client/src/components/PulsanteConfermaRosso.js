import React from 'react'
import Button from '@mui/material/Button';


const PulsanteConfermaRosso = ({labelText}) => (
    <Button variant="outlined"
    sx={{
        color: 'rgba(172, 0, 0, 0.80)',
        textTransform: 'capitalize',
        borderRadius: '100px',
        border: '1px solid rgba(51, 52, 55, 0.50)',
        background: '#FFF',
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
      }}
    >
      {labelText}
    </Button>
)

export default PulsanteConfermaRosso