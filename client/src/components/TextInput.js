import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const TextInput = ({labelName, textType}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
    )
}

export default TextInput