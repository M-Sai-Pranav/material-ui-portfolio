import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Input(){
    return(
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Your email" variant="outlined" />
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField id="outlined-basic" label="Postcode" variant="outlined" />
            <Button>Find Address</Button>
            </Box>
        </>
    )
}
export default Input