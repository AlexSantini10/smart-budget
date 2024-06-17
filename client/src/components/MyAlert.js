import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MyAlert = ({ message, severity }) => {
    // Severity can be 'success', 'info', 'warning', 'error'

    if (severity === undefined) {
        severity = 'info'
    }

    return (
        <Stack sx={{ width: '100%', marginBottom:'10px' }} spacing={2}>
            <Alert severity={severity}>{message}</Alert>
        </Stack>
    )
}

export default MyAlert