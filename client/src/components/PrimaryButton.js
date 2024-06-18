import React from 'react'
import Button from '@mui/material/Button';

const PrimaryButton = ({labelText, onClick, style}) => {
  return (
    <div style={style}>
      <Button variant="contained" onClick={onClick}
      sx={{
        borderRadius: "8px",
        border: "1px solid rgba(51, 52, 55, 0.50)",
        background: "#38A0FF",
        textTransform: 'capitalize',
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        width: "90%",
        height: "100%"
      }}>{labelText}</Button>
    </div>
  )
}

export default PrimaryButton