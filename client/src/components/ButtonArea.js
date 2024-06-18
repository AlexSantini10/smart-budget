import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedButton from './OutlinedButton';

export default function ButtonArea({action}) {
return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white', width: '100%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <OutlinedButton labelText="+Aggiungi" action={action}/>    
    </Box>
);
}