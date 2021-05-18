import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                <TextField
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    label={ label }
                />
                )}
                name={ name }
                control={control}
                rules={{ required: true }}
            />
        </Grid>
    );
}

export default FormInput;
