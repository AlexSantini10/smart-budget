import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({labelText, elements}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={labelText}
          onChange={handleChange}
        >
          {elements && Object.entries(elements).map(([id,nomeConto]) => (
            <MenuItem key={id} value={id}>{nomeConto}</MenuItem> 
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}