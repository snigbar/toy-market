import React from 'react'
import { Link } from 'react-router-dom';

const MyToysCard = ({data,handleDelete}) => {
    const {seller_name,product_name,category,price,available_quantity,_id} = data;
   
    return (
      <tr>
      <td>
      
      <button className="btn btn-circle btn-error btn-outline" onClick={()=>handleDelete(_id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
         
      </td>
      <td>
      
      {seller_name}
         
      </td>
      <td className="text-xl font-semibold">
     {product_name}
      </td>
      <td>
     {category}
      </td>
      <td>
      ${price}
      </td>
      <td>
       {available_quantity}
      </td>
      <td>
      <Link to={`/details/${_id}`} className='w-full flex justify-center'>
        <button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#e4161d] border-none mx-auto text-xs rounded-full py-4">View Details</button>
      </Link>
      </td>
      <td>
      <Link to={`/mytoys/update/${_id}`} className='w-full flex justify-center'>
        <button className="btn btn-error text-white bg-cyan-500 hover:bg-cyan-600 border-none mx-auto text-xs rounded-full py-4">update</button>
      </Link>
      </td>

    </tr>
    )
}

export default MyToysCard