import React from 'react'

export const Video = ({ videoId}) => {
  return (
    <div>
        <iframe
            className='w-full aspect-video rounded-xl'
            src={`https://www.youtube.com/embed/${videoId}?si=pLEtkAapl548d7hR&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
  )
}
