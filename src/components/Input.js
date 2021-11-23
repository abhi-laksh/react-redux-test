import TextField from '@mui/material/TextField';
import React from 'react';

const Input = () => {
    return (
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
    )
}

export default Input
