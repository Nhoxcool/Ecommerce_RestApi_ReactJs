import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div>
          <Avatar sizes='small' sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className='font-bold text-primary-color'>PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]' src="https://th.bing.com/th/id/OIP.B_ceNIC8_OTbxTCxy6iKzwHaJQ?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='w-full space-y-2'>
          <h1 className='font-bold'>G-Shock GM110G-1A9</h1>
          <p>Incorporating a bold sports watch design with the finesse of a gold-tone case, the GM110G-1A9 model is the epitome of ‘sizzle and steak’. This G-Shock model incorporates an analog-digital dial display and a slew of functionalities that make it as practical as it is stylish. Despite what you might initially think at first glance, the GM110G-1A9 is also surprisingly sleek and compact with its 48.8mm resin and gold ion-plated stainless-steel case.</p>
          <p>
            <strong>size: </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem