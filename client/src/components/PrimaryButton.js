import React from 'react'
import Button from '@mui/material/Button';

const PrimaryButton = ({labelText}) => {
  return (
    <div>
      <Button variant="contained"
      sx={{
        borderRadius: "8px",
        border: "1px solid rgba(51, 52, 55, 0.50)",
        background: "#38A0FF",
        textTransform: 'capitalize',
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
      }}>{labelText}</Button>
    </div>
  )
}

export default PrimaryButton