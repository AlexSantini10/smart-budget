import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const TextInput = ({labelText, textType}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div style={{margin:'10px'}}>
            <TextField type={textType} label={labelText} variant="outlined" onChange={handleChange} />
        </div>
    )
}

export default TextInput