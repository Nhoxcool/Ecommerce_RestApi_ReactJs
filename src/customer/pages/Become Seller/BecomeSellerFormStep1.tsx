import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep1 = ({ formik }: any) => {
    return (
        <Box>
            <p className='text-xl font-bold text-center pb-9'>
                Contact Details
            </p>
            <div className='space-y-9 '>
                <TextField
                    fullWidth
                    name='mobile'
                    label="Mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <TextField
                    fullWidth
                    name='mst'
                    label="Mst"
                    value={formik.values.mst}
                    onChange={formik.handleChange}
                    error={formik.touched.mst && Boolean(formik.errors.mst)}
                    helperText={formik.touched.mst && formik.errors.mst}
                />
            </div>
        </Box>
    )
}

export default BecomeSellerFormStep1