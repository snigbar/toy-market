import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import useTitle from '../../Hooks/useTitle';

const Update = () => {

 const data = useLoaderData()
 const {_id,price:toyPrice,available_quantity:quantity,detail_description:description} =data;
 useTitle("update")

 const updateToy =(e) =>{
    e.preventDefault();
    
        const form = e.target;
    
        const price = form.price.value;
        const available_quantity = form.available.value;
        const detail_description = form.description.value;
       
        const update ={price,available_quantity,detail_description}

      
        
        fetch(`https://toy-market-server-rouge.vercel.app/update/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
           

        })
        .then(res =>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("updated successfully")
            }
        })
 }


  return (
    <div className="p-8 rounded border border-gray-200 my-4 py-4">    
    <h1 className="font-medium text-4xl">Update Toy Details</h1>    
    <p className="text-gray-600 mt-6 text-2xl"></p> 

    <form onSubmit={updateToy}>      
    <div className="mt-8 grid lg:grid-cols-2 gap-4">  


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
    <input type="text" name="price" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Price" required defaultValue={toyPrice}/>       
    </div>




    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Available Quantity</label>
    <input type="number" name="available" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Available Quantity" required defaultValue={quantity}/>       
    </div>


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Details</label>
    <input type="text" name="description" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Details" required defaultValue={description}/>       
    </div>


    <div className="space-x-4 mt-8"> 
    <button className="btn text-white bg-red-600 hover:bg-red-500 text-lg my-4 rounded-xl border-none" type='submit'>Submit</button>
   <Link to='/'><button className="btn text-lg bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button></Link>   
    </div>    
     
    </div>
    </form> 
    </div>
  )
}

export default Update