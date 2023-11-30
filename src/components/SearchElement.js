import React from 'react'
import { SEARCH_ICON_CDN } from '../utils/constants'

export const SearchElement = ({ text }) => {
  return (
    <div className='flex items-center gap-4 cursor-pointer hover:bg-gray-200 px-4 py-2 duration-200'>
        <img src={SEARCH_ICON_CDN} alt="search" 
            className='h-4'
        />
        <p className='text-sm font-[500]'>{ text }</p>
    </div>
  )
}
