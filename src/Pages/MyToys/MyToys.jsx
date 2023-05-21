import React, { useContext, useEffect, useState } from 'react'
import TabularData from '../../Components/TabularData/TabularData'
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysCard from './MyToysCard';
import swal from 'sweetalert';
import useTitle from '../../Hooks/useTitle';



const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([])
    const  [sort, setSort] = useState(1) 

    useTitle("My Toys")
   

    const url = `https://toy-market-server-rouge.vercel.app/mytoys?email=${user?.email}&sort=${sort}`;
    
    useEffect(()=>{ 
        const fetchData =async() =>{
         
         const response =await fetch(url)
         const data = await response.json()
        
        if(!data.error) {
          setToys(data)
        }
        }
        
        fetchData()
        
  
      },[url,sort])


      const handleDelete = (id) =>{

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete the booking?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                
                fetch(`https://toy-market-server-rouge.vercel.app/mytoys/${id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        swal("Deleted!", "Your service has been deleted!", "success");
                         const remaining = toys.filter(el => el._id !== id)
                         setToys(remaining)
                    }
                })

             
            }
          }); 
    }

  return (
    <section  className='py-10'>

    <div className='w-4/5 mx-auto'>
        <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem] my-6'>My Toys</h1>


            
            <button className='btn btn-secondary text-white bg-cyan-500 hover:bg-cyan-600 text-xs px-4 py-0 my-5 mx-4 border-none' onClick={()=> setSort(-1)}>descending</button>
            <button className='btn btn-secondary text-white bg-cyan-500 hover:bg-cyan-600 text-xs px-4 py-0 my-5 border-none' onClick={()=> setSort(1)}>descending</button>
            
    

        <div className="container">

        <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d] text-center w-max'></th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d] text-center w-max'>Seller</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>TOY Name</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Category</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Price</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>
            Quantity
        </th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>Details</th>
        <th className=' text-white bg-[#FF1821] hover:bg-[#e4161d]'>update</th>
      </tr>
    </thead>
    <tbody>
      
      {
       toys.length !==0? toys.map(el => <MyToysCard key={el._id} data={el} handleDelete={handleDelete}>{el._id}</MyToysCard>)
       :<div className='w-full mx-auto text-center p-4 text-4xl text-red-600'><p className='text-center'>You didn't added any toy</p></div>
      }
    </tbody>   
  </table>

           
 </div>
    </div>
    </section>
  )
}

export default MyToys