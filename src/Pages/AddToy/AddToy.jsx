import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const AddToy = () => {

    const {user} = useContext(AuthContext);
    // const {product_name, seller_name, seller_email, category, picture_url, price, rating, toy_name, sub_category, available_quantity,detail_description} =data;

    const addProduct = event =>{
        event.preventDefault();
    
        const form = event.target;
        const product_name = form.productname.value;
        const seller_name = form.sellername.value;
        const seller_email = form.email.value;
        const category = form.category.value;
        const picture_url = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const toy_name = form.productname.value;
        const sub_category = form.category.value;
        const available_quantity = form.available.value;
        const detail_description = form.description.value;
       
        
        
        const addData = {
            product_name, seller_name, seller_email, category, picture_url, price, rating, toy_name, sub_category, available_quantity,detail_description
        }

        
        fetch('https://toy-market-server-rouge.vercel.app/add',{
    
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(addData)
        }).then(res => res.json()).then(data => {
            if(data.insertedId) alert("Data added")
           form.reset();
        })
        }

       

  return (
    <div className="p-8 rounded border border-gray-200">    
    <h1 className="font-medium text-4xl">Add A TOY</h1>    
    <p className="text-gray-600 mt-6 text-2xl"></p> 

    <form onSubmit={addProduct}>      
    <div className="mt-8 grid lg:grid-cols-2 gap-4">  
           
    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Product Name</label>
    <input type="text" name="productname" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Product name" required/>       
    </div>
    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
    <input type="text" name="sellername" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" defaultValue={user?.displayName} required/>       
    </div>
    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Email</label>
    <input type="email" name="email" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" defaultValue={user?.email} readOnly/>       
    </div>
    <div>
    <label htmlFor="category" className="text-sm text-gray-700 block mb-1 font-medium">Choose a category</label>

        <select name="category" id="category" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full">
            
            <option value="DC">DC</option>
            <option value="Marvel">Marvel</option>
            <option value="The Incredibles">The Incredibles</option>
            <option value="The Boys">The Boys</option>
            <option value="X-Men">X-Men</option>
            <option value="Ninja Turtles">Ninja Turtles</option>
            <option value="Others">Others</option>
        </select>
          
    </div>  


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
    <input type="text" name="price" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Price" required/>       
    </div>

    
    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Photo Url</label>
    <input type="text" name="photo" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Photo Url" required/>       
    </div>


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Rating</label>
    <input type="number" name="rating" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="rating" required min="0" max="10"/>       
    </div>


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Available Quantity</label>
    <input type="number" name="available" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Available Quantity" required/>       
    </div>


    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Details</label>
    <input type="text" name="description" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Details" required/>       
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

export default AddToy