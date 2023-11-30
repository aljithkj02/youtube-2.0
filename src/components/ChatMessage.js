import React from 'react'
import { USER_ICON_CDN } from '../utils/constants'

export const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex gap-3 shadow-md p-3 items-center bg-slate-100'>
        <img src={USER_ICON_CDN} alt="search" 
            className='h-7'
        />
        <span className='font-bold'>{ name }</span>
        <span>{ message }</span>
    </div>
  )
}
