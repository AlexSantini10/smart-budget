import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({labelText, elements, style, onChange, name}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <Box style={style} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel >{labelText}</InputLabel>
        <Select
          value={value}
          label={labelText}
          name={name}
          onChange={handleChange}
        >
          {elements && elements.map(({ID,nome}) => (
            <MenuItem key={ID} value={ID}>{nome}</MenuItem> 
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}