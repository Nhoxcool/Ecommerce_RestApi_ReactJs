import React from 'react'
import ProfileFieldCart from '../../../component/ProfileFieldCart'
import { Divider } from '@mui/material'

const UserDetails = () => {
    return (
        <div className='flex justify-center py-10'>
            <div className='w-full lg:w-[70%]'>
                <div className='flex items-center pb-3 justify-between'>
                    <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
                </div>
                <div className=''>
                    <ProfileFieldCart keys='Name' value={"TuTran"} />
                    <Divider />
                    <ProfileFieldCart keys='Email' value={"test@gmail.com"} />
                    <Divider />
                    <ProfileFieldCart keys='Mobile' value={"0785234564"} />
                </div>
            </div>
        </div>
    )
}

export default UserDetails