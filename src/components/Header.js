import React from 'react'
import { LOGO_CDN, MENU_ICON_CDN, SEARCH_ICON_CDN, USER_ICON_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice';

export const Header = () => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='px-5 flex justify-between items-center shadow-md fixed w-full z-10 bg-white'>
            <div className='flex items-center gap-2'>
                <img alt="menu" src={MENU_ICON_CDN} 
                    className='h-8 cursor-pointer'
                    onClick={handleToggle}
                />
                <img alt="logo" src={LOGO_CDN}
                    className='h-14'
                />
            </div>

            <div className='flex'>
                <div>
                    <input type="text" placeholder='Search' 
                        className='border border-gray-300 py-2 px-3 w-[500px] rounded-l-3xl outline-indigo-300'
                    />
                </div>
                <div>
                    <button className='py-2 border border-gray-300 px-5 border-l-0 rounded-r-3xl'>
                        <img src={SEARCH_ICON_CDN} alt="search" 
                            className='h-6'
                        />
                    </button>
                </div>
            </div>

            <div>
                <div>
                    <img src={USER_ICON_CDN} alt="User" 
                        className='h-8'
                    />
                </div>
            </div>
        </div>
    )
}
