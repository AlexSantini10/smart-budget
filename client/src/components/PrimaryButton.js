import React from 'react'
import Button from '@mui/material/Button';

const PrimaryButton = ({labelText}) => {
  return (
    <div>
      <Button variant="contained">{labelText}</Button>
    </div>
  )
}

export default PrimaryButton