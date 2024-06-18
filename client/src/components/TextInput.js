import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

const TextInput = ({labelText, textType, textValue, onChange}) => {
    const [value, setValue] = useState(textValue);

    const handleChange = (event) => {
        setValue(event.target.value);

        if (onChange)
            onChange(labelText.toLowerCase(), event.target.value);
    }

    return (
        <div style={{marginTop:'10px', marginBottom:'10px', marginLeft:'-10px'}}>
            <TextField type={textType} label={labelText} variant="outlined" onChange={handleChange} 
            sx={{
                
                    //borderRadius: "20px",
                    //border: "1px solid rgba(51, 52, 55, 0.50
                    background: "#FFF",
                    color: "rgba(51, 52, 55, 0.70)",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    width: "90%",
                
            }}
            />
        </div>
    )
}

export default TextInput