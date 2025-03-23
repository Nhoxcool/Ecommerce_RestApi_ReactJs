import { Category, Sledding } from '@mui/icons-material'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const CreateDealForm = () => {
    const formik = useFormik({
        initialValues: {
            dicount: 0,
            Category: ""
        },
        onSubmit: (values) => {
            console.log("submit", values);
        }
    })
    return (
        <Box component={"form"} onSubmit={formik.handleSubmit} className='space-y-6'>
            <Typography variant='h4' className='text-center'>
                Create Deal
            </Typography>

            <TextField
                fullWidth
                name='dicount'
                label="Discount"
                value={formik.values.dicount}
                onChange={formik.handleChange}
                error={formik.touched.dicount && Boolean(formik.errors.dicount)}
                helperText={formik.touched.dicount && formik.errors.dicount}
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.Category}
                    label="Category"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Button fullWidth sx={{ py: ".9rem" }} type='submit' variant='contained'>
                create deal
            </Button>
        </Box>
    )
}

export default CreateDealForm