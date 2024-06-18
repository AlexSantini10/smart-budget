import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';

const TextInput = ({name, labelText, textType, textValue, onChange, style}) => {
    const [value, setValue] = useState(textValue);

    useEffect(() => {
        if (textValue)
            setValue(textValue);
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event);
    }

    return (
        <div style={style}>
            <TextField name={name} type={textType} label={labelText} variant="outlined" onChange={handleChange}  value={value}
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