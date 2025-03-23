import React from 'react'

const UserAddressCard = () => {
    return (
        <div className='p-5 border rounded-md flex'>
            <div className='space-y-3'>
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

export default UserAddressCard