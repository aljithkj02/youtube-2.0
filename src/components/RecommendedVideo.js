import React from 'react'
import { convertViewCount } from '../utils';

export const RecommendedVideo = ({ statistics, snippet }) => {
    const { channelTitle , title, thumbnails: { medium: { url }} } = snippet;
    const { viewCount } = statistics;
    
    return (
        <div className='w-10/12 grid grid-cols-[1fr_1.1fr] items-center gap-2'>
            <div>
                <img src={url} alt={title} 
                    className='h-[100px] w-full object-cover rounded-xl hover:rounded-none duration-200'
                />
            </div>
            <div className='py-3'>
                <div>
                    <h1 className='font-semibold text-sm'>{ title.length > 40 ? title.slice(0, 40) + "...": title }</h1>
                </div>
                <p className='text-gray-500 text-[12px]'>{ channelTitle }</p>
                <p className='text-gray-500 text-sm text-[12px]'>{ convertViewCount(viewCount) }</p>
            </div>
        </div>
    )
}
