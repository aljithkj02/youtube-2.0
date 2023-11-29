import React from 'react'
import { useVideos } from '../hooks/useVideos'
import { useSelector } from 'react-redux'
import { VideoCard } from '../components/VideoCard'
import { Link } from 'react-router-dom'

const Home = () => {
  useVideos();
  const popularVideos = useSelector(store => store.app.popularVideos); 
  
  return popularVideos && (
    <div className="my-8 ml-10">
      <div className="grid grid-cols-4 gap-5">
        { popularVideos.map(( item ) => {
          return (
            <Link to={`/watch`} >
              <VideoCard key={item.id} {...item}/>
            </Link>
        )})}
      </div>
    </div>
  )
}

export default Home