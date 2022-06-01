import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


const Movie = ({item}) => {
    const [like, setLike] = useState(false)

  return (
    <div className='w-[160px] sm:w-[200px] md:[240px] lg:[280px] inline-block cursor-pointer relative p-2'>
              <img className='w-full h-auto blocl' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
              <div className='w-full h-full top-0 left-0 absolute hover:bg-black/50 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md:tesxt-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
              </div>

            </div>
  )
}

export default Movie