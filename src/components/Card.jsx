import React from 'react'

const Card = ({data}) => {
  return (
    <div className="mb-10 ml-10 bg-blue-400">
    <div className='text-red-500 bg-green-800'>{data.name}</div>
    <div className='text-3xl'>{data.age}</div>
    <div>{data.caption}</div>
    <div>{data.imgurl}</div>
  </div>
  )
}

export default Card