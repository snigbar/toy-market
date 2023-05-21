import React from 'react'
import { Link } from 'react-router-dom'

const ToyCards = ({toydata}) => {
 
    const {_id,picture_url,price, product_name,rating,category} =toydata;
  return (
 <div>
      <div className="card card-compact bg-base-100 shadow-xl">
  <figure className='p-2'><img src={picture_url} className='w-52 h-56 object-cover ' /></figure>
  <div className="card-body py-4">
    <h2 className="text-xl font-semibold text-center">{product_name}</h2>
    <h2 className="text-zinc-800 text-center">{category}</h2>
   
    <div className="card-actions w-full justify-between items-center py-3 text-center">
    <p className='text-[#FF1821] text-[1rem]'>Price: ${price}</p>
    <p className='text-[#FF1821] text-[1rem]'>Rating: {rating}</p>
    </div>
    <Link to={`/`} className='w-full flex justify-center'>
      <button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#e4161d] border-none mx-auto font-bold rounded-full">View Details</button>
    </Link>
  </div>
</div>
 </div>
  )
}

export default ToyCards