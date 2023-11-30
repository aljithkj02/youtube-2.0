import React from 'react'
import { useVideos } from '../hooks/useVideos'
import { useSelector } from 'react-redux'
import { VideoCard } from '../components/VideoCard'
import { useNavigate } from 'react-router-dom'

const tags = ["All", "Music", "Live", "Bollywood Music", "T-Series", "Ceremonies", "Mantras"];

const Tag = ({ text, index }) => {
  let style;
  if(index === 0) {
    style = 'bg-black text-white';
  }else{
    style = 'bg-gray-200 text-black hover:bg-gray-300 duration-200';
  }

  return (
      <p className={`py-1 px-3 rounded-md ${style} cursor-pointer`}>{ text }</p>
  )
}

const Home = () => {
  useVideos();
  const navigate = useNavigate();
  const popularVideos = useSelector(store => store.app.popularVideos); 
  
  return popularVideos && (
    <div className="my-5">
      <div className='flex gap-3'>
        {tags.map((item, i) => {
          return <Tag key={i} text={item} index={i} />
        })}
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6">
        { popularVideos.map(( item ) => {
          return (
            <div onClick={() => {
              navigate(`/watch?v=${item.id}`, { state: item } );
            }}>
              <VideoCard key={item.id} {...item}/>
            </div>
        )})}
      </div>
    </div>
  )
}

export default Home