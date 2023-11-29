import React, { useState } from 'react'
import { LOGO_CDN, MENU_ICON_CDN, SEARCH_ICON_CDN, USER_ICON_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/appSlice';
import { SearchElement } from './SearchElement';
import { toggleIsSearchOpen } from '../redux/searchSlice';
import { useSearch } from '../hooks/useSearch';

export const Header = () => {
    const [query, setQuery] = useState('');
    const [focus, setFocus] = useState(false);

    const [searchQueries, isSearchOpen] = useSearch(query);
    const searchQueriesData = searchQueries[query] || [];

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMenu());
    }

    const handleQueryChange = async (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    return (
        <div className='px-5 flex justify-between items-center shadow-sm fixed w-full z-10 bg-white'>
            <div className='flex items-center gap-2'>
                <img alt="menu" src={MENU_ICON_CDN} 
                    className='h-8 cursor-pointer'
                    onClick={handleToggle}
                />
                <img alt="logo" src={LOGO_CDN}
                    className='h-14'
                />
            </div>

            <div className='flex relative'>
                { focus && <div>
                    <button className='py-3 border border-gray-300 px-1 pl-4 rounded-l-3xl border-r-0'>
                        <img src={SEARCH_ICON_CDN} alt="search" 
                            className='h-4'
                        />
                    </button>
                </div> }
                <div>
                    <input type="text" placeholder='Search' value={query} onChange={handleQueryChange} 
                        className='border border-gray-300 py-2 px-3 w-[500px] rounded-l-3xl outline-none focus:rounded-none focus:border-l-0'
                        onFocus={() => {
                            setFocus(true);
                            dispatch(toggleIsSearchOpen(true));
                        }} onBlur={() => { 
                            setFocus(false);
                            dispatch(toggleIsSearchOpen(false));
                        }}
                    />
                </div>
                <div>
                    <button className='py-3 border border-gray-300 px-5 border-l-0 rounded-r-3xl'>
                        <img src={SEARCH_ICON_CDN} alt="search" 
                            className='h-4'
                        />
                    </button>
                </div>
                { isSearchOpen && searchQueriesData[0] && <div className='absolute top-14 bg-white shadow-xl w-full rounded-xl flex flex-col py-4'>
                    {searchQueriesData.map((text) => {
                        return <SearchElement key={text} text={text} />
                    })}
                </div> }
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
