import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
    return (
        <>
            <div className='space-y-3 p-5'>
                <div className='flex justify-between items-center'>
                    <span>Subtotal</span>
                    <span>$80</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Discount</span>
                    <span>$69</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Shipping</span>
                    <span>$6.9</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Plateform</span>
                    <span>Free</span>
                </div>

            </div>
            <Divider />
            <div className='flex justify-between items-center p-5 text-primary-color'>
                <span>Total</span>
                <span>$79</span>
            </div>
        </>
    )
}

export default PricingCard