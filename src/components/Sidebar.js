import React from 'react'

export const Sidebar = () => {

  return (
    <div className='py-3 min-h-[91vh] shadow-xl'>
      <div className='border border-transparent border-b-gray-300 py-4'>
        <ul className='flex flex-col gap-2'>
          <li className='cursor-pointer text-black'>Home</li>
          <li className='cursor-pointer text-gray-500 hover:text-black duration-200'>Shorts</li>
          <li className='cursor-pointer text-gray-500 hover:text-black duration-200'>Subscriptions</li>
        </ul>
      </div>

      <div className='border border-transparent border-b-gray-300 py-4'>
        <ul className='flex flex-col gap-2'>
          <li className='cursor-pointer text-gray-500 hover:text-black duration-200'>History</li>
          <li className='cursor-pointer text-gray-500 hover:text-black duration-200'>Watch later</li>
          <li className='cursor-pointer text-gray-500 hover:text-black duration-200'>Liked videos</li>
        </ul>
      </div>
    </div>
  )
}
