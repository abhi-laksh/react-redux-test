import { Box, Button, FormHelperText } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../utils/helpers';


const Form = ({ handleSubmit, pristine, reset, submitting, classes, onSubmit, error}) => {

    const InputField = React.useMemo(() => {
        return ({
            label,
            input,
            meta: { touched, invalid, error },

            ...props
        }) => (
            <TextField
                label={label}
                type="number"
                placeholder={label}
                variant="standard"
                error={touched && invalid}
                helperText={touched && error}

                style={{
                    marginRight: 16,
                }}
                {...input}
                {...props}
            />
        )
    }, [])

    return (
        <>
            <Box
                component="form"
                sx={{
                    padding: "0.5rem 2rem",
                    display: "flex",
                    alignItems: "center",

                }}
                onSubmit={handleSubmit(onSubmit)}
            >

                <Field
                    name="day"
                    component={InputField}
                    label="Enter Birth Day"
                />
                <Field
                    name="month"
                    component={InputField}
                    label="Enter Birth Month"
                />
                <Field
                    name="year"
                    component={InputField}
                    label="Enter Birth Year"
                />



                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </Box>
            <FormHelperText error={!!error}>{error}</FormHelperText>
        </>
    )
}

export default reduxForm({
    form: 'Form',
    validate,
})(Form)
