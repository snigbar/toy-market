import React from 'react'
import { Link } from 'react-router-dom';

const TabularData = ({data}) => {

    const {seller_name,product_name,category,price,available_quantity,_id} = data;
   
  return (
    <tr>
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
    <Link to={`/`} className='w-full flex justify-center'>
      <button className="btn btn-error text-white bg-[#FF1821] hover:bg-[#e4161d] border-none mx-auto text-xs rounded-full">View Details</button>
    </Link>
    </td>
  </tr>
  )
}

export default TabularData