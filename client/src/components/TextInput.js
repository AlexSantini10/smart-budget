import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const TextInput = ({labelName, textType}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
        </div>
    )
}

export default TextInput