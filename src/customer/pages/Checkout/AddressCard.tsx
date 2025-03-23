import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange = (event: any) => {
        console.log(event.target.checked);
    }
    return (
        <div className='p-5 border rounded-md flex'>
            <div>
                <Radio
                    checked={true}
                    onChange={handleChange}
                    value=""
                    name='radio-button'
                />
            </div>
            <div className='space-y-3 pt-3'>
                <h1>TuTran</h1>
                <p className='w-[320px]'>
                    123 Maple Street, New York, NY 10001, USA
                </p>
                <p>
                    <strong>Mobile: </strong> +1 (555) 123-4567
                </p>
            </div>
        </div>
    )
}

export default AddressCard