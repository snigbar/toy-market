import React, { useContext, useEffect, useState } from 'react'
import TabularData from '../../Components/TabularData/TabularData'
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysCard from './MyToysCard';

const MyToys = () => {

    const {user,token} = useContext(AuthContext);
    const [toys, setToys] = useState([])


    const url = `https://toy-market-server-rouge.vercel.app/mytoys?email=contact@toystore.com`;
    // const url = `https://toy-market-server-rouge.vercel.app/mytoys?email=${user?.email}`;

    useEffect(()=>{ 
        const fetchData =async() =>{
         
         const response =await fetch(url)
         const data = await response.json()
        
        if(!data.error) {
          setToys(data)
        }
        }
        
        fetchData()
        
  
      },[url])



  return (
    <section  className='py-10'>

    <div className='w-4/5 mx-auto'>
        <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem] my-6'>My Toys</h1>

        <div className="container">

        <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d] text-center w-max'>Seller</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>TOY Name</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Category</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Price</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>
            Quantity
        </th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Details</th>
      </tr>
    </thead>
    <tbody>
      
      {
        toys.map(el => <MyToysCard key={el._id} data={el}>{el._id}</MyToysCard>)
      }
    </tbody>   
  </table>

           
 </div>
    </div>
    </section>
  )
}

export default MyToys