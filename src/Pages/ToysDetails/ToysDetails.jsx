import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaStar, FaDollarSign,FaStore} from "react-icons/fa";
import useTitle from '../../Hooks/useTitle';

const ToysDetails = () => {
    const data = useLoaderData()
    const {_id, product_name, seller_name, seller_email, category, picture_url, price, rating, toy_name, sub_category, available_quantity,detail_description} =data;

    useTitle("All Toys")

  return (
   

    <div className='flex justify-center items-center gap-6 w-full py-10'>
    <img src={picture_url} className='rounded-lg w-96 object-cover'/>
    <div className='flex flex-col justify-center gap-4 w-3/4'>
    <h1 className='text-3xl md:text-5xl text-center md:text-left font-semibold text-zinc-800'>{product_name}</h1>
    <p className='text-center md:text-left'><span className='font-semibold'>Seller: </span>{seller_name}</p>
    <p className='text-center md:text-left'><span className='font-semibold'>Contact Seller: </span>{seller_email}</p>
    <p className='text-center md:text-left'><span className='font-semibold'>Category: </span>{category}</p>
    <div className="flex justify-between w-3/5">
    <p className='text-lg text-center md:text-left'>Price: <FaDollarSign className='inline-block mb-1 text-[#FF1821]'/>{price}</p>
    <p className='text-center md:text-left'>Rating: <FaStar className='inline-block mb-1 text-[#FF1821]'/> {rating}</p>
    <p className='text-lg text-center md:text-left'>Quantity: <FaStore className='inline-block mb-1 text-[#FF1821]'/> {available_quantity}</p>
    </div>
    <h1 className='text-xl font-semibold text-zinc-800 text-center md:text-left'>Description</h1>
    <p className='text-lg text-center md:text-left'>{detail_description} 
    <br/> Littols Toyverse Store has always been interested in curating the finest toys for our customers. Still true to this day, our main focus is always to pick the best of the best. </p>
    </div>

</div>
  )
}

export default ToysDetails