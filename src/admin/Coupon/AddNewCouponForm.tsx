import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { Box, Button, Grid2, TextField } from '@mui/material';

interface CouponFormValues {
    code: string,
    discountPercentage: number,
    validityStartDate: Dayjs | null,
    validityEndDate: Dayjs | null,
    minimunOrderValue: number
}

const AddNewCouponForm = () => {

    const formik = useFormik<CouponFormValues>({
        initialValues: {
            code: "",
            discountPercentage: 0,
            validityStartDate: null,
            validityEndDate: null,
            minimunOrderValue: 0
        },
        onSubmit: (values) => {
            const formatedValues = {
                ...values,
                validityStartDate: values.validityStartDate?.toISOString(),
                validityEndDate: values.validityStartDate?.toISOString(),
            }

            console.log("form submited", formatedValues);
        }
    });
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary-color pb-5 text-center'>Create New Coupon</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                name='code'
                                label="Coupon code"
                                value={formik.values.code}
                                onChange={formik.handleChange}
                                error={formik.touched.code && Boolean(formik.errors.code)}
                                helperText={formik.touched.code && formik.errors.code}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                name='discountPercentage'
                                label="Dicount Percentage"
                                value={formik.values.discountPercentage}
                                onChange={formik.handleChange}
                                error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <DatePicker
                                sx={{ width: "100%" }}
                                label="validity Star Date"
                                name='validityStarDate'
                                value={formik.values.validityStartDate}
                                onChange={(date) => formik.handleChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <DatePicker
                                sx={{ width: "100%" }}
                                label="validity End Date"
                                name='validitySEndDate'
                                value={formik.values.validityEndDate}
                                onChange={(date) => formik.handleChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                name='minimunOrderValue'
                                label="Minimun Order Value"
                                value={formik.values.minimunOrderValue}
                                onChange={formik.handleChange}
                                error={formik.touched.minimunOrderValue && Boolean(formik.errors.minimunOrderValue)}
                                helperText={formik.touched.minimunOrderValue && formik.errors.minimunOrderValue}
                            />
                        </Grid2>

                        <Grid2 size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth sx={{ py: ".8rem" }}>
                                Create Coupon
                            </Button>
                        </Grid2>

                    </Grid2>
                </Box>
            </LocalizationProvider>
        </div>
    )
}

export default AddNewCouponForm