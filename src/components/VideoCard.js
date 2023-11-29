import React from 'react'
import { convertViewCount } from '../utils';

export const VideoCard = ({ statistics, snippet }) => {
    const { channelTitle , title, thumbnails: { medium: { url }} } = snippet;
    const { viewCount } = statistics;
    
    return (
        <div>
            <div>
                <img src={url} alt={title} 
                    className='h-[180px] w-full object-cover rounded-xl hover:rounded-none duration-200'
                />
            </div>
            <div className='py-5'>
                <div className='h-12'>
                    <h1 className='font-bold'>{ title.length > 75 ? title.slice(0, 75) + "...": title }</h1>
                </div>
                <p className='text-gray-500 text-sm'>{ channelTitle }</p>
                <p className='text-gray-500 text-sm'>{ convertViewCount(viewCount) }</p>
            </div>
        </div>
    )
}
